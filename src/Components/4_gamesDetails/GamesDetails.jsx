import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { dataContext } from '../context/StoreAPI';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./detailsStyle.css"
import Footer from '../footer/Footer';

function GamesDetails() {
    const { details, loading, category } = useContext(dataContext);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const gameDescription = details?.description || "Description is not available.";
    if(gameDescription?.length < 300){
        return gameDescription
    }
    const text = !isExpanded ? gameDescription.substring(0, 300) : gameDescription.substring(0, gameDescription.length);
    // useEffect(() => {
    // }, [isExpanded]);

    if (loading) {
        return (
            <div className='loading'>
                <div className='loader'></div>
            </div>
        );
    }

    if (!details) {return <div>No details found.</div>; }
    
    const videoUrl = `https://www.freetogame.com/g/${details?.id}/videoplayback.webm`;
    const hasVideo = true;
    return (
        <div className='details position-relative'>
            <div className='gameprofile_background' style={{ backgroundImage: `url(${details.thumbnail})`}}><div className='gameprofile_gradient'></div></div>
            <nav className="navbar navbar-expand-lg py-1 fixed-top">
                <div className="container container-fluid">
                    <h1 className="text-center">{details.title}</h1>
                    <NavLink className="btn-close btn-close-white" to={`/${category}`} />
                </div>
            </nav>
            <div className="container text-white pt-4 pt-md-5">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <div className="card bg-transparent sidebar">
                            <div className='px-3 pt-3'>
                                {!isVideoPlaying && (<img src={details.thumbnail} className="card-img-top w-100" alt="image details" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />)}
                                {hasVideo && (
                                    <video className="card-img-top" loop preload="none" muted autoPlay onPlay={() => setIsVideoPlaying(true)} style={{ position: 'relative', zIndex: 0 }}>
                                        <source src={videoUrl} type="video/webm" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                            <div className="card-body bg-transparent text-white">
                                <p className="card-text">{details.short_description}</p>
                            </div>

                            <div className="card-footer d-flex gap-3">
                                <span className="badge text-bg-info px-3 align-content-center flex-grow-0">Free</span>
                                <a className="btn btn-outline-warning flex-grow-1" target="_blank" rel="noopener noreferrer" href={details.game_url}>Show Game</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 pt-5">
                        <h3 className='title-h3'>About {details.title}</h3>
                        <div className="card-body bg-transparent text-white">
                            <p className="card-text">{text}{!isExpanded ? "..." : ""}</p>
                            <p className="text-capitalize" onClick={() => setIsExpanded(!isExpanded)} type="button" >
                                {!isExpanded ? "+ read more" : "- read less"}
                            </p>
                            {/* <p>{gameDescription}</p> */}
                        </div>
                        <h3 className='title-h3'>Additional Information</h3>
                        <div className='row'>
                            <div className='col-6 col-lg-4 pb-3'><span className='title'>Publisher</span><br/><span className='information'>{details.publisher}</span></div>
                            <div className='col-6 col-lg-4 pb-3'><span className="title">Category:</span><br/><span className='information'>{details.genre}</span></div>
                            <div className='col-6 col-lg-4 pb-3'><span className="title">Developer</span><br/><span className='information'>{details.developer}</span></div>
                            <div className='col-6 col-lg-4 pb-3'><span className="title">Platform:</span><br/><span className='information'>{details.platform}</span></div>
                            <div className='col-6 col-lg-4 pb-3'><span className="title">Status:</span><br/><span className='information'>{details.status}</span></div>
                            <div className='col-6 col-lg-4 pb-3'><span className="title">Release Date</span><br/><span className='information'>{details.release_date}</span></div>
                        </div>

                        <div className='row g-2 my-3'>
                            <h3 className='title-h3'>Screenshots From Game</h3>
                            {details.screenshots.map((img) => (
                                <div className='col-6 col-md-4' key={img.id}>
                                    <img className="d-block w-100 rounded" src={img.image} alt='Screenshots' />
                                </div>
                            ))}
                        </div>

                        <h3 className='title-h3'>System Requirements</h3>
                        <div className='systemRequirements'>
                            {details.minimum_system_requirements ? (
                                <div className="row" key={details.id}>
                                    <div className='col-6 col-lg-4 pb-3'><span className='title'>Graphics:</span><br /> <span className='information'>{details.minimum_system_requirements.graphics}</span></div>
                                    <div className='col-6 col-lg-4 pb-3'><span className='title'>Memory:</span><br /><span className='information'>{details.minimum_system_requirements.memory}</span></div>
                                    <div className='col-6 col-lg-4 pb-3'><span className='title'>OS:</span><br /><span className='information'>{details.minimum_system_requirements.os}</span></div>
                                    <div className='col-6 col-lg-4 pb-3'><span className='title'>Processor:</span><br /><span className='information'>{details.minimum_system_requirements.processor}</span></div>
                                    <div className='col-6 col-lg-4 pb-3'><span className='title'>Storage:</span><br /><span className='information'>{details.minimum_system_requirements.storage}</span></div>
                                </div>
                            ) : (
                                <p>No system requirements available.</p>
                            )}
                        </div>

                        {/* <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <h3>Screenshots From Game</h3>
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
                    </div> */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default React.memo(GamesDetails);