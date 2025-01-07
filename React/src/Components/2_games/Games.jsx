import React from 'react';
import "./style.css"

function Games({ id, thumbnail, title, short_description, genre, platform }) {

  return (
    <div className='col'>
      <div className="card h-100 bg-transparent" key={id}>
        <div className="card-body">
          <figure className="position-relative">
            <img className="card-img-top object-fit-cover h-100" src={thumbnail} />
          </figure>

          <figcaption>
            <div className="hstack justify-content-between">
              <h6>{title}</h6>
              <span className="badge text-bg-primary p-2">Free</span>
            </div>
            <p className="card-text text-center">
              {short_description}
            </p>
          </figcaption>
        </div>

        <footer className="card-footer small hstack justify-content-between">
          <span className="badge badge-color rounded-2">{genre}</span>
          <span className="badge badge-color rounded-2">{platform}</span>
        </footer>
      </div>
    </div>
  )
}

export default Games
