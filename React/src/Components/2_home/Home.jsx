import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../context/StoreAPI';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./homeStyle.css";
import cardImg from '../../assets/card.png';
import mmorpgImg from '../../assets/mmorpg.png';
import shooterImg from '../../assets/shooter.png';
import { cardGames, mmorpgGames, shooterGames } from './gamesData';

function Home() {
    const { allGames, loading, setIdGame } = useContext(dataContext);
    const [counter, setCounter] = useState(0);
    const [randomGames, setRandomGames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (counter < 400) {
            const interval = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 2);
            return () => {
                clearInterval(interval)
            }
        };
    }, [counter]);

    useEffect(() => {
        if (allGames.length > 0) {
            const shuffledGames = [...allGames].sort(() => .5 - Math.random()).slice(0, 4);
            setRandomGames(shuffledGames);
        }
    }, [allGames]);

    if (loading) {
        return (
            <div className='loading'>
                <div className='loader'></div>
            </div>
        );
    }
    return (
        <div className='home'>
            <header>
                <h1 className='px-5'>Discover the best <span>free-to-play</span> games!</h1>
                <h2>more than <span>+ {counter}</span> games</h2>
            </header>
            <div className="container games pt-4">
                <h5>Personalized Recommendations</h5>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-gap-4">
                    {randomGames?.map((element) => (
                        <div
                            className='col'
                            key={element.id}
                            onClick={() => {
                                navigate(`/${element.title}/${element.id}`);
                                setIdGame(element.id);
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card h-100 bg-transparent">
                                <div className="card-body">
                                    <figure className="position-relative">
                                        <img className="card-img-top object-fit-cover h-100" src={element.thumbnail} alt={element.title} />
                                    </figure>
                                    <figcaption>
                                        <div className="hstack justify-content-between">
                                            <h6>{element.title}</h6>
                                            <span className="badge text-bg-primary p-2">Free</span>
                                        </div>
                                        <p className="card-text text-center">{element.short_description}</p>
                                    </figcaption>
                                </div>
                                <footer className="card-footer small hstack justify-content-between">
                                    <span className="badge badge-color rounded-2">{element.genre}</span>
                                    <span className="badge badge-color rounded-2">{element.platform}</span>
                                </footer>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='container mt-5'>
                <div className="row border mb-5">
                    <div className="col-md-8 d-flex flex-column justify-content-between">
                        {mmorpgGames.map((game) => (
                            <div className='item w-100 d-flex rounded border'
                                key={game.id}
                                onClick={() => {
                                    navigate(`/${game.title}/${game.id}`);
                                    setIdGame(game.id);
                                }}
                                style={{ cursor: 'pointer' }}>
                                <figure className="position-relative w-25">
                                    <img className="card-img-top object-fit-cover w-100 h-100" src={game.thumbnail} alt={game.title} />
                                </figure>
                                <figcaption className='w-75'>
                                    <div className="hstack justify-content-between">
                                        <h6>{game.title}</h6>
                                        <span className="badge text-bg-primary p-2">Free</span>
                                    </div>
                                    <p className="card-text text-center text-nowrap text-truncate">{game.short_description}</p>
                                    <span className="badge badge-color rounded-2">{game.genre}</span>
                                </figcaption>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <img src={mmorpgImg} alt="mmorpg-Img" className='w-100 h-100' />
                    </div>
                </div>
                {/* shooter */}
                <div className="row mb-5">
                    <div className="col-md-8 d-flex flex-column justify-content-between">
                        {shooterGames.map((game) => (
                            <div className='item w-100 d-flex rounded border'
                                key={game.id}
                                onClick={() => {
                                    navigate(`/${game.title}/${game.id}`);
                                    setIdGame(game.id);
                                }}
                                style={{ cursor: 'pointer' }}>
                                <figure className="position-relative w-25">
                                    <img className="card-img-top object-fit-cover w-100 h-100" src={game.thumbnail} alt={game.title} />
                                </figure>
                                <figcaption className='w-75'>
                                    <div className="hstack justify-content-between">
                                        <h6>{game.title}</h6>
                                        <span className="badge text-bg-primary p-2">Free</span>
                                    </div>
                                    <p className="card-text text-center text-nowrap text-truncate">{game.short_description}</p>
                                    <span className="badge badge-color rounded-2">{game.genre}</span>
                                </figcaption>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <img src={shooterImg} alt="shooter-Img" className='w-100 h-100' />
                    </div>
                </div>

                {/* card game */}
                <div className="row">
                    <div className="col-md-8 d-flex flex-column justify-content-between">
                        {cardGames.map((game) => (
                            <div className='item w-100 d-flex rounded border'
                                key={game.id}
                                onClick={() => {
                                    navigate(`/${game.title}/${game.id}`);
                                    setIdGame(game.id);
                                }}
                                style={{ cursor: 'pointer' }}>
                                <figure className="position-relative w-25">
                                    <img className="card-img-top object-fit-cover w-100 h-100" src={game.thumbnail} alt={game.title} />
                                </figure>
                                <figcaption className='w-75'>
                                    <div className="hstack justify-content-between">
                                        <h6>{game.title}</h6>
                                        <span className="badge text-bg-primary p-2">Free</span>
                                    </div>
                                    <p className="card-text text-center text-nowrap text-truncate">{game.short_description}</p>
                                    <span className="badge badge-color rounded-2">{game.genre}</span>
                                </figcaption>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <img src={cardImg} alt="card-Img" className=' w-100 h-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
