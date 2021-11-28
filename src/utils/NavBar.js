import React from 'react'
import ccLogo from '../Images/Logo/fccLogo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {socialMedia} from './projectData.js'

const NavBar = () => {
    return (
        <nav id='navBar'>
            <div>
                <img src={ccLogo} alt="logo"></img>
            </div>
            <div>
                {socialMedia.map(({logo, url, size})=>{
                    return (
                        <a href={url}>
                            <FontAwesomeIcon icon={logo} size={size}></FontAwesomeIcon>
                        </a>
                    )
                })}
            </div>
        </nav>
    )
}

export default NavBar
