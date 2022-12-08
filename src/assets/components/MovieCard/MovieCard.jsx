import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './movieCard.css'


function MovieCard({ movie, rmFunc }) {
    function renderPopOver() {
        const renderTooltip = () => (
            <Tooltip id="button-tooltip">
                {movie.genres.map((g, index) => <p key={index} className='m-0'>{g.replace(',', '')}</p>)}
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

    return (
        <div className='movieCard' >
            <p className='m-0' id="movieId">{movie.id}</p>
            <p className='m-0' id="movieName">{movie.title}</p>
            <p className='m-0' id="movieGenre">{movie.genres.length > 1 ? renderPopOver() : movie.genres[0]}</p>
            <p className='m-0' id="rating">{movie.rating}/10</p>
            <p className='m-0' id="movieFav">{!movie.favorite ? 'false' : "true"}</p>
            <Button variant='danger' onClick={
                () => rmFunc(movie.id)
            }>X</Button>
        </div>
    )
}

export default MovieCard