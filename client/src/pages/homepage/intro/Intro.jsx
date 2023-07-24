import React from 'react'
import './intro.css'
import circle from './img/circle.png' 
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
                <span>{intro.date}</span>
            </div>
            <div className="introTitle">
                <span>{intro.title}</span>
            </div>
            <div className="introTextContent">
                {intro.desc}
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