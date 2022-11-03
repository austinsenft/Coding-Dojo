import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import Form from './components/Form';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      {/* {JSON.stringify(responseData)} */}
      <h1>SWAPI Luke APIWalker</h1>
      <hr />

      <Form />
      <fieldset>
        <Routes>

          <Route path='/people/:id' element={<People />} />

          <Route path='/planets/:id' element={<Planets />} />

          <Route path='/:error' element={<Error />} />

        </Routes>
      </fieldset>
    </div>
  );
}

export default App;