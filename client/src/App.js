import Homepage from "./pages/homepage/Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import About from "./pages/aboutpage/AboutPage.jsx";

function App() {
  return (
    // <div className="Home_page">
    //   <Homepage></Homepage>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
