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
                        <p>I am a final year engineering grad pursuing <b>Computer Science</b>. I am a dedicated and skilled professional who strives to embody the core values of <b>transparency</b>, <b>autonomy</b>, and <b>ownership</b>. With a strong focus on customer-first approach and <b>challenging the status quo</b>, I aim to bring <b>agility</b> and <b>integrity</b> to every aspect of my work.</p>
                        <p><b>Autonomy</b>, <b>agility</b>, and <b>integrity</b> are at the core of my work approach. I proactively identify opportunities to improve the development process. My effective <b>communication skills</b> enable me to collaborate effectively with team members, mentors, and managers, seeking assistance when needed and sharing my insights and learnings.</p>
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
