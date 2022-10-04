from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "Shhhh"  


@app.route('/')   
def index(): 
    if 'num_visit' not in session: 
        session['num_visit'] = 1
    else: 
        session['num_visit'] += 1
    return render_template('index.html', num = session['num_visit']) 
#trying to make visits go up by one logic 

@app.route('/count')
def count(): 
    session['num_visit'] += 1
    return render_template('index.html', num = session['num_visit']) 
#manually make visits go up by hitting button 

@app.route('/destroy_session')
def destroy_session(): 
    session.clear()
    return redirect('/')
#clear session and cookies when visit the route

@app.route('/destroy',  methods=['POST'])
def destroy(): 
    session.clear()
    return redirect('/')
#clear session manually





if __name__=="__main__":     
    app.run(debug=True)  
