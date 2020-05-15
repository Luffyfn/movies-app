import React from 'react';

const MovieCard = props => {
    return (
        <div className = "movie">
            <h2>{props.title} ({props.year})</h2>
            <img src = {props.image} alt = {props.title}/>
            <p className = "description">{props.description}</p>
            <p className = "rating">{props.rating}</p>
        </div>
    );
};

export default MovieCard;