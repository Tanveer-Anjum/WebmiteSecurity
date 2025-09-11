import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useState } from "react";
import DigitalServices from "./Components/Sections/DigitalServicesComponent";
import DigitalHeroSection from "./Components/DigitalHeroSection";
import NavBar from "./Components/NavBar";
import NewsTicker from "./Components/NewsUpdate/NewsTicker";   // home ticker
import HeroSection from "./Components/PhysicalSectionHeroSection";
import WhyChooseUs from "./Components/WhyChooseUs";
import PhysicalService from "./Components/Sections/PhysicalServiceComponent";
import TestCard from "./Components/TestCard";
import Footer from "./Components/Footer";
import AboutHeader from "./Components/AboutUs/AboutHeader";
import ServiceSlider from "./Components/Services/ServiceSlider";
import PhyscialSlider from "./Components/PhysicalSecurity/PhyscialSlider";
import DigitalSlider from "./Components/DigitalSecurity/DigitalSlider";
import ContactForm from "./Components/ContactPage/ContactForm";
import CareerPage from "./Components/Career/Careerpage";





// ✅ Component to switch ticker based on route
function TickerSwitcher({ showVideo }) {
  const location = useLocation();

  

  // default: home ticker
  return <NewsTicker showVideo={showVideo} />;
}

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [isDigitalSecurityActive, setIsDigitalSecurityActive] = useState(false);

  const handleSecuritySwitch = () => {
    setIsDigitalSecurityActive(prevState => !prevState);
  };
  return (
    <Router>
         <TickerSwitcher showVideo={showVideo} />
      <NavBar showVideo={showVideo} setShowVideo={setShowVideo} isDigitalSecurityActive={isDigitalSecurityActive} handleSecuritySwitch={handleSecuritySwitch} />

    
   

      <Routes>
      
        <Route
          path="/"
          element={
            <>
              {isDigitalSecurityActive ? <DigitalHeroSection /> : <HeroSection />}
              <WhyChooseUs />
              {isDigitalSecurityActive ? <DigitalServices /> : <PhysicalService />}
              <TestCard />
              <Footer />
            </>
          }
        />

     
        <Route
          path="/about"
          element={
            <div className="pt-24">
              <AboutHeader />
              <Footer />
            </div>
          }
          
        />
        <Route
          path='/services'
          element ={
            <div className="container mx-auto overflow-hidden flex justify-center pt-24">
              <ServiceSlider />
              <Footer />
            </div>
          }
       />
       <Route
       path='/physical-security'
       element ={
        <div className="pt-24">
        <PhyscialSlider/>
        <Footer />
        </div>
       }
      />
        <Route
       path='/digital-security'
       element ={
        <div className="pt-24">
        <DigitalSlider/>
        <Footer />
        </div>
       }
      />
       <Route
       path='/contact'
       element ={
        <div className="pt-24">
        <ContactForm/>
        <Footer />
        </div>
       }
      />
         <Route
       path='/career'
       element ={
        <div className="pt-24">
        <CareerPage/>
        <Footer />
        </div>
       }
      />
      </Routes>
    </Router>
  );
}

export default App;
