import React from 'react';
import './CSS/Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
            <Link className="navbar-brand" style={{ fontFamily: "'Dancing Script', cursive" }} to="/">Derivative Classes</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
