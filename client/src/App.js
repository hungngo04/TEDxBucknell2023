import Header from "./components/header/Header";
import Intro from "./pages/homepage/intro/Intro";
import PrevTalk from "./pages/homepage/prevTalk/PrevTalk";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <PrevTalk></PrevTalk>
      <Footer></Footer>
    </div>
  );
}

export default App;
