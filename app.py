#!flask/bin/python
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'data': "we did it bois"})

if __name__ == '__main__':
    app.run(debug=True)
