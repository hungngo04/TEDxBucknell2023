import React from "react";
import { Link } from "react-router-dom";
import './share_story.css';

import tedTalks from '../../../assets/img/ted_talks.jpeg';

function ShareStory()  {

    return(
        <div className="shareYourStory">
            <div className="shareTitle">
                <div className="shareTitleText">
                    WE WANT TO HEAR YOUR STORY
                </div>
            </div>

            <div className="shareSubTitle">
                <div className="shareSubTitleText">
                    SHARE YOUR STORY
                </div>
            </div>

            <div className="shareStoryPhoto">
                <img src={tedTalks} alt="TED Talk Photo" />
            </div>

            {/* Add a Google Form link to allow visitors to nominate someone they know */}
            <div className="nominateSomeone">
                <Link className="nominateSomeoneLink" to="www.github.com">
                    NOMINATE SOMEONE
                </Link>
            </div>
        </div>
    )

}

export default ShareStory