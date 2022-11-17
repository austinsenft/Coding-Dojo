import './App.css';
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import {AllAuthors} from './views/AllAuthors';
import { EditAuthor } from './views/EditAuthor';
import { OneAuthor } from './views/OneAuthor';
import { NewAuthor } from './views/NewAuthor';
import { NotFound } from './views/NotFound';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Authors</h1>
          <div className="navbar-nav justify-content-between">
            <Link
              to="/authors"
              className='btn btn-sm btn-outline-primary mx-1'>
                All Authors
            </Link>
            <Link
              to="/authors/new"
              className='btn btn-sm btn-outline-primary mx-1'>
                New Author
            </Link>
          </div>
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to='/authors' replace/>}/>
        <Route path="/authors" element={<AllAuthors/>}/>
        <Route path="/authors/:id/edit" element={<EditAuthor/>}/>
        <Route path="/authors/:id" element={<OneAuthor/>}/>
        <Route path="/authors/new" element={<NewAuthor/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;