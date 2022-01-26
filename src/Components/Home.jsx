import React from 'react'
import logo from '../images/portfolio_logo2.svg'
import man from '../images/Home_img.svg'
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
                            <p>I am an enthusiastic learner with great learning skills, my learning stack is full of <b>MERN</b> related projects and some good <b>problem solving skills</b>. 
                            With great communication and soft skills I can work in team as well as alone.</p>
                            <div className="cv_button">
                                {/* <button className="btn btn-transparent">Download CV</button> */}
                                <a className="btn btn-transparent" href="https://drive.google.com/file/d/1R2RqlKQAmJYvGftyfzzz78Rxr96DH4_Y/view?usp=sharing">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home
