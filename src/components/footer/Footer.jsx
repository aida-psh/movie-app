import React from "react";
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie (2).png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <Link to='/'>BaMovie</Link>
                    </div>
                </div>
            </div>
            <div className="footer__content__menus">
                <div className="footer__content__menu">
                    <Link to="/">Home</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Term of service</Link>
                    <Link to="/">About us</Link>
                </div>
                <div className="footer__content__menu">
                    <Link to="/">Live</Link>
                    <Link to="/">FAQ</Link>
                    <Link to="/">Premium</Link>
                    <Link to="/">Privacy policy</Link>
                </div>

                <div className="footer__content__menu">
                    <Link to="/"> you must watch</Link>
                    <Link to="/">Recent release</Link>
                    <Link to="/">Top IMDB</Link>
                </div>
            </div>

        </div>
    )
}
export default Footer;