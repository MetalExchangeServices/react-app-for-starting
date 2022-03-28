import React, { useState, useEffect } from 'react'
import '../CSS files/homepage.css';
import image from '../CSS files/download.jpg'
import { NavLink, useHistory } from 'react-router-dom';

const Homepage = () => {
    const [Hading, setHading] = useState('hading-start');
    const [Anker, setAnker] = useState('anker-start');
    const [line, setLine] = useState('line-animations-start');
    const [Nav_bar, setNav_bar] = useState('nav-start');
    const [Image, setImage] = useState('');
    const history = useHistory()
    useEffect(() => {
        localStorage.setItem('periouspage', (localStorage.getItem('page')));
        localStorage.setItem('page', (window.location.pathname));
        if (localStorage.getItem('periouspage').length > 1) {
            setAnker('')
            setHading('')
            setLine('')
            setNav_bar('')
        }
    }, [])


    const animation_other = () => {
        setAnker('anker')
        setHading('hading')
        setLine('line-animations')
        setNav_bar('nav1')
        setImage('image-animations-start')
        setTimeout(() => {
            history.push('/store')
        }, 8000);
    }
    const animation_remove = () => {
        setAnker('')
        setHading('')
        setLine('')
        setNav_bar('')
        setImage('')
    }

    return (
        <><div id='head' className='header-home'>
            <div className='nav-bar-home' id={Nav_bar}>
                <img src={image} alt='' />
                <button id='log-out' name='log-out' className='fas fa-sign-out-alt'></button>
            </div>
            <div className='item-page' id={Image}>
                <div id='item' className='item'>
                    <h1 id={Hading}>HEYJOYE
                    </h1>
                    <NavLink className='home-btn login' id={Anker} to='/login'>Login</NavLink>
                    <button className='home-btn shop' id={Anker} onClick={animation_other}>SHOP</button>
                    <NavLink className='home-btn question' id={Anker} to='/support'>F&Q</NavLink>
                </div>
                <div className='animated-text' id={line} onAnimationEnd={animation_remove}></div>
            </div>
        </div></>
    )
}

export default Homepage