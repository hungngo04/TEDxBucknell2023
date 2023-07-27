import Header from "../../components/header/header";
import Videotext from "./video/video";
import Footer from "../../components/footer/footer";
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