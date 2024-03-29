import React from 'react'
import { Link } from 'react-router-dom';
import './intro.css'
import circle from '../../../assets/img/home-page-circle.png'
import axios from "axios"
import { useState, useEffect } from 'react'

function Intro() {
    const [intro, setIntro] = useState([]);

    useEffect(() => {
        const fetchDates = async () => {
            const res = await axios.get("/home/")
            setIntro(res.data[0])
        }
        fetchDates()
    }, [])

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
                <Link to="https://bucknell.universitytickets.com/" target='_blank'>
                    <button className='leftBtn'>GET TICKETS</button>
                </Link>
                <button className='rightBtn'>LEARN MORE</button>
            </div>
        </div>
        <div className="introRight">
            <img className='imgRight' src={circle} alt="Home Page Image" />
        </div>
    </div>
  )
}

export default Intro