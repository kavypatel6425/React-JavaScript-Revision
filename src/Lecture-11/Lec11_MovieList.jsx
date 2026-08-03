import React from 'react'
import { useNavigate } from 'react-router-dom';

function Lec11_MovieList() {
    const navigate = useNavigate();
    const movies = [
        {
            id: 1,
            Name: "Gabbar",
            releaseYear: 2015
        },
        {
            id: 2,
            Name: "Rowdy Rathod",
            releaseYear: 2010
        },
        {
            id: 3,
            Name: "Joly LLb 2",
            releaseYear: 2016
        }
    ];
    return (
        <div>

            {movies.map((movie) => {
                return (
                    <div key={movie.id}>
                        <h3>{movie.Name}</h3>
                        <p>{movie.releaseYear}</p>
                        <button onClick={() => navigate(`/movie/${movie.id}`)}>Movie Detils</button>
                    </div>
                );
            })}
        </div>
    )
}

export default Lec11_MovieList