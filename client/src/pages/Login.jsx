import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <form className="p-4 border rounded" style={{maxWidth: '300px', width: '100%'}}>
          <h3 className="text-center mb-4 text-light">Login</h3>
          <div className="mb-3">
            <label for="email" className="form-label text-light">Email address</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label for="inputPassword" className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control form-control-sm"
              id="inputPassword"
            />
          </div>
          <button type="button" id='signin-btn' className="btn btn-primary btn-sm w-100">Login</button>
          <Link className='text-decoration-underline text-secondary' to="/Register">New user</Link>
        </form>
      </div>

    </>
  )
}

export default Login