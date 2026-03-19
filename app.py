from flask import Flask, render_template, request, redirect, url_for
import sqlite3
import os

app = Flask(__name__)

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


# ---------------- VIEW STUDENTS ----------------
@app.route('/students')
def students():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM students")
    data = cursor.fetchall()

    conn.close()

    return render_template('students.html', students=data)


# ---------------- RUN ----------------
if __name__ == '__main__':
    app.run(debug=True)
