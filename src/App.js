import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Home";
import About from "../src/About";
import Navbar from "./common/ui/Navbar";
// import Projects from "./Projects";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
