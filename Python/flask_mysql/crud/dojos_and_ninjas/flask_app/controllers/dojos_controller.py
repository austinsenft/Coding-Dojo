from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.dojos_model import Dojo
from flask_app.models.ninjas_model import Ninja

@app.route('/')
@app.route('/dojos')
def homepage(): 
    dojos = Dojo.get_all()
    print(dojos) 
    return render_template("index.html", list_of_dojos = dojos)

#route to see one dojo
@app.route('/dojos/<int:id>')
def get_one(id): 
    data = {'id': id}
    dojos = Dojo.get_one(data)
    return render_template("dojos.html", dojo=dojos)

#route to create new dojo
@app.route('/create_dojo', methods=["POST"])
def create_dojo(): 
    id = Dojo.create(request.form)
    return redirect(f"/dojos/{id}") 
# Don't forget to redirect after saving to the database