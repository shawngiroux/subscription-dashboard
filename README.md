## Initial Setup
To initialize the API, run these commands:
```
$ virtualenv -p python3 flask
$ flask/bin/pip install -r requirements.txt
```

Set up your environment variables as such:
```
export DB_USERNAME="your_username"
export DB_PASSWORD="your_password"
export DB_HOSTNAME="your_hostname"
export USER_DB="your_users_db"
```

To host the API locally, run this command:
```
$ flask/bin/python3 app.py
```

To run the webapp, run these commands from the cloned repo:
```
$ cd dashboard/
$ npm install
$ npm start
```
