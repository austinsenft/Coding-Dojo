from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.ninjas_model import Ninja
from flask_app.models.dojos_model import Dojo

@app.route('/ninjas')
def ninjas_homepage(): 
    ninjas = Ninja.get_all()
    print(ninjas) 
    return render_template("ninjas.html", list_of_dojos = Dojo.get_all()) 

@app.route('/ninjas/create', methods = ['POST'])
def create_ninja(): 
    id = Ninja.create(request.form)
    return redirect(f"/dojos/{request.form['dojo_id']}")