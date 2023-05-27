import React from 'react'
import logo from '../images/portfolio_logo2.svg'
import man from '../images/home_img2.svg'
import '../CSS/home.css'

const Home = () => {
    return (
        <div>
            <header>
                <div id="Home" className="container">
                    <nav id="main-nav" className="flex items-center justify-between">
                        <div className="nav-left flex items-center">
                            <div className="branding">
                                <img src={logo} alt="logo"/>
                                <p>Portfolio</p>
                            </div>
                            <div className="menu">
                                <a href="#Home">Home</a>
                                <a href="#About">About</a>
                                <a href="#Skills">Skills</a>
                                <a href="#Projects">Projects</a>
                                <a href="#Qualifications">Qualification</a>
                            </div>
                        </div>
                        <div className="nav-right">
                            <a href="#Contact"><button  className="btn btn-green">Contact</button></a>
                        </div>
                    </nav>
                    <div className="hero flex items-center justify-between">
                        <div className="left flex-1 flex justify-center">
                            <img src={man} alt="man"/>
                        </div>
                        <div className="right flex-1">
                            <h6>Hello</h6>
                            <h1>I'm <span>Satvik Goyal</span></h1>
                            <p>
                                Results-driven and highly motivated software engineer with a strong focus on transparency, autonomy, and ownership, seeking a challenging role where I can leverage my skills and experience to contribute to the growth and success of a dynamic organization.
                            </p>
                            <div className="cv_button">
                                {/* <button className="btn btn-transparent">Download CV</button> */}
                                <a className="btn btn-transparent" href="https://drive.google.com/file/d/1WkY2kX8ltISIRaUWOlrR-s1XS14kjTIK/view?usp=sharing">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home
