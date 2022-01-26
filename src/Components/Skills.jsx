import React from 'react'
// import code from '../images/code.svg'
import '../CSS/Skills.css'

const Skills = () => {
    return (
        <div>
            <section id="Skills"className="skills">
                <div className="container">
                    <h1 className="section-heading"><span>My</span>Skills</h1>
                    <p>My skill stack is full of development skills and programming skills. Add on to that I have some great communication skills and soft skills.
                        <br/>Below are my top skills, you can check my CV for more Info.
                    </p>
                    <div className="card-wrapper">
                        <div className="card">
                            {/* <img alt="card-img"><i class="fab fa-node"></i></img> */}
                            {/* <img src={code} alt="card-img"/> */}
                            <i class="fab fa-node"></i>
                            <h2>Node JS</h2>
                            <p>I have an intermediate exprecience with Node js. I have created a weather application using Node js and Express.
                               I have used Node js in various MERN projects.
                            </p>
                        </div> 
                        <div className="card">
                        <i class="fab fa-node-js"></i>
                            <h2>Express JS</h2>
                            <p>I have an intermediate exprecience with Express js. I have created a weather application using Node js and Express.
                               I have used Node js in various MERN projects.</p>
                        </div>
                        <div className="card">
                            <i class="fas fa-database"></i>
                            <h2>Mongo DB</h2>
                            <p>I have an intermediate exprecience with Mongo DB.
                               I have used Node js in my various MERN projects.</p>
                        </div>
                        <div className="card">
                        <i class="fab fa-react"></i>
                            <h2>React</h2>
                            <p>I have an intermediate exprience in React.I have craeted a Real Estate project completely based on React and Redux.
                                Even this website is being created in React JS
                            </p>
                        </div>
                        <div className="card">
                        <i class="fab fa-java"></i>
                            <h2>Java</h2>
                            <p>Java is my most preferable programming language. I have a whole grasp on OOPs concept. I am a 5 star coder on Hacker Rank java problem solving.</p>
                        </div>
                        <div className="card">
                        <i class="fab fa-js"></i>
                            <h2>JavaScript</h2>
                            <p>I have an intermediate Exprience with JavaScript. I have created a travelling site using HTMl,CSS and JavaScript.</p>
                        </div>  
                        <div className="card">
                        <i class="fas fa-code"></i>
                            <h2>C/C++</h2>
                            <p>I have basic knowledge of C++ and intermediate knowlege of C. I have intermediate level certification in C from HackerRank</p>
                        </div>  
                        {/* <div className="card">
                        <i class="fas fa-server"></i>
                            <h2>SQL</h2>
                            <p>I have </p>
                        </div>   */}
                        <div className="card">
                        <i class="fab fa-git-alt"></i>
                            <h2>Git/Github</h2>
                            <p>I am well aware with Git and GitHub.</p>
                        </div>                     
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
