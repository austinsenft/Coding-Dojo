from crypt import methods
from flask_app import app 
import requests
from flask import render_template, redirect, request, session, flash
from flask_app.models.users_model import User
from flask_app.models.reviews_model import Review
from flask_bcrypt import Bcrypt 
bcrypt = Bcrypt(app)

@app.route('/reviews/<id>')
def see_reviews(id): 
    if 'user_id' not in session: 
        return redirect('/')
    r = requests.get('https://developer.nps.gov/api/v1/parks?id=' + id + '&api_key=mBrr0IDm7roWy9OiTTfGcWfBMyAgf8xXggBJmZgN' )
    parkinfo = r.json()
    user_data = {
        'id' : session['user_id']
    }
    park_data = {
        'park_id' : id
    }
    logged_user = User.get_by_id(user_data)
    all_reviews = Review.get_all(park_data)
    return render_template('reviews.html', parkinfo = parkinfo, id = id, logged_user = logged_user, all_reviews = all_reviews)
    

@app.route('/reviews/<id>/new') 
def new_review(id):
    if 'user_id' not in session: 
        return redirect('/')
    user_data = {
        'id' : session['user_id']
    }
    park_data = {
        'park_id' : id
    }
    logged_user = User.get_by_id(user_data)
    all_reviews = Review.get_all(park_data) 
    r = requests.get('https://developer.nps.gov/api/v1/parks?id=' + id + '&api_key=mBrr0IDm7roWy9OiTTfGcWfBMyAgf8xXggBJmZgN' )
    parkinfo = r.json()
    return render_template('new_review.html', logged_user = logged_user, all_reviews = all_reviews, parkinfo = parkinfo, id = id)


@app.route('/reviews/<id>/create', methods=['POST'])
def create_review(id): 
    if 'user_id' not in session: 
        return redirect('/')
    if not Review.validator(request.form): 
        return redirect(f'/reviews/{id}/new')
    data = {
        **request.form, 
        'user_id' : session['user_id'], 
        'park_id' : id
    }
    r = requests.get('https://developer.nps.gov/api/v1/parks?id=' + id + '&api_key=mBrr0IDm7roWy9OiTTfGcWfBMyAgf8xXggBJmZgN' )
    parkinfo = r.json()
    Review.create(data)
    return redirect(f'/reviews/{id}')
    

@app.route('/reviews/<park_id>/<id>/delete')
def delete_review(park_id, id): 
    if 'user_id' not in session: 
        return redirect('/')
    r = requests.get('https://developer.nps.gov/api/v1/parks?id=' + id + '&api_key=mBrr0IDm7roWy9OiTTfGcWfBMyAgf8xXggBJmZgN' )
    parkinfo = r.json()
    Review.delete({'id':id})
    return redirect(f'/reviews/{park_id}')