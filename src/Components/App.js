// import logo from './logo.svg';
// import './App.css';
import Home from "./Home";
import About from "./About";
import Skills from "./Skills"
import FullStack from "./FullStack";
import Projects from "./Projects";
import Qualification from "./Qualification";
import Contact from "./Contact";
import Footer from "./Footer";

import '../CSS/App.css'
import { UilBars } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

function App() {

  const openMenu = ()=>{
    console.log("open button clicked");
    let mobileNav=document.querySelector('.mobile-nav');
    mobileNav.classList.add("open");
  }

  const closeMenu = ()=>{
    console.log("close button clicked");
    let mobileNav=document.querySelector('.mobile-nav');
    mobileNav.classList.remove("open");
  }

  return (
    <div className="App site-wrapper">
      <button className="hamberger" onClick={openMenu}>
        <UilBars className="hamberger-icon" size="2rem"/>
      </button>
      <div className="mobile-nav">
        <button className="close" onClick={closeMenu}>
          <UilTimes className="close-icon" size="2rem"/>
        </button>
        <ul>
          <li><a href="#Home" onClick={closeMenu}>Home</a></li>
          <li><a href="#About" onClick={closeMenu}>About</a></li>
          <li><a href="#Skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#Projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#Qualifications" onClick={closeMenu}>Qualification</a></li>
          <li><a href="#Contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
      <Home/>
      <About/>
      <Skills/>
      <FullStack/>
      <Projects/>
      <Qualification/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
