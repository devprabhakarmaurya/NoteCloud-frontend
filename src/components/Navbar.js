import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar(props) {
    const location = useLocation();
    let navigate= useNavigate();
    const handleModeClick = () => {
        props.setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
        if (props.mode === "light"){
            props.showAlert("Dark Mode Enabled",'dark')
        }else{
            props.showAlert("Light Mode Enabled",'info');
        }
    };
    const renderAuthButtons = () => {
        if (!localStorage.getItem('token')) {
            return (
                <>
                    <Link to="/login" className={`btn btn-${props.mode === "light" ? "light" : "dark"} mx-1`} role="button">Login</Link>
                    <Link to="/signup" className={`btn btn-${props.mode === "light" ? "light" : "dark"} mx-1`} role="button">Signup</Link>
                </>
            );
        } else {
            return (
                <button className={`btn btn-${props.mode === "light" ? "light" : "dark"} mx-1`} onClick={handleLogout}>Logout</button>
            );
        }
    };
    const handleLogout=()=>{
        localStorage.removeItem("token");
        navigate('/login');
        props.showAlert("Logged Out Successfully", "success");
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme={props.mode === "light" ? "light" : "dark"}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NoteCloud</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <label className={`label mx-1 my-2 text-${props.mode === "light" ? "dark" : "light"}`} onClick={handleModeClick} htmlFor="flexSwitchCheckDefault">{`${props.mode === "light" ? "Dark" : "Light"}`} Mode</label>

                        </li>
                    </ul>
                    <div className="d-flex">
                        {renderAuthButtons()}
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
