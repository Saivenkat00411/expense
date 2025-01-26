import './App.css';
import Login from './pages/Login';
import {  createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register, { action as registerAction } from './pages/Register';
import background from './public/img/background.jpg'
import Dashboard from './pages/Dashboard';
const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "register", element: <Register />,action:registerAction },
  { path: "dashboard", element: <Dashboard />}
]);
function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${background})`, height: "100vh"
      }}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
