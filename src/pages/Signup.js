import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [creds, setCreds] = useState({ name: "", email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    // console.log("clicked")
    e.preventDefault();
    const url = "http://localhost:5000/api/auth/createuser"
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
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card w-75 rounded shadow-lg">
        <div class="card-body p-5">
          <h2 class="card-title text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="name" class="form-label fs-5">Name:</label>
              <input type="text" class="form-control fs-5" id="name" name="name" placeholder="Enter your name" onChange={onChange} value={creds.name} required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label fs-5">Email:</label>
              <input type="email" class="form-control fs-5" id="email" name="email" placeholder="Enter your email" onChange={onChange} value={creds.email} required />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label fs-5">Password:</label>
              <input type="password" class="form-control fs-5" id="password" name="password" placeholder="Enter your password" onChange={onChange} value={creds.password} minLength={5} required />
            </div>

            <button type="submit" disabled={creds.email.length < 3 || creds.password.length < 5} class="btn btn-primary btn-lg btn-block fs-5">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup