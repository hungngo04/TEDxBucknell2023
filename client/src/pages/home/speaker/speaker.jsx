import React from "react";
import './speaker.css';

import speaker1 from '../../../assets/img/speaker-1-2023.png';
import speaker2 from '../../../assets/img/speaker-2-2023.png';
import speaker3 from '../../../assets/img/speaker-3-2023.png';
import speaker4 from '../../../assets/img/speaker-4-2023.png';
import speaker5 from '../../../assets/img/speaker-5-2023.png';

function Speaker()  {
    return  (
        <div className="speaker">

            <div className="title">Our <span className='speakers'>Speakers</span></div>

            <div className='speakerContainer'>
                <div className='speakerItem'>
                    <img src={speaker1} alt="Photo of Gabby Diaz" />
                    <div className="speakerName">Gabby Diaz</div>
                    <div className="topic">The Big Three of Body Language</div>
                </div>

                <div className='speakerItem'>
                    <img src={speaker2} alt="Photo of Gabby Diaz" />
                    <div className="speakerName">Gabby Diaz</div>
                    <div className="topic">The Big Three of Body Language</div>
                </div>

                <div className='speakerItem'>
                    <img src={speaker3} alt="Photo of Gabby Diaz" />
                    <div className="speakerName">Gabby Diaz</div>
                    <div className="topic">The Big Three of Body Language</div>
                </div>

                <div className='speakerItem'>
                    <img src={speaker4} alt="Photo of Gabby Diaz" />
                    <div className="speakerName">Gabby Diaz</div>
                    <div className="topic">The Big Three of Body Language</div>
                </div>

                <div className='speakerItem'>
                    <img src={speaker5} alt="Photo of Gabby Diaz" />
                    <div className="speakerName">Gabby Diaz</div>
                    <div className="topic">The Big Three of Body Language</div>
                </div>
            </div>

        </div>
    )
}

export default Speaker