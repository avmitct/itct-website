from flask import Flask, render_template, request, redirect, url_for, session
import sqlite3
import os

app = Flask(__name__)
app.secret_key = 'itct_secret_key_123'   # Required for login session

# 🔐 ADMIN CREDENTIALS
ADMIN_USERNAME = "itctadmin"
ADMIN_PASSWORD = "itct@2026"

# ---------------- DATABASE ----------------
def get_db_connection():
    conn = sqlite3.connect('students.db')
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            dob TEXT,
            course TEXT,
            mobile TEXT,
            address TEXT
        )
    ''')

    conn.commit()
    conn.close()

init_db()

# ---------------- ROUTES ----------------

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/admission')
def admission():
    return render_template('admission.html')


@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    dob = request.form['dob']
    course = request.form['course']
    mobile = request.form['mobile']
    address = request.form['address']

    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('''
        INSERT INTO students (name, dob, course, mobile, address)
        VALUES (?, ?, ?, ?, ?)
    ''', (name, dob, course, mobile, address))

    conn.commit()
    conn.close()

    return redirect(url_for('home'))


# ---------------- ADMIN LOGIN ----------------
@app.route('/admin', methods=['GET', 'POST'])
def admin():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if username == ADMIN_USERNAME and password == ADMIN_PASSWORD:
            session['admin'] = True
            return redirect(url_for('students'))
        else:
            return render_template('admin.html', error="Invalid Credentials")

    return render_template('admin.html')


# ---------------- LOGOUT ----------------
@app.route('/logout')
def logout():
    session.pop('admin', None)
    return redirect(url_for('admin'))


# ---------------- VIEW STUDENTS (PROTECTED) ----------------
@app.route('/students')
def students():
    if not session.get('admin'):
        return redirect(url_for('admin'))  # 🔐 Protect route

    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM students")
    data = cursor.fetchall()

    conn.close()

    return render_template('students.html', students=data)


# ---------------- RUN ----------------
if __name__ == '__main__':
    app.run(debug=True)
