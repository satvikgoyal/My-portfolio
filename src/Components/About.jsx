import React from 'react'
import man2 from '../images/portfolio_img3.jpg'
// import facebook from '../images/facebook.svg'
import '../CSS/About.css'
const About = () => {
    return (
        <div>
            <section id="About" className="about">
                <div className="container flex items-center about-wrapper">
                    <div className="flex-1">
                        <img src={man2} alt="man2" className="about-img"/>
                    </div>
                    <div className="flex-1 right">
                        <h1>About<span>Me</span></h1>
                        <h3>Hello, I am Satvik Goyal</h3>
                        {/* <p>I am an enthusiastic learner with great learning skills, my learning stack is full of <em><b>MERN</b></em> related projects and some good <em><b>problem solving skills</b></em>. 
                            With great communication and soft skills I can work in team as well as alone.</p>
                        <p><em><b>My Goal:- </b></em>To become a Software Developer. To be a good developer who can create som useful product for millions people's life. 
                        Want to learn many things from every single project I'm going through</p> */}
                        <p>I am a 3rd year engineering grad pursuing <b>Computer Science</b>. I am an enthusiastic learner with great learning skills, my learning stack is full of <b>MERN</b> related projects and some good <b>problem solving skills</b>. 
                           I am a <b>5 star coder at Hacker Rank</b> in problem solving and java programming.</p>
                        <p><b>My Goals :- </b>To become a Software Developer. To be a good developer who can create some useful product for millions people's life. 
                            Want to learn many things from every single project I'm going through</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/satvik-goyal-4b016919a/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com/satvikgoyal"><i class="fab fa-github"></i></a>
                            <a href="https://www.hackerrank.com/svsgoyal"><i class="fab fa-hackerrank"></i></a>
                            <a href="https://www.instagram.com/satvikgoyal_19/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=100008869086013"><i class="fab fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
