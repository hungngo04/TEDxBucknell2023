import Homepage from "./pages/home/home_page.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import About from "./pages/about/about_page.jsx";
import Watchpage from "./pages/watch/watch_page.jsx";

function App() {
  return (
    // Test
    // <div className="Home_page">
    //   <Homepage></Homepage>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/watch" element={<Watchpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
