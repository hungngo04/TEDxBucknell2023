import About from "./abtBody/AbtBody";
import "./aboutPage.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function AboutPage() {
  return (
    <div className="aboutpage">
      <Header></Header>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default AboutPage;