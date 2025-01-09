import React, { useContext, useEffect, useState } from 'react';
import { dataContext } from '../context/StoreAPI';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import logo from '../../assets/logo-sm.png';
import { NavLink } from 'react-router-dom';
import { useCallback } from 'react';
import "./style.css";

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const { setCategory } = useContext(dataContext);

    const handleScroll = useCallback(()=>{
        if(window.pageYOffset > 190){
            setIsSticky(true);
        }else {
            setIsSticky(false);
        }
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
    
    return (
        <>
            <div className='header'></div>
            <div className={`navbar navbar-expand-lg z-3 p-0 ${isSticky ? 'sticky' : ''}`}>
                <div className="container container-fluid rounded-4 px-3 py-1">
                    <h5 className="navbar-brand mb-0 text-uppercase d-flex flex-row align-items-center gap-1">
                        <img src={logo} alt="logo photo" style={{ maxWidth: 40 }} /> Game Reviews
                    </h5>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
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
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
