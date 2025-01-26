import React from 'react'
import { Link } from 'react-router-dom';
function Register() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <form className="p-4 border rounded" style={{ maxWidth: '300px', width: '100%' }}>
          <h3 className="text-center mb-4 text-light">Register</h3>
          <div className="mb-3">
            <label for="name" className="form-label text-light">Name</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label for="emailRegister" className="form-label text-light">Email address</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="emailRegister"
            />
          </div>
          <div className="mb-3">
            <label for="inputPasswordRegister" className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control form-control-sm"
              id="inputPasswordRegister"
            />
          </div>
          <button type="button" id='signup-btn' className="btn btn-primary btn-sm w-100">Login</button>
          <Link className='text-decoration-underline text-secondary' to="/">Existing User</Link>
        </form>
      </div>
    </>
  )
}

export default Register