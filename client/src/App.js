import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
