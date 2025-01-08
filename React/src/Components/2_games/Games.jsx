import React from 'react';
import "./style.css"
import { useNavigate } from 'react-router-dom';



function Games({ game }) {
  const navigate = useNavigate();

  return (
    <div className="container pt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-gap-4">
        {game?.map((element) => (
          <div className='col' key={element.id} onClick={()=>{navigate(`/game/${element.id}`)}} style={{ cursor: 'pointer' }}>
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
