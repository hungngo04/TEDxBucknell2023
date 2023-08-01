import React from 'react'
import './conf_venue.css';
import CampusTheatre01 from '../../../assets/img/campus-theatre-1.png'
import CampusTheatre02 from '../../../assets/img/campus-theatre-2.png'

function conferenceVenue() {
  return (
    <div className="conferenceVenue">
        <div className="backdrop">
            <img src={CampusTheatre01} alt="Campus Theatre Photo" />
            <span className="space"></span>
            <img src={CampusTheatre02} alt="Campus Theatre Photo" />
        </div>
        <div className="textRight">
            <div className="titleConference">Conference Venue</div>
            <div className="textTitleLarge">Hosted in Bucknell’s Historic Art Deco Campus Theatre</div>
            <div className="textContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget erat in elit commodo vestibulum. Aliquam varius eu odio vel dignissim. Ut id urna vel lacus suscipit interdum quis vitae quam. Phasellus ullamcorper ornare augue. Sed lacus risus</div>
            <div className="textAddress">Address: 413 Market St, Lewisburg, PA 17837</div>
            <div className="textRightBtn">
                <button className='locationBtn'>View Location</button>
            </div>
        </div>
    </div>
  )
}

export default conferenceVenue