import Header from "../../components/header/Header";
import Intro from "./intro/Intro";
import PrevTalk from "./prevTalk/PrevTalk";
import Footer from "../../components/footer/Footer";
import ConferenceVenue from "../../components/conferenceVenue/ConferenceVenue"
import './homepage.css'

function Homepage() {
    return (
      <div className="homepage">
          <Header></Header>
          <Intro></Intro>
          <PrevTalk></PrevTalk>
          <ConferenceVenue></ConferenceVenue>
          <Footer></Footer>
      </div>
    );
  }
  
  export default Homepage;