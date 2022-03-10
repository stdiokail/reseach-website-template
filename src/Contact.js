import logo from './img/logo.svg'
import menu from './img/menu.svg'
import research from './img/research.svg'
import tools from './img/tools.svg'
import publications from './img/publications.svg'
import asterisk from './img/asterisk.svg'
import circle from './img/circle.svg'
import { HashRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useState } from "react";
import facebook from './img/facebook.svg'
import youtube from './img/youtube.svg'
import linkedin from './img/linkedin.svg'
import insta from './img/insta.svg'
import snapchat from './img/snapchat.svg'
import ResearchCard from './ResearchCard'
import News from './News.js'
import Contact from './Contact.js'


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
                <div class="menu-items" > <Link to="/Contact">  RESEARCH </Link> </div> 
                <div class="menu-items"> <Link to="/News"> NEWS </Link> </div>
                <div class="menu-items" onClick={() => setIsOpen(isOpen => !isOpen)}> CONTACT </div>
                <div class="menu-items-top">    </div>
            </div>

            <div>
                <img src={asterisk} alt={"asterisk"}  className="asterisk-menu" /> 
            </div>
            <div>
                <img src={circle} alt={"circle"}  className="circle-menu" /> 
            </div>
            

</motion.nav>


<motion.div
    animate = {isOpen ? "pageClose" : "pageOpen" }
    variants={variants}
>

<div class="blank"><br/><br/></div>

<div class = "page-menu hidden xl:grid grid-cols-6">
    <div></div> <div></div>
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

        <div class = "pageTitle xl:grid grid-cols-2"> CONTACT</div> <div></div>
        
        
        <div class = "contact-form grid grid-cols-1">
            <div>
            <textarea class = "message-input" 
                            id = "message" 
                            maxlength = "500" 
                            rows = "1"
                            cols = "50"
                            > Enter message. </textarea>
            </div>

            <div>
            <textarea class = "email-input" 
                            id = "email" 
                            maxlength = "8" 
                            > Enter email address. </textarea>
            </div>
            <div>
            <button class = "submit-button">
                SUBMIT
            </button>
            </div>
        </div>
            


        </motion.div>

   

    <div class = "socials-footer">
    <img src={logo} alt={"logo"}  className="logo-footer" /> 
     <div class = "grid grid-cols-9">
    <div></div>
    <div></div>
    <img src={facebook} alt={"facebook"}  className="socials-icon" /> 
    <img src={youtube} alt={"youtube"}  className="socials-icon" /> 
    <img src={linkedin} alt={"linkedin"}  className="socials-icon" /> 
    <img src={snapchat} alt={"snapchat"}  className="socials-icon" /> 
    <img src={insta} alt={"insta"}  className="socials-icon" /> 
    <div></div>
    <div></div>
    </div>
    </div>
    
    <div class = "footer grid-cols-1 mx-auto">
                  <p> © 2022 STUDIO KA IL All Rights Reserved. </p>
    </div>

</motion.div>


);
}