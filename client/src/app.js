import Home from "./pages/home/home_page.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import About from "./pages/about/about_page.jsx";
import Watch from "./pages/watch/watch_page.jsx";
import Team from "./pages/team/team_page.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/watch" element={<Watch/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
