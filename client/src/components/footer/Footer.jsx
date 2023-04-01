import React from 'react'
import './footer.css'
import logo from './img/logo-white 1.png' 
import fb from './img/facebook.png'
import ig from './img/instagram.png'
import li from './img/linkedin.png'
import yt from './img/youtube.png'

function Footer() {
  return (
    <div className="bottom">
        <div className="bottomLogo">
            <img src={logo} alt="" />
        </div>
        <div className="tedLicense">
            <p>This independent TEDx event is operated under license from TED.</p>
        </div>
        <div className="footerTitles">
            <span className='footerTitle'>Information</span>
            <span className='footerTitle'>Contact</span>
            <span className='footerTitle'>Socials</span>
        </div>
        <div className='footerBody'>
            <div className="information">
                <div className="infoItems">
                    <div className="infoItem">TEDxBucknellUniversity 2023</div>
                    <div className="infoItem">Organizers</div>
                    <div className="infoItem">Previous Talks</div>
                </div>
            </div>
            <div className="contact">
                <div className="infoItems">
                    <div className="infoItem">TEDxBucknellUniversity 2023</div>
                </div>
            </div>
            <div className="socials">
                <div className="infoItemsIcons">
                    {/*Need to add <a> to all of these icons*/}
                    <div className="infoItemIcon">
                        <img src={fb} alt="" />
                    </div>
                    <div className="infoItemIcon">
                        <img src={ig} alt="" />
                    </div>
                    <div className="infoItemIcon">
                        <img src={li} alt="" />
                    </div>
                    <div className="infoItemIcon">
                        <img src={yt} alt="" />
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