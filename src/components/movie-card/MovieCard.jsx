import React from 'react';
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './movie-card.scss';
const MovieCard = props => {
    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
    return (
        <>
            <Link to={link}>
                <div className='movie-card' style={{ backgroundImage: `url(${bg})` }}>
                    <Button>
                        <i className='bx bx-play'></i>
                    </Button>
                </div>
                <h5>{item.title || item.name}</h5>
                <div className='vote-average'>{item.vote_average}/10
                    <button className="button-vote-average mr-4">tmdb</button>
                </div>

            </Link>

        </>
    )
}



export default MovieCard;