import Header from "../../components/header/Header";
import Videotext from "./video/video";
import Footer from "../../components/footer/Footer";
import './watch_page.css'


function Watchpage() {
    return (
      <div className="watchpage">
          <Header></Header>
          <Videotext></Videotext>
          <Footer></Footer>
      </div>
    );
  }
  
export default Watchpage;