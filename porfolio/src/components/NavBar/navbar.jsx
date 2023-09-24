import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from '../../assets/contact.png'
import manu from '../../assets/menu.png'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar ">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Inicio</Link>
        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Acerca de</Link>
        <Link activeClass="active" to='proyects' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Portfolio</Link>
      </div>
      
      <button className="desktopMenuBtn" onClick={()=>{document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}}>
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contactame
      </button>
      <img src={manu} alt="manu" className="mobMenu"  onClick={()=>{setShowMenu(!showMenu)}}/>
      <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>{setShowMenu(false)}}>Inicio</Link>
        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>{setShowMenu(false)}}>Acerca de</Link>
        <Link activeClass="active" to='proyects' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
        <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>{setShowMenu(false)}}>Contactame</Link>

      </div>
    </nav>
  );
};
export default Navbar;
