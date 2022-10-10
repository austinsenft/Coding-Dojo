from crypt import methods
from flask_app import app 
from flask import render_template, redirect, request, session, flash
from flask_app.models.users_model import User
from flask_bcrypt import Bcrypt 
bcrypt = Bcrypt(app)

@app.route('/')
def homepage(): 
    return render_template('index.html')

# dashboard once logged in 
@app.route('/dashboard')
def dashboard(): 
    if not "user_id" in session: 
        return redirect('/')
    return render_template('dashboard.html')

# register route  
@app.route('/users/register', methods=['POST'])
def reg_user(): 
    if not User.validator(request.form): 
        return redirect('/')
    hash_browns = bcrypt.generate_password_hash(request.form['password'])
    data = {
        **request.form, 
        'password' : hash_browns
    }
    new_id = User.create(data)
    session['user_id'] = new_id
    return redirect('/dashboard')

# login route 
@app.route('/users/login', methods=['POST'])
def log_user(): 
    data = {
        'email' : request.form['email'],
    }
    user_in_db = User.get_by_email(data)
    if not user_in_db: 
        flash("Invalid Credentials", "log")
        # don't let people know what info they got wrong, best security practice 
        return redirect('/')
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash(" **Invalid Credentials** ", "log")
        # stars are to let me as dev know which error  
        return redirect('/')
    session['user_id'] = user_in_db.id 
    return redirect('/dashboard')

# logout route 
@app.route('/users/logout')
def log_out_user(): 
    del session['user_id']
    return redirect('/')