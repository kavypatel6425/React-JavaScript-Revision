import React from 'react'

function Netflix({Movies}) {
    return (
        <div>
            <h2>Task - 18</h2>
            <h4>Title :{Movies.Title}</h4>
            <p>Genre :{Movies.Genre}</p>
            <p>Rating :{Movies.Rating}</p>
            <p>Relese Year :{Movies.Releseyear}</p>
        </div>
    )
}

export default Netflix