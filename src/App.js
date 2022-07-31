import React, { useEffect } from "react";
import Header from "./Container/header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Container/Services/Services";
import Portfolio from "./Container/Porfolio/Portfolio";
import Contact from "./Container/Contact/Contact";
import Footer from "./Container/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay:5,
    });
    AOS.refresh();

  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
