import React, { useEffect, useState } from 'react';

import './App.css'
import SearchIcon from './search.svg';

import MovieCard from './MovieCard';

const API_KEY = "9268eab0"
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    type="text"
                    placeholder='Search for movies...'
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />

                <img
                    src={SearchIcon}
                    alt="Search Icon"
                    onClick={() => { searchMovies(searchTerm) }}
                />
            </div>

            <div className='container'>
                {
                    movies?.length > 0 ? (
                        movies.map((movie) => <MovieCard movie={movie} />)
                    ) : (
                        <div className="empty">
                            <h2>No movies found.</h2>
                        </div>
                    )
                    
                }
            </div>
        </div>
    )
};

export default App;