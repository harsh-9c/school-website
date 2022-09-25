import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Curriculum from "./components/Curriculum";
import Career from "./components/Career";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<About />}></Route>
          <Route path="/Curriculum" element={<Curriculum />}></Route>
          <Route path="/Career" element={<Career />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
