import About from "./about-body/abt_body";
import "./about_page.css"
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