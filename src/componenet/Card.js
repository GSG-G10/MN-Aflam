import React, { Fragment } from "react";
import './css/Card.css'

const Card = ({title, url, vote, date, overview}) => {
  console.log(url)
  return (
    <Fragment>

         <div className="movieContainer">
          
          <img className="moviePoster" alt="post-img" src={`https://image.tmdb.org/t/p/w500${url}`}/>
          <div className="movieDetails">

            <h3 className="title">{title}</h3>
            <p className="itemData">DATE: {date}</p>
            <p className="itemData"> RATING: {vote} | 10</p>
            <p className="overview">{overview}</p>

          </div>
        </div> 


    </Fragment>
  );
};

export default Card;
