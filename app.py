from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return """
    <h1>Welcome to ITCT Computer Institute, Nandurbar</h1>
    <p>MS-CIT | Tally | Typing Courses Available</p>
    """

if __name__ == "__main__":
    app.run()