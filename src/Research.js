import logo from './img/logo.svg'
import logobg from './img/logobg.svg'
import menu from './img/menu.svg'
import tools from './img/tools.svg'
import publications from './img/publications.svg'
import datasets from './img/datasets.svg'
import asterisk from './img/asterisk.svg'
import circle from './img/circle.svg'
import { HashRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useState } from "react";
import facebook from './img/facebook.svg'
import youtube from './img/youtube.svg'
import linkedin from './img/linkedin.svg'
import insta from './img/insta.svg'
import ResearchCard from './ResearchCard'
import News from './News.js'
import Contact from './Contact.js'
import heroPage from './img/heroPage.svg'
import asteriskblbg from './img/asteriskblbg.svg'



export default function App() {

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%"},
        pageClose: {opacity: 0 },
        pageOpen: { opacity: 100 },
      }
    
        const [isOpen, setIsOpen] = useState(false)


return (


<motion.div class = "research"
                initial = {{ opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{duration: 2}}
>

<motion.nav className = "fullMenu grid grid-cols-1 content xl:hidden"
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              transition = {{stiffness: 3}}
                      >
                        <div>
                <img src={logo} alt={"logo"}  className="logo-menu" /> 
            </div>

            <div class="menu-list divide-y-1">
                <div class="menu-items-top">    </div>
                <div class="menu-items" > <Link to="/">  APPROACH </Link></div>
                <div class="menu-items" onClick={() => setIsOpen(isOpen => !isOpen)}> RESEARCH </div> 
                <div class="menu-items"> <Link to="/News"> NEWS </Link> </div>
                <div class="menu-items"> <Link to="/Contact"> CONTACT </Link> </div>
                <div class="menu-items-top">    </div>
            </div>

            <div>
                <img src={asterisk} alt={"asterisk"}  className="asterisk-menu" /> 
            </div>

            

</motion.nav>


<motion.div
    animate = {isOpen ? "pageClose" : "pageOpen" }
    variants={variants}
>

<div class="blank"><br/><br/></div>

<div class = "page-menu hidden xl:grid grid-cols-6">
    <div class = " col-span-2"> 
    <img src={heroPage} alt={"illustration"} className="pageHero"/> 
    </div>
                <Link to="/"> <a className = "PageMenuList">APPROACH</a> </Link>
                <Link to="/Research"> <a className = "PageMenuList">RESEARCH</a> </Link>
                <Link to="/News"> <a className = "PageMenuList">LATEST NEWS</a> </Link>
                <Link to="/Contact"> <a className = "PageMenuList">CONTACT</a> </Link>
                </div>
    

        <div class = "xl:hidden">
            <div class = " menu-small grid grid-cols-2">
                 <img src={logo} alt={"logo"}  className="logo" /> 
                 <img src={menu} alt={"menu"}  className="menu" onClick={() => setIsOpen(isOpen => !isOpen)} /> 
            </div>
        </div>

        <div class = "pageTitle xl:grid grid-cols-2"> 
        <div> OUR RESEARCH </div> 
        <div class = "hidden xl:grid">
        <img src={asteriskblbg} alt={"asterisk"}  className="asterisk-page" />
        </div>
        </div>
        
        <div class = "grid grid-cols-1 xl:grid-cols-3 xl:px-60px">

        <div class = "full-card xl:px-60px">
        <img src={publications} alt={"publications"}  className="research-card-img" /> 
        <div class = "research-description">
        <button class = "basic-button">
        PUBLICATIONS
        </button>
        </div>
        </div>


        <div class = "full-card xl:px-60px">
        <img src={tools} alt={"tools"}  className="research-card-img" /> 
        <div class = "research-description">
        <button class = "basic-button">
        TOOLS
        </button>
        </div>
        </div>


        <div class = "full-card xl:px-60px">
        <img src={datasets} alt={"datasets"}  className="research-card-img" /> 
        <div class = "research-description">
        <button class = "basic-button">
        DATASETS
        </button>
        </div>
        </div>


        </div>



        </motion.div>

   

    <div class = "socials-footer">
    <img src={logobg} alt={"logo"}  className="logo-footer" /> 
     <div class = "grid grid-cols-4">
    <img src={facebook} alt={"facebook"}  className="socials-icon" /> 
    <img src={youtube} alt={"youtube"}  className="socials-icon" /> 
    <img src={linkedin} alt={"linkedin"}  className="socials-icon" /> 
    <img src={insta} alt={"insta"}  className="socials-icon" /> 
    </div>
    </div>
    
    <div class = "footer grid-cols-1 mx-auto">
                  <p> ?? 2022 STUDIO KA IL All Rights Reserved. </p>
    </div>

</motion.div>


);
}