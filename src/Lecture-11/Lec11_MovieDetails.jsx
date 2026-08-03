import React from 'react'
import { useParams } from 'react-router-dom';

function Lec11_MovieDetails() {
    const { id } = useParams();

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

    const movie = movies.find((item) => item.id === Number(id));
    return (
            <div>
                <h3>Movie Name: {movie.Name}</h3>
                <p>Movie ID: {id}</p>
            </div>
    )
}

export default Lec11_MovieDetails