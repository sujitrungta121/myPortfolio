import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Home";
import About from "../src/About";
import Navbar from "./common/ui/Navbar";
// import Projects from "./Projects";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Components/Footer";
import Experience from "../src/Experience";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
