import React from 'react'
import weather from '../images/weather.png'
import logo from '../images/resume.jpg'
import logo1 from '../images/hero.png'
import Slider from "react-slick"
import "../CSS/Projects.css"

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props)=>{
    const { className, style, onClick } = props;
    return(
        <>
            <div className={className} style={{borderRadius:"50%",...style,display:"block",backgroundColor:"#3DCFD3"}} onClick={onClick}></div>
        </>
    )
}
const SamplePrevArrow = (props)=>{
    const { className, style, onClick } = props;
    return(
        <>
            <div className={className} style={{borderRadius:"50%",...style,display:"block",backgroundColor:"#3DCFD3"}} onClick={onClick}></div>
        </>
    )
}
const Projects = () => {

    var settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 3000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      }

    return (
        <div>
            <section id="Projects"className="projects">
                <div className="container">
                    <h1 className="section-heading"><span>My</span> Projects</h1>
                    <p>I have a lot of web developement projects from basic to intermediate. Below projects are some of them.
                        The projects will be uploaded soon on Github.
                    </p>
                    <Slider className="slider" {...settings}>
                        {/* <div className="slide-show "> */}
                            <div className="slide">
                                <img  src={logo} alt="lady"/>
                                <p>Developed a resume builder web application in which user can create their resumes in a
                                   efficient way. The whole project is created using <b>MERN Stack</b></p>
                                <span>Resume Builder</span>
                            </div>
                            <div className="slide">
                                <img  src={logo1} alt="lady"/>
                                <p>Developed a Real Estate web appliaction with fully functional login system using redux.
                                    Application also contains a fully functional wishlist. The whole project is created using <b>React and Redux</b></p>
                                <span>Real Estate Website</span>
                            </div>
                            <div className="slide">
                                <img  src={weather} alt="lady"/>
                                <p>Developed a weather forecasting appliaction using open weather web api.Appliaction is created using <b>JavaScript</b></p>
                                <span><a href="https://satvikweatherapp.netlify.app/">Weather app</a></span>
                            </div> 
                        {/* </div> */}
                    </Slider>
                </div>
            </section>
        </div>
    )
}

export default Projects

