import Team from "./team-display/team_display";
import "./team_page.css"
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function TeamPage() {
  return (
    <div className="aboutpage">
      <Header></Header>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}

export default TeamPage;