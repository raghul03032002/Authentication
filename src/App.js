import { Route, Routes } from 'react-router-dom';
// import './App.css';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/Home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
