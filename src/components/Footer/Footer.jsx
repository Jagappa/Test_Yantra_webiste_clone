import React from 'react'
import FooterStyle from './Footer.module.css'
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImLinkedin } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={FooterStyle.mainContainer}>
        <div id={FooterStyle.mainContainer1}>
          <div id={FooterStyle.subConatiner1}>
            <div id={FooterStyle.subConatiner1Logo}>
             <Link>
          <img src="https://www.testyantraglobal.com/images/partnerlogo2.svg" alt="Test Yantra Logo" />
          </Link> 
            </div>
            <div id={FooterStyle.subConatiner1Content1}>
            <p>Test Yantra Global is an Exclusive</p>
            <p> Platinum Partner of FireFlink.</p>
            </div>
            <div id={FooterStyle.subConatiner1Content2}>
            <p>Let's get socially connected...</p>
            </div>
            <div id={FooterStyle.subConatiner1SocialMediaLinks}>

            <ul>
              <li>
                <Link id={FooterStyle.linkIcon}><ImLinkedin /></Link>
              </li>
              <li>
                <Link id={FooterStyle.linkIcon}><IoLogoYoutube /></Link>
              </li>
              <li>
              <Link id={FooterStyle.linkIcon}><FaTwitter /></Link>
              </li>
              <li>
              <Link id={FooterStyle.linkIcon}><FaFacebookSquare /></Link>
              </li>
              <li>
              <Link id={FooterStyle.linkIcon}><FaInstagram /></Link>
              </li>
            </ul>
            </div>
          </div>
          <div id={FooterStyle.subConatiner2}>
            <div id={FooterStyle.subConatiner2heading}>
            <div id={FooterStyle.search}>
            <b>Subscribe to our Newsletter!</b>
            <form>
              <input type="email" placeholder="      Enter Your Business Email"/>
              <button>         Subscribe</button>
            </form>
            </div>
            </div>
            <div id={FooterStyle.subConatiner2CardMain1}>
              <div id={FooterStyle.subConatiner2CardMain1card1}>
                  <div id={FooterStyle.subConatiner2CardMain1card1h}>
                   <h1>Services</h1>
                  </div>
                  <div id={FooterStyle.subConatiner2CardMain1card1l}>
                    <ul>
                      <li>
                        <Link id={FooterStyle.link1} > Software Testing  (TaaS)</Link>
                        
                      </li>
                      <li>
                        <Link id={FooterStyle.link1} >Software Development</Link>
                        
                      </li>
                      <li>
                        <Link id={FooterStyle.link1} > Skills Enhancement</Link>
                        
                      </li>
                      <li>
                        <Link id={FooterStyle.link1} > IT Consulting</Link>
                        
                      </li>
                      <li>
                        <Link id={FooterStyle.link1} > Crowd Testing</Link>
                        
                      </li>
                    </ul>
                  </div>

              </div>
              <div id={FooterStyle.subConatiner2CardMain1card2}>
              <div id={FooterStyle.subConatiner2CardMain1card1h}>
                   <h1>Quick Links</h1>
                  </div>
                  <div id={FooterStyle.subConatiner2CardMain1card1l}>
                    <ul>
                      <li>
                        <Link id={FooterStyle.link1} >About Us</Link>
                        
                      </li>
                      <li>
                        <Link id={FooterStyle.link1} >Fireflink</Link>
                        
                      </li>
                      <li>
                        <Link id={FooterStyle.link1} > Article</Link>
                        
                      </li>
                      <li>
                        <Link id={FooterStyle.link1} > IT Consulting</Link>
                        
                      </li>
                      <li>
                        <Link id={FooterStyle.link1} > Contact</Link>
                        
                      </li>
                    </ul>
                  </div>

              </div>
              <div id={FooterStyle.subConatiner2CardMain1card3}>
              <div id={FooterStyle.subConatiner2CardMain1card1h}>
                   <h1>Contacts</h1>
                  </div>
                  <div id={FooterStyle.subConatiner2CardMain1card1c}>
                  <ul>
              <li>
                <pre><b>Address:</b>120 Adelaide Street</pre>
                <pre>West,</pre>
                <pre>Suite 2500, Toronto, ON, M5H 1T1,</pre>
                <pre>Canada.</pre>
                </li>
                <li>
                <b>Email: </b>hello@testyantraglobal.com
                </li>
                <li>
                <b>Phone: </b>1800 572 7905
                </li>
              </ul>
                  </div>
              </div> 
            </div>
          </div>
        </div>
        <div id={FooterStyle.mainContainer2}>
        <div id={FooterStyle.copyright}>
          <p>Copyright ©2024 Test Yantra Global. All rights reserved</p>
        </div>
        <div id={FooterStyle.uparrow}>
          <FaArrowUp />
        </div>
        </div>
        
         
    </footer>
  )
}

export default Footer
