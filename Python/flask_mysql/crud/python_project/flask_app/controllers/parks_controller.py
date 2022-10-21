from crypt import methods
import requests
from flask_app import app 
from flask import render_template, redirect, request, session, flash
from flask_app.models.users_model import User
from flask_app.models.reviews_model import Review
from flask_bcrypt import Bcrypt 
bcrypt = Bcrypt(app) 


@app.route('/parks/<id>')
def view_one(id): 
    r = requests.get('https://developer.nps.gov/api/v1/parks?id=' + id + '&api_key=mBrr0IDm7roWy9OiTTfGcWfBMyAgf8xXggBJmZgN' )
    parkinfo = r.json()

    return render_template('view_one.html', parkinfo = parkinfo, id = id)

