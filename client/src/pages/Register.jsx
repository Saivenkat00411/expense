import React from 'react'
import { Form, Link, redirect } from 'react-router-dom';
import axios from 'axios';
export async function action({ request }) {
  const data = await request.formData();
  const formSubmission = {
    email: data.get('emailRegister'),
    password: data.get('inputPasswordRegister'),
    name:data.get('name')
  };
  try {
    await axios.post('user/register',formSubmission)
  } catch (error) {
    throw error;
  }
  return redirect('../dashboard');
}
function Register() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <Form method="POST" className="p-4 border rounded" style={{ maxWidth: '300px', width: '100%' }}>
          <h3 className="text-center mb-4 text-light">Register</h3>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-light">Name</label>
            <input
              type="text"
              className="form-control form-control-sm"
              name="name"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailRegister" className="form-label text-light">Email address</label>
            <input
              type="email"
              className="form-control form-control-sm"
              name="emailRegister"
              id="emailRegister"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPasswordRegister" className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control form-control-sm"
              name="inputPasswordRegister"
              id="inputPasswordRegister"
            />
          </div>
          <button  id='signup-btn' className="btn btn-primary btn-sm w-100">Register</button>
          <Link className='text-decoration-underline text-secondary' to="/">Existing User</Link>
        </Form>
      </div>
    </>
  )
}

export default Register