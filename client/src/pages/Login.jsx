import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Link, redirect } from 'react-router-dom';
import axios from 'axios';



export async function action({ request }) {
  const data = await request.formData();
  const formSubmission = {
    email: data.get('email'),
    password: data.get('password')
  };
  // const formSubmission=Object.fromEntries(data);
  try {
    await axios.post('user/login', formSubmission, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    throw error;
  }
  return redirect('../dashboard');
}

function Login() {
  return (
    <>


      <div className="container d-flex justify-content-center align-items-center vh-100">
        <Form method='POST' className="p-4 border rounded" style={{ maxWidth: '300px', width: '100%' }}>
          <h3 className="text-center mb-4 text-light">Login</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">Email address</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control form-control-sm"
              id="inputPassword"
              name="password"
            />
          </div>
          <button id='signin-btn' className="btn btn-primary btn-sm w-100">Login</button>
          <Link className='text-decoration-underline text-secondary' to="/Register">New user</Link>
        </Form>
      </div>

    </>
  )
}

export default Login