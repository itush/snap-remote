import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Errors from "./pages/Errors";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="careers" element={<Careers />} />
        <Route path="*" element={<Errors />} />
      </Routes>
     
    </div>
  )
}

export default App;