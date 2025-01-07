import React from 'react';
import axios from 'axios';
import "./style.css"
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import logo from '../../assets/logo-sm.png';
import { useEffect } from 'react';
import { useState } from 'react';

function Navbar() {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {
            category: 'mmorpg'
        },
        headers: {
            'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    async function fetchGames() {
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching games:", error);
        }
    }

    useEffect(() => {
        fetchGames();
    }, []);
    return (
        <>
            <div className='header'></div>
            <div className='navbar navbar-expand-lg'>
                <div className="container container-fluid rounded-4 px-3 py-1">
                    <h5 className="navbar-brand mb-0 text-uppercase d-flex flex-row align-items-center gap-1">
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
            </div>
        </>
    )
}

export default Navbar;
