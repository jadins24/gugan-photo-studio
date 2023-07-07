import React from "react";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/Header/NavBar";
import Services from "./components/Services/Services";
import Kitchendesign from "./components/Services/Ktchen design/Kitchendesign";
import Bedroomdesign from "./components/Services/Bedroom design/Bedroomdesign";
import Gallery from "./components/Gallery/Gallery" ;


function Routing() {



  const Main = () =>{
    return(
        <>
            <Home />
            <About />
            <Services />

            
        </>
    );
}
  return (
    <>
      <Router>
        <NavBar />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* services */}
            <Route path="/kitchen-design" element={<Kitchendesign />} />
            <Route path="/bedroom-design" element={<Bedroomdesign />} />


          </Routes>
        <Footer />
      </Router>
  </>
  );
}

export default Routing;
