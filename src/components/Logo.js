import React from 'react'

import '../styles/Logo.css'
import Gear from '../images/gear.png'

const Logo = ({ alt, src, spinSpeed }) =>  {
    return (
        <div className={`logo-container ${spinSpeed}`}>
            <img className="logo" alt="Spinning Gear" src={ Gear }/>
        </div>
    )
}

export default Logo;
