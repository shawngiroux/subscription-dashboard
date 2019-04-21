from argon2 import PasswordHasher
import mysql.connector
from mysql.connector import errorcode
import os

class Login:
    ph = False
    users_db = False

    def __init__(self):
        self.ph = PasswordHasher()
        self.users_db = mysql.connector.connect(
            user     = os.environ.get('DB_USERNAME'),
            password = os.environ.get('DB_PASSWORD'),
            host     = os.environ.get('DB_HOSTNAME'),
            database = os.environ.get('USER_DB')
        )

    def login(self, username, password):
        cursor = self.users_db.cursor()

        query = ("SELECT fld_password FROM tbl_users "
                 "WHERE fld_username = %(username)s")
        params = {
            'username': username
        }

        try:
            cursor.execute(query, params)
            for fld_password in cursor:
                hash = fld_password[0]
            return self.ph.verify(hash, password)
        except Exception as err:
            print(err)
            return False

    def signup(self, username, password):
        hash   = self.ph.hash(password)
        cursor = self.users_db.cursor()

        query = ("INSERT INTO tbl_users"
                 "(fld_username, fld_password)"
                 "VALUES"
                 "(%(username)s, %(password)s)")
        params = {
            'username': username,
            'password': self.ph.hash(password)
        }

        try:
            cursor.execute(query, params)
            self.users_db.commit()
            return True

        except mysql.connector.Error as err:
            if err.errno == errorcode.ER_DUP_ENTRY:
                return False 

            return "unexpected error"
