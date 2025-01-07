import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import logo from '../../assets/logo-sm.png';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg border'>
            <div className="container container-fluid border rounded-4 px-3 py-1">
                <h5 className="navbar-brand mb-0 text-uppercase">
                    <img src={logo} alt="logo photo" style={{ maxWidth: 40 }} /> Game Reviews
                </h5>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink role="button" className="nav-link text-uppercase active" aria-current="page" data-category="mmorpg">mmorpg</NavLink>
                        </li>
                        <li className="nav-item">
                            <a role="button" className="nav-link text-uppercase" data-category="shooter">shooter</a>
                        </li>
                        <li className="nav-item">
                            <a role="button" className="nav-link text-uppercase" data-category="sailing">sailing</a>
                        </li>
                        <li className="nav-item">
                            <a role="button" className="nav-link text-uppercase" data-category="permadeath">permadeath</a>
                        </li>
                        <li className="nav-item">
                            <a role="button" className="nav-link text-uppercase" data-category="superhero">superhero</a>
                        </li>
                        <li className="nav-item">
                            <a role="button" className="nav-link text-uppercase" data-category="pixel">pixel</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
