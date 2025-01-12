import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../context/StoreAPI';
import "./style.css";


// function Games({ category }) {
  // const navigate = useNavigate();
  // const [gameUI, setGameUI] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const options = {
  //   method: 'GET',
  //   url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  //   params: { category: category },
  //   headers: {
  //     'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
  //     'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  //   },
  // };

  // const fetchGames = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.request(options);
  //     setGameUI(response.data);
  //   } catch (error) {
  //     console.error("Error fetching games:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchGames();
  // }, [category]);
function Games() {
  const {gameUI, loading, setIdGame} = useContext(dataContext);
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const gamePage = 20;

  const indexOfLastGame = currentPage * gamePage;
  const indexOfFirstGame = indexOfLastGame - gamePage;
  const currentGames = gameUI.slice(indexOfFirstGame, indexOfLastGame);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <div className='d-flex justify-content-center'>
          <ul className='pagination'>
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <span className="page-link" onClick={() => {paginate(currentPage - 1); navigate(`/${element.title}/${element.id}`);}} disabled={currentPage === 1}>
                <i class="bi bi-arrow-left-square-fill"></i>
              </span>
            </li>
            {[...Array(Math.ceil(gameUI.length / gamePage)).keys()].map((num)=>(
              <li key={num + 1} className={`page-item ${currentPage === num + 1 ? 'active' : ''}`}></li>
            ))}
            <li className={`page-item ${currentPage === Math.ceil(gameUI.length / gamePage) ? 'disabled' : ''}`}>
              <span className="page-link text-dark" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(gameUI.length / gamePage)}>
                <i class="bi bi-arrow-right-square-fill"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Games);    