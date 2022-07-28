import Header from "./Container/header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Container/Services/Services";
import Portfolio from "./Container/Porfolio/Portfolio";
import Contact from "./Container/Contact/Contact";
import Footer from "./Container/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
