import React from 'react'
import { Link } from "react-router-dom";
import './footer.css'
import logo from '../../assets/img/tedx-bu-logo-white.png' 

// importing react icons library
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import  {FaLinkedin} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

function Footer() {
  return (
    <div className="bottom">
        <div className="bottomLogo">
            <Link to="/">
                <img src={logo} alt="TEDx Bucknell University Logo"/>
            </Link>
        </div>
        <div className="tedLicense">
            This independent TEDx event is operated under license from TED.
        </div>
        <div className="footerTitles">
            <span className='footerTitle'>Information</span>
            <span className='footerTitle'>Contact</span>
            <span className='footerTitle'>Socials</span>
        </div>
        <div className='footerBody'>
            <div className="information">
                <div className="infoItems">
                    <div className="infoItem">TEDx Bucknell University</div>
                    <div className="infoItem">Organizers</div>
                    <div className="infoItem">Previous Talks</div>
                    <div className="infoItem">Frequently Asked Questions</div>
                </div>
            </div>
            <div className="contact">
                <div className="infoItems">
                    <div className="infoItem">Email</div>
                    <div className="infoItem">Phone Number</div>
                    <div className="infoItem">Contact Form</div>
                </div>
            </div>
            <div className="socials">
                <div className="infoItemsIcons">
                    {/*Need to add <a> to all of these icons*/}
                    <div className="infoItemIcon">
                        <FaFacebook color="white"/>
                    </div>
                    <div className="infoItemIcon">
                        <FaInstagram color="white"/>
                    </div>
                    <div className="infoItemIcon">
                        <FaLinkedin color="white"/>
                    </div>
                    <div className="infoItemIcon">
                        <FaYoutube color="white"/>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="line">
            <hr></hr>
        </div>
        <div className="copyright">
            <p>© Copyright • TEDxBucknell 2023 • All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
