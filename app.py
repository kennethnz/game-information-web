from flask import Flask, render_template
import mysql.connector
import os

app = Flask(__name__)

def get_db_connection():
    conn = mysql.connector.connect(
        host=os.environ.get('DB_HOST'),
        user=os.environ.get('DB_USER'),
        password=os.environ.get('DB_PASSWORD'),
        database=os.environ.get('DB_NAME')
    )
    return conn

@app.route('/')
def index():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM games')
    games = cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template('index.html', games=games)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)