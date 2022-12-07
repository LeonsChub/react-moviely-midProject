import React from 'react'
import Button from 'react-bootstrap/Button'
import './movieCard.css'

function MovieCard({ movie }) {
    return (
        <div className='movieCard'>
            <p className='m-0' id="movieId">{movie.id}</p>
            <p className='m-0' id="movieName">{movie.name}</p>
            <p className='m-0' id="movieGenre">{movie.genre}</p>
            <p className='m-0' id="movieFav">{!movie.favorite ? 'false' : "true"}</p>
            <p className='m-0' id="rating">{movie.rating}</p>
            <Button variant='danger'>X</Button>
        </div>
    )
}

export default MovieCard