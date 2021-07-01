import React from 'react'
import './About.css'
import ReactJs from '../../../images/ReactJS.png'
import Nomics from '../../../images/nomics.png'
import Homepage from '../../../images/homepage.png'
import Mockup2 from '../../../images/1.png'
import Mockup3 from '../../../images/2.png'

export default function About() {
    return (
        <div>
            <div className="m-t-100 about-page-header">About this project</div>

            <div className="container m-t-150">
                <div className="stack-sec-head">Tech stack & API used</div>

                <div className="row m-t-100">
                    <div className="col-sm-6">
                        <img className="mockup-img" src={ReactJs} alt="reactjs-logo"/>
                    </div>
                    <div className="col-sm-6">
                        <div className="stack-sec-head">Reactjs</div>
                        <div className="banner-desc">React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</div>
                    </div>
                </div>

                <div className="row m-t-100">
                    <div className="col-sm-6">
                        <div className="stack-sec-head">Nomics API</div>
                        <div className="banner-desc">Cryptocurrency and Bitcoin API is a lightning fast REST API that aspires to be the data backbone for developers and professional cryptoinvestors.</div>
                    </div>
                    <div className="col-sm-6">
                        <img className="mockup-img" src={Nomics} alt="reactjs-logo"/>
                    </div>
                </div>

                <div className="container m-t-150">
                    <div className="stack-sec-head">Logo Concept</div>
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="mockup-img " src={Mockup2} alt="full-homepage"/>
                        </div>
                        <div className="col-sm-6 m-t-100">
                            <div className="banner-desc">As you know about cryptocurrency the values go up and down. and as we use a wallet to keep our currency. I combined both these things and created the logo where traingle edges show the graph and combined together looks like a wallet</div>
                            <img className="mockup-img m-t-50" src={Mockup3} alt="full-homepage"/>
                        </div>
                    </div>
                    
                </div>

                <div className="container m-t-150">
                    <div className="stack-sec-head">UI Design</div>
                    <div className="m-t-100 ui-element-head">Homepage:</div>
                    <img className="mockup-img m-t-50 box-sdw" src={Homepage} alt="full-homepage"/>
                </div>

                
            </div>

        </div>
    )
}
