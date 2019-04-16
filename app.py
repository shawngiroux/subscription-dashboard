#!flask/bin/python
from flask import Flask, jsonify, request
from flask_cors import CORS
from pprint import pprint

# Api Imports
import sys
#sys.path.append('/Api/')
from Api.login import Login
from Api.utility import formatError

# Instantiating Api classes
Login = Login()

# Instantiating Flask Object
app = Flask(__name__)
CORS(app)

# Api Endpoints 
@app.route('/login', methods=['POST'])
def login():
    return jsonify(False)

@app.route('/signup', methods=['POST'])
def signup():
    username = request.get_json().get('username')
    password = request.get_json().get('password')

    res = Login.signup(username, password)
    if res == 'unexpected error':
        return jsonify(formatError('500', 'Internal error'))
    elif res is not True:
        return jsonify(formatError('400', 'Username already taken'))


    response = {
        'code': '200',
        'data': {
            'message': 'Registration successful'
        }
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
