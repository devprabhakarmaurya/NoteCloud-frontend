import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';



const Login = (props) => {
    const [creds, setCreds] = useState({email:"",password:""});
    let navigate = useNavigate();

    const handleSubmit= async(e)=>{
        // console.log("clicked")
        e.preventDefault();
        const url = "http://localhost:5000/api/auth/login"
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
                body: JSON.stringify({ email: creds.email, password: creds.password })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data)
            if(data.success){
                //Save token on local storge.
                localStorage.setItem('token',data.token);
                navigate("/");
                props.showAlert("Loggedin Successfully","success")
            }
             // Update the state with fetched notes
        } catch (error) {
            console.error('Error fetching data:', error);
            props.showAlert("Invalid Credentials","danger")
        }
    }
    const onChange = (event) => {
        setCreds({ ...creds, [event.target.name]: event.target.value })
    }
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card w-75 rounded shadow-lg">
                <div className="card-body p-5">
                    <h2 className="card-title text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fs-5">Email:</label>
                            <input type="email" className="form-control fs-5" id="email" name="email" value={creds.email} onChange={onChange} placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fs-5">Password:</label>
                            <input type="password" className="form-control fs-5" id="password" name="password" value={creds.password} onChange={onChange} placeholder="Enter your password" required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block fs-5">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login