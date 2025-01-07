import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import logo from '../../assets/logo-sm.png';
import "./style.css"

function Navbar() {
    const [category, setCategory] = useState("mmorpg");
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {
            category: category
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
    }, [category]);
    const handleCategoryClick = (newCategory)=>{
        setCategory(newCategory);
    };
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
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item text-uppercase" onClick={()=>handleCategoryClick('mmorpg')}>mmorpg</li>
                            <li className="nav-item text-uppercase" onClick={()=>handleCategoryClick('shooter')}>shooter</li>
                            <li className="nav-item text-uppercase" onClick={()=>handleCategoryClick('sailing')}>sailing </li>
                            <li className="nav-item text-uppercase" onClick={()=>handleCategoryClick('permadeath')}>permadeath</li>
                            <li className="nav-item text-uppercase" onClick={()=>handleCategoryClick('superhero')}>superhero</li>
                            <li className="nav-item text-uppercase" onClick={()=>handleCategoryClick('pixel')}>pixel</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
