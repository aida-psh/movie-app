import React, { useEffect, useRef } from "react";
import './header.scss';
import { Link , useLocation } from 'react-router-dom';
import logo from '../../assets/tmovie.png';


const headerNav = [
    {
        display : 'Home',
        patch : '/'
    },
    {
        display : 'Movies',
        patch : '/movie'
    },
    {
        display : 'Tv Serioes',
        patch : '/tv'
    }
]

const Header = () => {
    const {patchname} = useLocation();
    const headerRef = useRef(null);
    const active = headerNav.findIndex(e => e.patch === patchname );
    
    useEffect(()=>{
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            }else{
                headerRef.current.classList.remove('shrink');
                
            }
           
        }
         window.addEventListener('scroll' , shrinkHeader);
        return () =>{
            window.removeEventListener('scroll' , shrinkHeader);
        };

    },[]);

    return(
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <Link to="/">baMovie</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e , i) =>(
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.patch}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Header;


