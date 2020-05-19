import React from 'react';
import MovieCard from'./MovieCard';

const MoviesList = props => {
    const moviesArray = props.movies;
    const moviesItems = moviesArray.map((item,index) => {
    return (
        <div key = {index}>
            <MovieCard {...item}/>
        </div>
        );
    });
    return (
        <div className = "moviesList">{moviesItems}</div>
    )
}

export default MoviesList;
