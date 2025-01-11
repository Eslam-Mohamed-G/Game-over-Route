import React, { useContext } from 'react';
import { dataContext } from '../context/StoreAPI';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import logo from '../../assets/logo-sm.png';
import { NavLink, Link } from 'react-router-dom';
import "./style.css";

function Navbar() {
    const { setCategory, setPlatform } = useContext(dataContext);
    
    return (
        <>
            <nav className="navbar navbar-expand-lg p-0 fixed-top z-3">
                <div className="container container-fluid py-2">
                    <h5 className="navbar-brand mb-0 text-uppercase d-flex flex-row align-items-center gap-1">
                        <Link to='/' className="nav-link text-white"><img src={logo} alt="logo photo" style={{ maxWidth: 40 }} /> Game Reviews</Link>
                    </h5>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-uppercase" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Platform
                                </a>
                                <ul className="dropdown-menu px-3">
                                    <li className="nav-item">
                                        <NavLink to={'/pc'} className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} onClick={() => setPlatform('pc')}>PC (Windows)</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={'browser'} className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} onClick={() => setPlatform('browser')}>Web Browser</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-uppercase" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    categroy
                                </a>
                                <ul className="dropdown-menu px-3">
                                    <li className="nav-item">
                                        <NavLink to='/mmorpg' className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} onClick={() => setCategory('mmorpg')}>mmorpg</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/shooter' className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} onClick={() => setCategory('shooter')}>shooter</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/sailing' className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} onClick={() => setCategory('sailing')}>sailing</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/permadeath' className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} onClick={() => setCategory('permadeath')}>permadeath</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/superhero' className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} onClick={() => setCategory('superhero')}>superhero</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/pixel' className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} onClick={() => setCategory('pixel')}>pixel</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/card' className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} onClick={() => setCategory('card')}>card</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/strategy' className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} onClick={() => setCategory('strategy')}>strategy</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/sports' className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} onClick={() => setCategory('sports')}>sports</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/sci-fi' className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} onClick={() => setCategory('sci-fi')}>sci-fi</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
