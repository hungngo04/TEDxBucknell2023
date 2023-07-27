import React from 'react'
import './abt_body.css'
import about_banner from './img/test-image.jpeg'

function About() {
  return (
   <div className = "About">
        <div className = "AboutBanner">
            <img src = {about_banner} alt = "" className='banner_img'/>
        </div>
        <div className = "About_TEDxBucknellUniversity">
            <div className = "TEDxBU_Title">
                <span>About TEDxBuckenllUniversity</span>
            </div>
            <div className = "TEDxBU_Body">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium imperdiet sapien eu pharetra. Sed vel feugiat ex. Sed et diam nibh. Nullam ut dapibus risus. Mauris malesuada ullamcorper nulla, vel efficitur nisl molestie ut. In at placerat sapien, a blandit nisi. Duis congue lobortis lobortis. Morbi dictum, felis placerat ornare tincidunt, arcu leo tincidunt nunc, ut mollis arcu erat quis lectus.</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium imperdiet sapien eu pharetra. Sed vel feugiat ex. Sed et diam nibh. Nullam ut dapibus risus. Mauris malesuada ullamcorper nulla, vel efficitur nisl molestie ut. In at placerat sapien, a blandit nisi. Duis congue lobortis lobortis. Morbi dictum, felis placerat ornare tincidunt, arcu leo tincidunt nunc, ut mollis arcu erat quis lectus.</span>
            </div>
        </div>
        <div className = "About_TEDx">
            <div className = "TEDx_Title">
                <span>About TEDx, x = independently organized event</span>
            </div>
            <div className = "TEDx_Body">
                <span>TEDx is the world’s largest grassroots network for discovering and spreading ideas. It is a license-granting initiative intended to bring TED to local communities through unique attendee experiences and original, live TEDx talks. Organizers and volunteers all over the world put together these events to spark conversation and connection and help discover ideas in their own communities.</span>
            </div>
        </div>
        <div className = "About_TED">
            <div className = "TED_Title">
                <span>About TED</span>
            </div>
            <div className = "TED_Body">
                <span>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world’s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com.</span> <br></br> <br></br>
                <span>The annual TED Conference takes place each spring in Vancouver, British Columbia, along with the TEDActive simulcast event in nearby Whistler. The annual TEDGlobal conference will be held this October in Rio de Janeiro, Brazil. TED‘s media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.</span>
            </div>
        </div>
   </div>
  )
}

export default About