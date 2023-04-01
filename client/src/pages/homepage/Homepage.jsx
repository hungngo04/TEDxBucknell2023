import Header from "../../components/header/Header";
import Intro from "./intro/Intro";
import PrevTalk from "./prevTalk/PrevTalk";
import Footer from "../../components/footer/Footer";
import './homepage.css'

function Homepage() {
    return (
      <div className="homepage">
          <Header></Header>
          <Intro></Intro>
          <PrevTalk></PrevTalk>
          <Footer></Footer>
      </div>
    );
  }
  
  export default Homepage;