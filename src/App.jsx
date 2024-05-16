import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllMoviesComponent from './components/GetAllMoviesComponent/GetAllMoviesComponent'
import AddNewMoviesComponent from './components/AddNewMoviesComponent/AddNewMoviesComponent'
import GetSuggestionComponent from './components/GetSuggestionComponent/GetSuggestionComponent'


function App() {
  return (
    <Router>
            <div className="container">
              <h1>Movie Suggestion App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Movies</Link>
                <Link to="/admin/get" >Get Suggestions</Link>
            </nav>

           <Routes>
                 <Route exact path='/' element={<GetAllMoviesComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewMoviesComponent/>}></Route>
                 <Route path='/admin/get' element={<GetSuggestionComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
