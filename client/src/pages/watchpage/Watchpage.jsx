import Header from "../../components/header/Header";
import Videotext from "./videotext/Videotext";
import Footer from "../../components/footer/Footer";
import './watchpage.css'


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