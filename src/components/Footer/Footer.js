import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import Logo from '../../images/logo.png'

export default function Footer() {
    return (
        <div>
            <div className="m-t-100 footer-sec">
                <div className="container">
                    <div className="col-sm-3">
                        <Link to="/"><img className="navbar-logo m-t-50" src={Logo} alt="logo"/></Link>
                        <div className="abt-vcrypto">VoCrypto is a real time crypto value data website, helping people to earn maximum profit</div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-3 m-t-100">
                        <div className="footer-tags-main">All pages</div>
                        <div className="footer-tags">All Coins</div>
                        <div className="footer-tags">About</div>
                        <div className="footer-tags">Contact us</div>
                    </div>

                    <div className="col-sm-4 m-t-100">
                        <div className="footer-tags-main">Subscribe us</div>
                            <form className="m-t-50">
                                <input type="text" placeholder="enter your email"></input>
                                <button>Subscribe</button>
                            </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
