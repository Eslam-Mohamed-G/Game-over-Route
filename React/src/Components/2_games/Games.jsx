import React from 'react';
import "./style.css"
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



function Games({ game }) {
  const [gameID, setGameID] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
    params: {id: gameID},
    headers: {
      'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  async function fetchDetails(){
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error("error",error);
    }
  };

  useEffect(()=>{
    fetchDetails();
  },[gameID]);
  const handleIdClick = (newID) =>{
    setGameID(newID)
  };

  return (
    <div className="container pt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-gap-4">
        {game.map((element) => (
          <div className='col' key={element.id} onClick={()=>{handleIdClick(element.id)}}>
            <div className="card h-100 bg-transparent">
              <div className="card-body">
                <figure className="position-relative">
                  <img className="card-img-top object-fit-cover h-100" src={element.thumbnail} alt='image' />
                </figure>

                <figcaption>
                  <div className="hstack justify-content-between">
                    <h6>{element.title}</h6>
                    <span className="badge text-bg-primary p-2">Free</span>
                  </div>
                  <p className="card-text text-center">
                    {element.short_description}
                  </p>
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
  )
}

export default Games
