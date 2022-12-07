import React from 'react'
import Button from 'react-bootstrap/Button'

function MovieCard({ movie }) {
    return (
        <div className='MovieCard d-flex justify-content-around'>
            <p id="movieId">{movie.id}</p>
            <p id="movieName">{movie.name}</p>
            <p id="movieGenre">{movie.genre}</p>
            <p id="movieFav">{!movie.favorite ? 'false' : "true"}</p>
            <p id="rating">{movie.rating}</p>
            <div id="deleteBtn"><Button>X</Button></div>
        </div>
    )
}

export default MovieCard