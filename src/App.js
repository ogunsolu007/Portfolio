import React, { useEffect } from "react";
import Header from "./Container/header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Container/Contact/Contact";
import Footer from "./Container/Footer/Footer";
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
    <>
      <Social />
      <Navbar />
      <Header />
      <About />
      <Experience />
     <Works/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
