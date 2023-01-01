import React, { useEffect } from "react";
import Header from "./Container/header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Container/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Container/About/About";
import Social from "./Components/socials/Social";
import Experience from "./Container/Experience/Experience";
import Works from "./Container/works/Works.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 5,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="app">
      <Social />
      <div>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Works />
        <Contact />
        <Social />
      </div>
    </div>
  );
}

export default App;
