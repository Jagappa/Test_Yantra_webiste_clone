import React from 'react'
import NavBarStyle from './NavBar.module.css'
import { Link } from "react-router-dom";
import '../../Global.css'
import Footer from '../Footer/Footer'

const NavBar = () => {
  return (
    <nav className={NavBarStyle.navBar}>
      <div id={NavBarStyle.logo}>
        <div>
          <img src="https://www.testyantraglobal.com/images/logo.svg" alt="" />
        </div>
      </div>
      <div id={NavBarStyle.menu}>
      <ul>
          <li>
            <Link to="/" id={NavBarStyle.homeMenu} className={NavBarStyle.noLine}>Home</Link>
          </li>
          <li>
            <Link to="/services" className={NavBarStyle.noLine}>Services</Link>
          </li>
          <li>
            <Link  to="/partners" className={NavBarStyle.noLine}>Partners</Link>
          </li>
          <li>
            <Link  to="/articles" className={NavBarStyle.noLine}>Articles</Link>
          </li>
          <li>
            <button>Get In Touch</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
