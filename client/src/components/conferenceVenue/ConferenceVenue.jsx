import React from 'react'
import './conferenceVenue.css';
import CampusTheatre01 from './img/campus_theatre_1.png'
import CampusTheatre02 from './img/campus_theatre_2.png'

function conferenceVenue() {
  return (
    <div className="conferenceVenue">
        <div className="backdrop">
            <img src={CampusTheatre01} alt="" />
            <img src={CampusTheatre02} alt="" />
        </div>
        <div className="textRight">
            <div className="titleConference">Conference Venue</div>
            <div className="textTitleLarge">Hosted in Bucknell’s Historic Art Deco Campus Theatre</div>
            <div className="textContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget erat in elit commodo vestibulum. Aliquam varius eu odio vel dignissim. Ut id urna vel lacus suscipit interdum quis vitae quam. Phasellus ullamcorper ornare augue. Sed lacus risus</div>
            <div className="textAddress">Address: 413 Market St, Lewisburg, PA 17837</div>
            <div className="locationBtn">
                <button>VIEW LOCATION</button>
            </div>
        </div>
    </div>
  )
}

export default conferenceVenue