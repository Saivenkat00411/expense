import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import FormLabel from '@mui/material/FormLabel';
import { Button, FormControl, TextField } from '@mui/material';


function Login() {
  return (
    <>
      <h1>Login</h1>
     
      <form >
          <div className="mb-3 row">
              <label htmlFor="exampleFormControlInput1" className="col-sm-2 col-form-label">Email address</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" />
            </div>
            
          </div>
      </form>
    </>
  )
}

export default Login