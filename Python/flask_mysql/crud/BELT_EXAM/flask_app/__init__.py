from flask import Flask
app = Flask(__name__)
app.secret_key = "shhhhhh"
DATABASE = "sasquatch_schema" 
#connect to your database here ^