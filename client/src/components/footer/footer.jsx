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
                    <Link className="bottomListItemLink" to="/">
                        <div className="infoItem">TEDx Bucknell University</div>
                    </Link>
                    <Link className="bottomListItemLink" to="/team">
                        <div className="infoItem">Organizers</div>
                    </Link>
                    <Link className="bottomListItemLink" to="/watch">
                        <div className="infoItem">Previous Talks</div>
                    </Link>
                    <Link className="bottomListItemLink" to="/faqs">
                        <div className="infoItem">Frequently Asked Questions</div>
                    </Link>
                </div>
            </div>
            <div className="contact">
                <div className="infoItems">
                    <Link className="bottomListItemLink" to="nl020@bucknell.edu">
                        <div className="infoItem">Email</div>
                    </Link>
                    <Link className="bottomListItemLink" to="">
                        <div className="infoItem">Phone Number</div>
                    </Link>
                    <Link className="bottomListItemLink" to="/faqs">
                        <div className="infoItem">Contact Form</div>
                    </Link>
                </div>
            </div>
            <div className="socials">
                <div className="infoItemsIcons">
                    <Link className="infoListItemLink" to="" target="_blank">
                        <div className="infoItemIcon">
                            <FaFacebook color="white"/>
                        </div>
                    </Link>
                    <Link className="infoListItemLink" to="https://www.instagram.com/tedxbucknellu/" target="_blank">
                        <div className="infoItemIcon">
                            <FaInstagram color="white"/>
                        </div>
                    </Link>
                    <Link className="infoListItemLink" to="https://www.linkedin.com/company/tedxbucknelluniversity/about/" target="_blank">
                        <div className="infoItemIcon">
                            <FaLinkedin color="white"/>
                        </div>
                    </Link>
                    <Link className="infoListItemLink" to="" target="_blank">
                        <div className="infoItemIcon">
                            <FaYoutube color="white"/>
                        </div>
                    </Link>
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
