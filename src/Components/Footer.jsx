import React from 'react'
import logo2 from '../images/portfolio_logo2.svg'
// import facebook from '../images/facebook.svg'
import '../CSS/Footer.css'
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="branding">
                    <img src={logo2} alt="logo" className="footer-logo"/>
                    <p>Portfolio</p>
                </div>
                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/satvik-goyal-4b016919a/"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/satvikgoyal"><i class="fab fa-github"></i></a>
                    <a href="https://www.hackerrank.com/svsgoyal"><i class="fab fa-hackerrank"></i></a>
                    <a href="https://www.instagram.com/satvikgoyal_19/"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100008869086013"><i class="fab fa-facebook"></i></a>
                </div>
                <div className="copyright">
                    Copyright 2021 Ⓒ Name PSD Template. All Right reserved.
                    <p>Created by Satvik Goyal</p> 
                </div>
            </footer>
        </div>
    )
}

export default Footer
