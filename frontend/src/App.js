import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
    <div className="App">
     <h1>Howdy</h1>
     <Routes>
     <Route path='/signup' element={<SignUp />} />
     <Route path='/login' element={<Login />} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
