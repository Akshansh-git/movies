import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

const API_URL = 'https://www.omdbapi.com?apikey=6ae662b9';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [serachTerm, setSearchTerm] = useState('');

    // const movie1 = {
    //     "Title": "Mission: Impossible - Ghost Protocol",
    //     "Year": "2011",
    //     "imdbID": "tt1229238",
    //     "Type": "movie",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
    // }

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }



    useEffect(() => {
        searchMovies('');
    }, []);

    return (
        <div className="app">
            <h1>MOVIE LAND.....................</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={serachTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(serachTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                           {movies.map((movie) => (
                               <MovieCard movie={movie} />
                           ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }


        </div>
    );
}

export default App;