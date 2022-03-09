import { HashRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from "react";
import Research from './Research.js'
import landing from './img/landing.svg'
import logo from './img/logo.svg'
import menu from './img/menu.svg'
import facebook from './img/facebook.svg'
import insta from './img/insta.svg'
import linkedin from './img/linkedin.svg'
import snapchat from './img/snapchat.svg'
import youtube from './img/youtube.svg'
import asterisk from './img/asterisk.svg'
import circle from './img/circle.svg'



function App() 

{

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%"},
    pageClose: {opacity: 0 },
    pageOpen: { opacity: 100 },
  }

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
    


  <motion.div class = "fullHome"
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
                <div class="menu-items" onClick={() => setIsOpen(isOpen => !isOpen)}  > APPROACH</div>
                <div class="menu-items"> <Link to="/Research"> RESEARCH </Link></div> 
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


<motion.div class = "grid grid-cols-1 xl:grid-cols-2"
    animate = {isOpen ? "pageClose" : "pageOpen" }
    variants={variants}
>
<div class = "rightside">
<div class = "landing-wrapper">
        <div class = "nav-home grid grid-cols-2"
        >
                <img src={logo} alt={"logo"}  className="logo-home" /> 


                <div class = "visible xl:invisible mobile-menu-button" onClick={() => setIsOpen(isOpen => !isOpen)}> 
                <img src={menu} alt={"menu"}className= "menu-home"/> 
                </div> 
               
        </div>      
<img src={landing} alt={"illustration"}/> 
</div>

</div>

<div class = "leftside">
<div class = "large-menu hidden xl:grid grid-cols-3">
                <Link to="/Research"><a className = "MenuList" href="./">RESEARCH</a> </Link>
                <a className = "MenuList" href="./">LATEST NEWS</a>
                <a className = "MenuList" href="./">CONTACT</a>
                </div>
    <div class = "titlename xl:pt-15% " >OUR APPROACH</div>
    <p class = "description ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut semper felis, ornare imperdiet metus. Curabitur pulvinar nisl at pretium ornare. Duis sagittis pellentesque lectus, in aliquet lectus suscipit nec. 
    <br/>
    <br/>
    Praesent porttitor turpis id lobortis imperdiet. Nullam sagittis est justo, vitae pulvinar erat hendrerit quis. Nulla aliquam orci vel ante vestibulum vestibulum. Duis sed volutpat neque, nec aliquam lacus. Curabitur molestie faucibus ultrices. Curabitur sollicitudin nisl sed erat semper, ac rhoncus augue porta.Nulla aliquam orci vel ante vestibulum vestibulum. Duis sed volutpat neque, nec aliquam lacus. Curabitur molestie faucibus ultrices. Curabitur sollicitudin nisl sed erat semper, ac rhoncus augue porta. 
 </p>

<div class = "inNumbers xl:mx-10% ">
<div class = "inNumbersTitle" >OUR APPROACH IN NUMBERS</div>
   <div> <p class = "inNumbersText grid grid-cols-2"> 
   <div> </div>
    • 80% conducted offline <br/> • 200+ published papers <br/> •  $2b invested in research</p> </div>
  </div>

  <div class = "inNumbers xl:mx-10% grid grid-cols-5">
  <img src={facebook} alt={"facebook"} className = "social-icons" /> 
  <img src={insta} alt={"insta"} className = "social-icons"/> 
  <img src={youtube} alt={"youtube"} className = "social-icons"/> 
  <img src={snapchat} alt={"snapchat"} className = "social-icons"/> 
  <img src={linkedin} alt={"linkedin"} className = "social-icons"/> 
  </div>
</div>

</motion.div>

      <div class = "footer grid-cols-1 mx-auto">
                  <p> © 2022 STUDIO KA IL All Rights Reserved. </p>
              </div>
    </motion.div>
  
    </div>
  );
}

export default App;