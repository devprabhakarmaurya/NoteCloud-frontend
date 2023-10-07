import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [creds, setCreds] = useState({ name: "", email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    // console.log("clicked")
    e.preventDefault();
    const url = "https://notecloud-server-xu8a.onrender.com/api/auth/createuser"
    try {
      // console.log("clicky try")
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: creds.name, email: creds.email, password: creds.password })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data)
      if (data.token !== "") {
        localStorage.setItem('token', data.token);
        navigate('/');
        props.showAlert("Signedup Successfully", "success")
      }
      // Update the state with fetched notes
    } catch (error) {
      console.error('Error fetching data:', error);
      props.showAlert("Invalid Details", "danger")
    }
  }
  const onChange = (event) => {
    setCreds({ ...creds, [event.target.name]: event.target.value })
  }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card w-75 rounded shadow-lg">
        <div className="card-body p-5">
          <h2 className="card-title text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fs-5">Name:</label>
              <input type="text" className="form-control fs-5" id="name" name="name" placeholder="" onChange={onChange} value={creds.name} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fs-5">Email:</label>
              <input type="email" className="form-control fs-5" id="email" name="email" placeholder="" onChange={onChange} value={creds.email} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fs-5">Password:</label>
              <input type="password" className="form-control fs-5" id="password" name="password" placeholder="" onChange={onChange} value={creds.password} minLength={5} required />
            </div>

            <button type="submit" disabled={creds.email.length < 3 || creds.password.length < 5} className="btn btn-primary btn-lg btn-block fs-5">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup