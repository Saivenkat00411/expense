import './App.css';
import Login from './pages/Login';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Register from './pages/Register';
import background from './public/img/background.jpg'
function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${background})`, height: "100vh"
      }}>
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
