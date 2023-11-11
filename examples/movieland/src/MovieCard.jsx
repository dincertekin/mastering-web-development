import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                {
                    movie.Poster !== 'N/A' ? (
                        <img src={movie.Poster} alt={movie.Title}></img>
                    ) : (
                        <img src='https://via.placeholder.com/400' alt="No image"></img>
                    )
                }                        
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;