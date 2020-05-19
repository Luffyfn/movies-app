import React from 'react';
import './MovieCard.css';
import Rating from './Rating';

const MovieCard = props => {
    return (
        <div className = "movie">
            <img className = "image" src = {props.image} alt = {props.title}/>
            <h2>{props.title} ({props.year}) <Rating rate = {props.rating}/></h2>
            <p className = "description">{props.description}</p>
        </div>
    );
};

export default MovieCard;