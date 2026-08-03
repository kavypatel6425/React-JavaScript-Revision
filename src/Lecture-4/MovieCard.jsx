import React from 'react'

function MovieCard(props) {
  return (
    <div>
      <h2>Task-7</h2>
        <h4>{props.Title}</h4>
        <p>{props.Rating}</p>
        <p>{props.ReleseYear}</p>
    </div>
  )
}

export default MovieCard