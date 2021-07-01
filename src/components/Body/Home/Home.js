import React,{ useEffect, useState } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Mockup1 from '../../../images/mockup1.png'
import Mockup2 from '../../../images/1.png'

export default function Home() {

    const [allcoin, setAllcoin] = useState([])

    useEffect( ()=> {
        const getAllcoin = async () => {
            const res = await axios.get('https://api.nomics.com/v1/currencies/ticker?key=65bc0b39fc33dbdabe76b9b60d192ff3ed2b19d2&interval=1d,30d&convert=INR')
            console.log(res)
            setAllcoin(res.data)
        }
        getAllcoin()
    },[])

    var topmovers = allcoin.slice(0,10)
    console.log("topmovers", topmovers)

    return (
        <div className="Homepage">
            <div className="Home-banner">
                <div className="container">
                    <div className="banner-head">Smart, Secure and <br/>simply <span>amazing</span></div>
                    <div className="banner-desc">Special 50% volume purchase discount on Bitcoin, etherum & Dogecoin</div>
                    <div className="m-t-50"><Link className="banner-btn">Explore</Link></div>
                </div>
            </div>

            {/* Top Movers */}

            <div className="m-t-50 top-movers">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1" d="M0,288L1440,32L1440,0L0,0Z"></path>
            </svg>
            
            <div className="container">
                <div className="top-movers-head">
                    Top movers
                </div>
                <div className="row">
                    <div className="col-sm-5"></div>
                    <div className="col-sm-7 all-movercards">
                        <div className="top-movers-desc">Here is the list of top 10 movers today</div>
                        {
                            topmovers.map(coin => 
                                <div className="col-sm-3 col-xs-6 top-mover-card"><img src={coin.logo_url} alt="top-mover"/></div>
                            )
                        }
                        <div className="pad-50"></div>
                    </div>
                </div>

            </div>


            
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgb(7, 7, 56)" fill-opacity="1" d="M0,224L1440,288L1440,0L0,0Z"></path>
            </svg>

            {/* Real time data */}
            <div className="real-time-section m-t-100">
                <div className="container">
                    <div className="col-sm-5 offset-sm-1">
                        <img className="mockup-img" src={Mockup1} alt="section-3-mockup"/>
                    </div>
                    <div className="col-sm-6   m-t-150">
                        <div className="real-time-head">Get real time data of all coins</div>
                        <div className="banner-desc">You can get real time data of all the coins, and you can invest and trade for maximum profit</div>
                        <div className="m-t-50"><Link className="banner-btn">Explore</Link></div>
                    </div>
                </div>
            </div>

            {/* VoCrypto */}
            <div className="m-t-100">
                <div className="container">
                    <div className="col-sm-6 m-t-100">                       
                        <div className="real-time-head">Know about us more</div>
                        <div className="banner-desc">VoCrypto is a project created to deploy on vercel, It is a frontend application created using reactjs.</div>
                        <div className="m-t-50"><Link className="banner-btn">Know more</Link></div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                        <img className="mockup-img" src={Mockup2} alt="section-4-mockup"/>
                    </div>
                </div>
            </div>

            {/* value to bitcoin today */}
            <div className="bitcoin-price-today m-t-100 container">
                <div className="real-time-head">What is the price today?</div>
                <div className="row m-t-50">
                        {
                            topmovers.map(coin => 
                                <div className="col-sm-3 coin-price-card">
                                    <div className="card-content-flex">
                                        <img className="coin-img" src={coin.logo_url} alt="coin-image"/>
                                        <div className="coin-name">{coin.currency}</div><br/>
                                    </div> 
                                    <div className="price">Price: <span>{coin.price}</span></div> 
                                </div>
                            )
                        }
                    
                </div>
                <div className="m-t-50 view-more"><Link className="">View more</Link></div>
            </div>

            {/* Total numer of users */}
            <div className="total-coin container m-t-100">
                <div className="real-time-head">Our Counts</div>
                <div className="row m-t-50">
                    <div className="col-sm-3 all-sec-count">
                        <h2>1500+</h2>
                        <p className="count-text ">Our Customer</p>
                    </div>
                    <div className="col-sm-3 all-sec-count">
                        <h2>17</h2>
                        <p className="count-text ">Partners</p>
                    </div>
                    <div className="col-sm-3 all-sec-count">
                        <h2>500+</h2>
                        <p className="count-text ">Happy Users</p>
                    </div>
                    <div className="col-sm-3 all-sec-count">
                        <h2>6</h2>
                        <p className="count-text ">Projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
