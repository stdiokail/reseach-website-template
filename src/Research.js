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

<motion.nav className = "fullMenu grid grid-cols-1"
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
                <div class="menu-items">NEWS</div>
                <div class="menu-items">CONTACT</div>
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
                <a className = "PageMenuList" href="./">APPROACH</a> 
                <Link to="/Research"> <a className = "PageMenuList">RESEARCH</a> </Link>
                <a className = "PageMenuList" href="./">LATEST NEWS</a>
                <a className = "PageMenuList" href="./">CONTACT</a>
                </div>
    

        <div class = "xl:hidden">
            <div class = " menu-small grid grid-cols-2">
                 <img src={logo} alt={"logo"}  className="logo" /> 
                 <img src={menu} alt={"menu"}  className="menu" onClick={() => setIsOpen(isOpen => !isOpen)} /> 
            </div>
        </div>

        <div class = "pageTitle xl:grid grid-cols-2"> OUR RESEARCH </div> <div></div>
        
        <div class = "grid grid-cols-1 xl:grid-cols-3 xl:px-60px">

        <div class = "full-card xl:px-60px">
        <img src={publications} alt={"publications"}  className="research-card-img" /> 
        <div class = "research-description">
        <div class = "research-title"> PUBLICATIONS </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut semper felis, ornare imperdiet metus. Curabitur pulvinar nisl at pretium ornare.
        <br/>  <br/>
        <button class = "basic-button">
        PUBLICATIONS
        </button>
        </div>
        </div>


        <div class = "full-card xl:px-60px">
        <img src={research} alt={"research"}  className="research-card-img" /> 
        <div class = "research-description">
        <div class = "research-title"> RESEARCH AREAS </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut semper felis, ornare imperdiet metus. Curabitur pulvinar nisl at pretium ornare.
        <br/>  <br/>
        <button class = "basic-button">
        RESEARCH AREAS
        </button>
        </div>
        </div>


        <div class = "full-card xl:px-60px">
        <img src={tools} alt={"tools"}  className="research-card-img" /> 
        <div class = "research-description">
        <div class = "research-title"> TOOLS </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut semper felis, ornare imperdiet metus. Curabitur pulvinar nisl at pretium ornare.
        <br/>  <br/>
        <button class = "basic-button">
        TOOLS
        </button>
        </div>
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