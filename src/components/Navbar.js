import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar(props) {
    const location = useLocation();
    const handleModeClick = () => {
        props.setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
        
    };

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
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleModeClick} />
                        <label className={`form-check-label mx-2 text-${props.mode === "light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">{`${props.mode === "light" ? "Dark" : "Light"}`} Mode</label>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
