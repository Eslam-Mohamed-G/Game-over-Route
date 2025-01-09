import React, { useContext} from 'react';
import {  NavLink } from 'react-router-dom';
import { dataContext } from '../context/StoreAPI';

function GamesDetails() {
    const { details, loading, category} = useContext(dataContext);
    if (loading) {
        return (
            <div className='loading'>
                <div className='loader'></div>
            </div>
        );
    }

    if (!details) {return <div>No details found.</div>; }

    return (
        <div className="container text-white pb-5">
            <div className="hstack justify-content-between">
                <h1 className="text-center h3 py-4">Details Game</h1>
                <NavLink className="btn-close btn-close-white" to={`/${category}`} />
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
    );
}

export default React.memo(GamesDetails);