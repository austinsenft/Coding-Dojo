from crypt import methods
from flask_app import app 
from flask import render_template, redirect, request, session, flash
from flask_app.models.users_model import User
from flask_app.models.sightings_model import Sighting
from flask_bcrypt import Bcrypt 
bcrypt = Bcrypt(app)

@app.route('/new/sighting')
def new_sighting(): 
    if 'user_id' not in session: 
        return redirect('/')
    user_data = {
        'id' : session['user_id']
    }
    logged_user = User.get_by_id(user_data)
    all_sightings = Sighting.get_all()
    return render_template('new_sighting.html', logged_user = logged_user, all_sightings = all_sightings)

@app.route('/sighting/create', methods=['POST'])
def create_sighting(): 
    if 'user_id' not in session: 
        return redirect('/')
    if not Sighting.validator(request.form): 
        return redirect('/new/sighting')
    data = {
        **request.form, 
        'user_id' : session['user_id']
    }
    id = Sighting.create(data)
    return redirect('/dashboard')

@app.route('/show/<int:id>')
def one_sighting(id): 
    if 'user_id' not in session: 
        return redirect('/')
    user_data = {
        'id' : session['user_id']
    }
    logged_user = User.get_by_id(user_data)
    this_sighting = Sighting.get_by_id({'id':id})
    all_sightings = Sighting.get_all()
    return render_template("view_sighting.html", logged_user = logged_user, this_sighting = this_sighting, all_sightings = all_sightings)

@app.route('/sighting/<int:id>/edit')
def edit_sighting(id): 
    if 'user_id' not in session: 
        return redirect('/')
    user_data = {
        'id' : session['user_id']
    }
    logged_user = User.get_by_id(user_data)
    this_sighting = Sighting.get_by_id({'id':id})
    return render_template("edit_sighting.html", logged_user = logged_user, this_sighting = this_sighting)

@app.route('/sighting/<int:id>/update', methods=['POST'])
def update_sighting(id): 
    if not Sighting.validator(request.form): 
        return redirect(f'/sighting/{id}/edit')
    sighting_data = {
        **request.form, 
        'id':id
    }
    Sighting.update(sighting_data)
    return redirect('/dashboard')


@app.route('/sighting/<int:id>/delete')
def delete_sighting(id): 
    Sighting.delete({'id':id})
    return redirect('/dashboard')