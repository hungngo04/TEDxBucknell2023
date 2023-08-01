import React from 'react'
import './prev_talk.css'

function PrevTalk() {
  return (
    <div className="prevTalk">

        <div className="talkTitle">Our Previous <span className='talks'>Talks</span></div>
            
            <div className='videoContainer'>
                <div className='videoItem'>
                    <iframe src="https://www.youtube.com/embed/S_xe649Ug3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="videoTitle">The Big Three of Body Language</div>
                    <div className="speakerName">Matt Giordano</div>
                </div>
                
                <div className='videoItem'>
                    <iframe src="https://www.youtube.com/embed/bKmN_Orgbgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="videoTitle">Let's Talk About Sex, Baby</div>
                    <div className="speakerName">Kirsten Young</div>
                </div>

                <div className='videoItem'>
                    <iframe src="https://www.youtube.com/embed/zNO7W86QjKA?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="videoTitle">Mainstream to Marijuana</div>
                    <div className="speakerName">Pete Kadens</div>
                </div>
            </div>

            {/* Add a link to the button */}
            <div className="viewMoreButton">
                <button className='viewMoreTalks'>View More Talks</button>
            </div>

    </div>  

  )
}

export default PrevTalk