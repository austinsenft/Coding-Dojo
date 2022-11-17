import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/esm/popper.min.js';
import { Link, navigate, Router } from '@reach/router';
import UserPage from './views/UserPage';
import UserReg from './views/UserReg';
import UserLogin from './views/UserLogin';
import AllUsers from './views/AllUsers';
import ShowUser from './views/ShowUser';
import UserEdit from './views/UserEdit';
// import Axios from 'axios'
import background from './assets/img/military.jpg';
import Axios from 'axios';
import Recruitment from './views/Recruitment.jsx'
// import Show from './views/Show';
// import Edit from './views/Edit';


function App() {

  const [logged, setLogged] = useState(null);
  const handleLogout = () => {
    Axios.get("http://localhost:8000/api/logout", { withCredentials: true })
      .then(res => {
        navigate("/")
        setLogged("")
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="App" style={{ backgroundImage: ` url(${background})` }}>
      {logged !== "" ? <div className="d-flex col-8 mx-auto justify-content-center">
        {logged !== null ? <Link className="btn btn-outline-warning btn-dark" to={`/user/edit/${logged.id}`}>{logged.userName}</Link> : ""}
      </div> : ""}
      <div className="col mx-auto">
        {logged !== null ? <Link to={`/userpage/${logged._id}`}><b><h1 id="loginH1" className="p-2">Military Facebook</h1></b></Link> : <Link to={`/new`}><b><h1 id="loginH1" className="p-2">Military Facebook</h1></b></Link>}
      </div>
      <div className="col mx-auto ">
        {/* <Link to="/new" className="btn btn-info btn-outline-dark">Military Facebook</Link> */}


        <Link to={logged !== null ? `/userpage/${logged.id}` : "/"} id="m-1" className="btn btn-info btn-outline-dark p-1">Home</Link>
        <Link to="/user" id="m-1" className="btn btn-info btn-outline-dark p-1">Friends</Link>
        <Link to="/recruitment" id="m-1" className="btn btn-info btn-outline-dark p-1">Recruitment</Link>
        {logged !== null ? <Link onClick={handleLogout} id="m-1" className="btn btn-outline-dark btn-info p-1" to={`/user/edit/${logged.id}`}>Logout</Link> : <Link id="m-1" className="btn btn-outline-dark btn-info p-1" to="/">Login</Link>} 



      </div>
      <Router>
        <UserPage
          path="/userpage/:id"
          logged={logged}
        />
        <UserReg
          path="/new"
          setLogged={setLogged}
        />
        <UserLogin
          path="/"
          setLogged={setLogged}
        />

        <Recruitment 
          path="/recruitment"
          logged={logged}
        />
        <AllUsers path="/user"/> 
        <ShowUser path="/user/:id"/>
        <UserEdit 
          path="/user/edit/:id"
          setLogged={setLogged}
          logged={logged}
        />

      </Router>

    </div>
  );
}

export default App;
