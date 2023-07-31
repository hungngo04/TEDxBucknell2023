import Header from "../../components/header/header";
import Intro from "./introduction/intro";
import PrevTalk from "./previous-talk/prev_talk";
import Speaker from "./speaker/speaker";
import ConferenceVenue from "./conference-venue/conf_venue";
import ShareStory from "./share-story/share_story";
import Footer from "../../components/footer/footer";

import './home_page.css'

function Homepage() {
    return (
      <div className="homepage">
          <Header></Header>
          <Intro></Intro>
          <PrevTalk></PrevTalk>
          {/* <Speaker></Speaker>
          <ConferenceVenue></ConferenceVenue>
          <ShareStory></ShareStory>
          <Footer></Footer> */}
      </div>
    );
  }
  
  export default Homepage;