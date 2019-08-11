from argon2 import PasswordHasher
from Api.dbSetup import User

class Login:
    ph = False

    def __init__(self):
        self.ph = PasswordHasher()

    def login(self, username, password, session):
        hash = False
        for fld_password, in session.query(User.fld_password).\
                             filter(User.fld_username==username):
            hash = fld_password

        if hash != False:
            try:
                return self.ph.verify(fld_password, password)
            except Exception as err:
                print(err)
                return False
        else:
            return False

    def signup(self, username, password, session):
        hash = self.ph.hash(password)
        new_user = User(fld_username=username, fld_password=hash)
        try:
            session.add(new_user)
            session.commit()
            return True
        except Exception as err:
            print(err)
            return False