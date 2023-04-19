import React from "react";
import HeroSlide from "../components/hero-slide/HeroSlide";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { OutlineButton } from "../components/button/Button";
import MovieList from '../components/movie-list/MovieList';
import { category, movieType } from "../api/tmdbApi";
const Home = () =>{
    return(
        <>
          <HeroSlide/>
          <div className="container" >
            <div className="section">
              <div className="section__header" style={{marginTop: "2rem"}}>
                <h2>Trending Movies</h2>
                <Link to="/movie">
                  <OutlineButton className="small" >view more</OutlineButton>
                </Link>
              </div>
              <MovieList category={category.movie} type={movieType.popular} />
            </div>
          </div>

        </>
    )
}

export default Home;