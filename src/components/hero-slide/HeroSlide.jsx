import React, { useEffect, useState } from 'react';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from "../../api/apiConfig";
import SwiperCore, { Autoplay, delay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button , {OutlineButton} from '../button/Button';
import './hero-slide.scss';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const HeroSlide = () => {
    SwiperCore.use([Autoplay]);
    const [movieItems, setMovieItems] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const params = { media_type: "all", time_window: "week" }
            try {
                const response = await tmdbApi.Trending({ params });
                setMovieItems(response.results.slice(1, 10));
                // setMovieItems(response);
            } catch (err) {
                console.log(err.message);
            }
        }
        getMovies();
    }, []);
    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
            >
                {
                    movieItems.map((item, index) => (
                        <SwiperSlide key={index} >
                            {({ isActive }) => (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''} `}/>
                            )}

                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}
const HeroSlideItem = props => {
    let hisrory = useHistory();
    const item = props.item;
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{backgroundImage : `url(${background})`}} >


                <div className="hero-slide__item__content container">
                    <div className="hero-slide__item__info">
                        <h2 className='title'>{item.title}</h2>
                        <div className="overview">{item.overview}</div>
                        <div className="btns">
                            <Button onClick={() => hisrory.push('/movie/' + item.id)}>
                                  watch now
                            </Button>
                            <OutlineButton onClick={() => console.log('trailer')}>
                                watch trailer
                            </OutlineButton>
                        </div>
                    </div>
                    <div className="hero-slide__item__content__poster">
                        <img src={apiConfig.w500Image(item.poster_path)} alt='' ></img>
                    </div>
                </div>
        </div >
    )
}

export default HeroSlide;
