import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import './detail.scss';
import CastList from "./CastList";
import VideoList from "./VideoList";
import MovieList from "../../components/movie-list/MovieList";
import { Folder, Clock, Globe } from 'react-feather';
import Button from "../../components/button/Button";



const Detail = () => {
    const { category, id } = useParams();
    const [item, setItem] = useState(null);
    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, { params: {} });
            console.log(response, 'gfdfgghfhgh')
            setItem(response);
            window.scrollTo(0, 0);
        }
        getDetail();

    }, [category, id]);

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}></div>

                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{ backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})` }}>
                                </div>                                

                            </div>
                            <div className="movie-content__info">
                                <div className="title">
                                    {item.title || item.name}
                                </div>
                                <div className="genres">
                                    <Folder className="genre" color="#eb8307" size="18" /> genre : 
                                    {item.jenres || item.genres.slice(0, 5).map((genre, i) => (
                                        <span key={i} className="genres__item"> {genre.name} </span>
                                    ))
                                    }
                                </div>

                                <div className="runtime"><Clock className="clock" color="#eb8307" size="18" />

                                    <p className="runtime-item"> time : {item.runtime} min</p>

                                </div>
                                <div className="production-countries"> <Globe className="globe" color="#eb8307" size="18" />

                                    {
                                        item.production_countries.map((countries, i) => (
                                            <span key={i} className="countries__item"> production : {countries.name}</span>
                                        ))
                                    }
                                </div>

                                <p className="overview">{item.overview}</p>

                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    {/* casts list */}
                                    <CastList id={item.id} />
                                </div>
                                <div className="item_notif"> status : {item.status}</div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.id} />
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id} />
                            </div>
                        </div>

                    </>
                )
            }
        </>
    )
}

export default Detail;