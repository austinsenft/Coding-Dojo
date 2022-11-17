import React, {useState} from "react";
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {Login} from "./views/Login"; 
import {Register} from "./views/Register"; 


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
    </div>

  );
}

export default App;
