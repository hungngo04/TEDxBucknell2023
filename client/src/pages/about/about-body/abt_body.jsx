import React from 'react'
import './abt_body.css'
import about_banner from '../../../assets/img/test-image.jpeg'

function About() {
  return (
   <div className = "about">
        <div className = "aboutBanner">
            <img src = {about_banner} alt = ""/>
        </div>
        <div className = "aboutTEDxBucknellUniversity">
            <div className = "titleTEDxBucknellUniversity">
                <span>About TEDx Buckenll University</span>
            </div>
            <div className = "bodyTEDxBucknellUniversity">
                <span>TEDx Bucknell University is an electrifying annual conference driven by the power of ideas and experiences. Organized passionately by a team of driven students, our mission is to unite the community in a journey of exploration and dialogue, enriching our collective present and shaping a brighter future. As a student-led organization, we aim to foster a culture of curiosity, providing a platform for meaningful conversations and engaging students, faculty, and the wider community in thought-provoking discussions. Nestled in the heart of a vibrant and diverse community, TEDx Bucknell University aims to celebrate the remarkable human capacity to inspire and embrace interconnectedness, all while daring to challenge and redefine the boundaries of what's possible. Join us on this transformative journey as we unleash the potential of ideas to shape a better world for all.</span>
            </div>
        </div>
        <div className = "aboutTEDx">
            <div className = "titleTEDx">
                <span>About TEDx, x = independently organized event</span>
            </div>
            <div className = "bodyTEDx">
                <span>TEDx is the world’s largest grassroots network for discovering and spreading ideas. It is a license-granting initiative intended to bring TED to local communities through unique attendee experiences and original, live TEDx talks. Organizers and volunteers all over the world put together these events to spark conversation and connection and help discover ideas in their own communities.</span>
            </div>
        </div>
        <div className = "aboutTED">
            <div className = "titleTED">
                <span>About TED</span>
            </div>
            <div className = "bodyTED">
                <span>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world’s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com.</span> <br></br> <br></br>
                <span>The annual TED Conference takes place each spring in Vancouver, British Columbia, along with the TEDActive simulcast event in nearby Whistler. The annual TEDGlobal conference will be held this October in Rio de Janeiro, Brazil. TED‘s media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.</span>
            </div>
        </div>
   </div>
  )
}

export default About