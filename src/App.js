import Header from "./Container/header/Header";
import Techstack from "./Components/TechStack/Techstack.jsx";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Container/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services/>
      {/* <Techstack /> */}
    </>
  );
}

export default App;
