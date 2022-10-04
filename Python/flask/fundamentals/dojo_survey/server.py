from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "Shhhh"  


@app.route('/')  
def hello_world(): 
    return render_template("index.html")

@app.route('/process_form', methods=['POST'])
def process_form(): 
    session['your_name'] = request.form['your_name']
    session['location'] = request.form ['location']
    session['favorite_language'] = request.form ['favorite_language']
    session['comment'] = request.form ['comment']
    return redirect('/result')


@app.route('/result')
def result():
    return render_template("index2.html")

@app.route('/back')
def back(): 
    return redirect('/')


if __name__=="__main__":     
    app.run(debug=True)  
