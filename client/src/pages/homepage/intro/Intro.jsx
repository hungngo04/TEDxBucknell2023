import React from 'react'
import './intro.css'
import circle from '../../../assets/img/home-page-circle.png'

function Intro() {
  return (
    <div className="intro">
        <div className="introLeft">
            <div className="date">
                <span>April 23, 2023</span>
            </div>
            <div className="introTitle">
                <span>The Essense of a Changing World</span>
            </div>
            <div className="introTextContent">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam minima quod perspiciatis enim libero unde doloremque, dolorum reprehenderit earum consequatur facere sunt, voluptatum inventore, saepe adipisci laudantium porro numquam. Ut.
            </div>
            <div className="introBtn">
                <button className='leftBtn'>Get Tickets</button>
                <button className='rightBtn'>Learn more</button>
            </div>
        </div>
        <div className="introRight">
            <img className='imgRight' src={circle} alt="" />
        </div>
    </div>
  )
}

export default Intro