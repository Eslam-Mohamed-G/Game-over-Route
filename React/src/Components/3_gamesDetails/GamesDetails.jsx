import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';

function GamesDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id: id },
        headers: {
            'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    async function fetchDetails() {
        try {
            const response = await axios.request(options);
            setDetails(response.data)
            console.log(response.data);
        } catch (error) {
            console.error("error", error);
        }
    };

    useEffect(() => {
        fetchDetails();
    }, [id]);
    if (!details) {
        return <div>Loading...</div>; // عرض رسالة تحميل أثناء جلب البيانات
    }
    return (
        <div className="container text-white">
            <div className="hstack justify-content-between">
                <h1 className="text-center h3 py-4">Details Game</h1>
                <NavLink className="btn-close btn-close-white" to="/" />
            </div>
            <div className="row g-4" id="detailsContent">
                <div className="col-md-4">
                    <img src={details.thumbnail} className="w-100" alt="image details" />
                </div>
                <div className="col-md-8">
                    <h3>Title: {details.title}</h3>
                    <p>Category: <span className="badge text-bg-info">{details.genre}</span> </p>
                    <p>Platform: <span className="badge text-bg-info">{details.platform}</span> </p>
                    <p>Status: <span className="badge text-bg-info">{details.status}</span> </p>
                    <p className="small">{details.description}</p>
                    <a className="btn btn-outline-warning" target="_blank" href={details.game_url}>Show Game</a>
                </div>
            </div>
        </div>

    )
}

export default GamesDetails;
