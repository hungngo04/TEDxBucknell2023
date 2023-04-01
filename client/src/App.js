import Header from "./components/header/Header";
import Intro from "./pages/homepage/intro/Intro";
import PrevTalk from "./pages/homepage/prevTalk/PrevTalk";
import Footer from "./components/footer/Footer";
import FAQs from "./pages/faq/FAQs.jsx";

function App() {
  return (
    <div className="App">
      {/* <homepage>
        <Header></Header>
        <Intro></Intro>
        <PrevTalk></PrevTalk>
        <Footer></Footer>
      </homepage> */}
      <Header></Header>
      <FAQs></FAQs>
      <Footer></Footer>
    </div>
  );
}

export default App;
