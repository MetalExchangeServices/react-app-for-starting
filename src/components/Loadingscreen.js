import React from 'react'
import '../CSS files/loadingscreen.css'

const Loadingscreen = () => {
    const animationend = (e) => {
        e.target.style.display = 'none';
    }
    return (
        <div onAnimationEnd={animationend} className='loading-screen-div' id='loading-screen-div'>
                <span className='loading-screen-span'></span>
        </div>
    )
}

export default Loadingscreen