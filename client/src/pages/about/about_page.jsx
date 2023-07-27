import About from "./abtBody/AbtBody";
import "./about_page.css"
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

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