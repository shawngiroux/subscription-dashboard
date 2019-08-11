from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

user     = os.environ['DB_USERNAME']
password = os.environ['DB_PASSWORD']
host     = os.environ['DB_HOSTNAME']
database = os.environ['USER_DB']

conn_string = "mysql+pymysql://%s:%s@%s/%s" % (
    user, password, host, database
)
engine = create_engine(conn_string)

# Table descriptions
Base = declarative_base()

class User(Base):
    __tablename__ = 'tbl_users'

    id           = Column(Integer, primary_key=True)
    fld_username = Column(String(60), unique=True, nullable=False)
    fld_password = Column(String(128), nullable=False)


# Create tables
Base.metadata.create_all(engine)

Session = sessionmaker()
Session.configure(bind=engine)

session = Session()