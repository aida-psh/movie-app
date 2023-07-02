import React, { useEffect, useState } from "react";
import PropType from 'prop-types';
import './movie-list.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Button from "../button/Button";
import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import MovieCard from "../movie-card/MovieCard";
const MovieList = props => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, { params });
                        break;
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id)
            }
            setItems(response.results);
        }
        getList();
    }, [])
    return (
        <>
            <div className="movie-list">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    grabCursor={true}
                >
                    {
                        items.map((item, index) => (
                            <SwiperSlide key={index}>
                               <MovieCard item={item} category={props.category} ></MovieCard>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>

        </>
    )
}
MovieList.prototype = {
    category: PropType.string.isRequired,
    type: PropType.string.isRequired
}

export default MovieList;