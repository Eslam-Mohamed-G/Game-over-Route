import React, { useContext } from 'react';
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

  if (loading) {
    return (
      <div className='loading'>
        <div className='loader'></div>
      </div>
    );
  }

  return (
    <div className="container pt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-gap-4">
        {gameUI?.map((element) => (
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
  );
}

export default React.memo(Games);    