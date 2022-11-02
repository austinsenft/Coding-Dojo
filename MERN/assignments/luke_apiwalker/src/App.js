import './App.css';
import ErrorPage from './components/ErrorPage';

import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Star Wars Routing</h1>
      {/* <a href="/">a tag home</a> |  */}
      <Link to={"/"}>Link home</Link> |
      <Link to={"/other"}>other</Link> |
      <Link to={"/form"}>FORM</Link>
      <hr />

      

      <fieldset>
        <legend>Routes component</legend>


        <Routes>



          {/* wildcard */}
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </fieldset>
    </div>
  );
}

export default App;
