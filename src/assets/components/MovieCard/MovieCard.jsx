import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

import './movieCard.css'


function MovieCard({ movie, rmFunc, toggleFunc }) {
    function renderPopOver() {
        const renderTooltip = () => (
            <Tooltip id="button-tooltip">
                {movie.genres.map((g, index) => <p key={index} className='m-0'>{g}</p>)}
            </Tooltip>
        );

        return (
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip()}
            >
                <Button variant="success">...</Button>
            </OverlayTrigger>
        );
    }
    const starToRender = movie.favorite ? <AiFillStar size={24} /> : <AiOutlineStar size={24} />;
    return (
        <div className='movieCard' >
            <p className='m-0' id="movieId">{movie.id}</p>
            <p className='m-0' id="movieName">{movie.title}</p>
            <p className='m-0' id="movieGenre">{movie.genres.length > 1 ? renderPopOver() : movie.genres[0]}</p>
            <p className='m-0' id="rating">{movie.rating}/10</p>
            <p className='m-0' id="movieFav" onClick={() => toggleFunc(movie.id)}>{starToRender}</p>
            <Button variant='danger' onClick={
                () => {
                    return rmFunc(movie.id)
                }
            }>X</Button>
        </div>
    )
}

export default MovieCard