import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../context/StoreAPI';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function GamesGategory( {category} ) {
    const { gameUI, loading, setIdGame, setCategory } = useContext(dataContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (category) {
            setCategory(category);
        }
        AOS.init();
    }, [category, setCategory]);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const gamePage = 20;

    const indexOfLastGame = currentPage * gamePage;
    const indexOfFirstGame = indexOfLastGame - gamePage;
    const currentGames = gameUI.slice(indexOfFirstGame, indexOfLastGame);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };
    
    useEffect(() => {
        scrollToTop();
    }, [currentPage]);

    if (loading) {
        return (
            <div className='loading'>
                <div className='loader'></div>
            </div>
        );
    }

    return (
        <div className="container games">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-gap-4">
                {currentGames?.map((element) => (
                    <div
                        className='col'
                        data-aos="fade-up"
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
            {/* Pagination controls */}
            <div className={`d-flex justify-content-center mt-5 ${gameUI.length < 20 ? 'd-none' : ''}`}>
                <nav>
                    <ul className="pagination gap-2">
                        <li className={`page-item ${currentPage <= 1 ? 'd-none' : ''}`} onClick={()=>scrollToTop()}>
                            <div
                                className="page-number"
                                onClick={() => paginate(currentPage - 1)}
                            >
                                <span><i className="bi bi-arrow-left-short"></i></span>
                            </div>
                        </li>
                        {[...Array(Math.ceil(gameUI.length / gamePage)).keys()].map((number) => {
                            const pageNumber = number + 1;

                            if (
                                pageNumber === 1 ||
                                pageNumber === Math.ceil(gameUI.length / gamePage) ||
                                (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
                            ) {
                                return (
                                    <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`} onClick={()=>scrollToTop()}>
                                        <button
                                            className="page-number"
                                            onClick={() => paginate(pageNumber)}
                                        >
                                            {pageNumber}
                                        </button>
                                    </li>
                                );
                            }

                            if (
                                (pageNumber === currentPage - 3 && currentPage > 4) ||
                                (pageNumber === currentPage + 3 && currentPage < Math.ceil(gameUI.length / gamePage) - 3)
                            ) {
                                return (
                                    <li key={pageNumber} className="page-item disabled">
                                        <span className="page-number">...</span>
                                    </li>
                                );
                            }

                            return null
                        })}
                        <li className={`page-item ${currentPage === Math.ceil(gameUI.length / gamePage) ? 'd-none' : ''}`} onClick={()=>scrollToTop()}>
                            <div
                                className="page-number"
                                onClick={() => paginate(currentPage + 1)}
                            >
                                <span className='w-100 rounded'><i className="bi bi-arrow-right-short"></i></span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default GamesGategory
