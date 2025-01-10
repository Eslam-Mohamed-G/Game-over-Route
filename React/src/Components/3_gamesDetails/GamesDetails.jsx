import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { dataContext } from '../context/StoreAPI';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useState } from 'react';

function GamesDetails() {
    const { details, loading, category } = useContext(dataContext);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    if (loading) {
        return (
            <div className='loading'>
                <div className='loader'></div>
            </div>
        );
    }

    if (!details) {return <div>No details found.</div>; }
    
    const videoUrl = `https://www.freetogame.com/g/${details.id}/videoplayback.webm`;
    const hasVideo = true;
    return (
        <div className="container text-white pb-5">
            <div className="hstack py-4 justify-content-between">
                <h1 className="text-center">Title: {details.title}</h1>
                <NavLink className="btn-close btn-close-white" to={`/${category}`} />
            </div>

            <div className="row">
                <div className="col-md-4 overflow-x-hidden z-3">
                    <div className="card bg-transparent overflow-hidden opacity-100">
                        {!isVideoPlaying && ( <img src={details.thumbnail} className="card-img-top w-100" alt="image details" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}/>)}
                        {hasVideo && (
                            <video className="featuredvideo" loop preload="none" muted autoPlay onPlay={()=>setIsVideoPlaying(true)}style={{ position: 'relative', zIndex: 0 }}>
                                <source src={videoUrl} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <div className="card-body bg-transparent text-white pt-5">
                            <p>{details.short_description}</p>
                        </div>

                        <div className="card-footer d-flex gap-3">
                            <span className="badge text-bg-info px-3 align-content-center flex-grow-0">Free</span>
                            <a className="btn btn-outline-warning flex-grow-1" target="_blank" rel="noopener noreferrer" href={details.game_url}>Show Game</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 position-relative end-0">
                    <div>Category: <span className="badge text-bg-info">{details.genre}</span> </div>
                    <div>Platform: <span className="badge text-bg-info">{details.platform}</span> </div>
                    <div>Status: <span className="badge text-bg-info">{details.status}</span> </div>
                    <p className="small">{details.description}</p>

                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {details.screenshots.map((img, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={img.id}>
                                    <img src={img.image} className="d-block w-100" alt="miniImage" />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className='systemRequirements'>
                        {details.minimum_system_requirements ? (
                            <div className="text-left" key={details.id}>
                                <h4><span>Graphics:</span> {details.minimum_system_requirements.graphics}</h4>
                                <h4><span>Memory:</span> {details.minimum_system_requirements.memory}</h4>
                                <h4><span>OS:</span> {details.minimum_system_requirements.os}</h4>
                                <h4><span>Processor:</span> {details.minimum_system_requirements.processor}</h4>
                                <h4><span>Storage:</span> {details.minimum_system_requirements.storage}</h4>
                            </div>
                        ) : (
                            <p>No system requirements available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(GamesDetails);