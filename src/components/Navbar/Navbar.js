import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../images/logo.png'
import './Navbar.css'


export default function Navbar() {
    return (
        <div>
            <div className="container navbar-flex">
                <Link to="/"><img className="navbar-logo" src={Logo} alt="logo"/></Link>

                <div className="navbar-components">
                    <Link>Contact</Link>
                    <Link to="/about">About</Link>
                    <Link className="invest-nav-link">Invest</Link>
                </div>
            </div>
        </div>
    )
}
