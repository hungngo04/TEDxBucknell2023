import React from 'react'
import './prevTalk.css'
import TalkPhto from './img/talk-photo.png' 

function PrevTalk() {
  return (
    <div className="prevTalk">
        <div className="title">Our Previous <span className='talks'>Talks</span></div>
        <div className="photoContainer">
            <div className="photoItem">
                <img src={TalkPhto} alt="" />
                <div className="itemTitle">Dismantling my Bias of Incarceration</div>
                <div className="speakerName">Ella Tazuana Johnson</div>
            </div>
            <div className="photoItem">
                <img src={TalkPhto} alt="" />
                <div className="itemTitle">Dismantling my Bias of Incarceration</div>
                <div className="speakerName">Ella Tazuana Johnson</div>
            </div>
            <div className="photoItem">
                <img src={TalkPhto} alt="" />
                <div className="itemTitle">Dismantling my Bias of Incarceration</div>
                <div className="speakerName">Ella Tazuana Johnson</div>
            </div>
        </div>
    </div>
  )
}

export default PrevTalk