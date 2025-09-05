import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import NewsTicker from "./Components/NewsUpdate/NewsTicker";   // home ticker
import HeroSection from "./Components/HeroSection";
import WhyChooseUs from "./Components/WhyChooseUs";
import Service from "./Components/Sections/Service";
import TestCard from "./Components/TestCard";
import Footer from "./Components/Footer";
import AboutHeader from "./Components/AboutUs/AboutHeader";
import NewsTickers from "./Components/AboutUs/NewsTickers";   // about ticker
import ServiceSlider from "./Components/Services/ServiceSlider";
import PhyscialSlider from "./Components/PhysicalSecurity/PhyscialSlider";
import DigitalSlider from "./Components/DigitalSecurity/DigitalSlider";
import ContactForm from "./Components/ContactPage/ContactForm";
import CareerPage from "./Components/Career/Careerpage";





// ✅ Component to switch ticker based on route
function TickerSwitcher() {
  const location = useLocation();

  if (location.pathname === "/about") {
    return <NewsTickers />;
  }

  // default: home ticker
  return <NewsTicker />;
}

function App() {
  return (
    <Router>
         <TickerSwitcher />
      <NavBar />

    
   

      <Routes>
      
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WhyChooseUs />
              <Service />
              <TestCard />
              <Footer />
            </>
          }
        />

     
        <Route
          path="/about"
          element={
            <>
              <AboutHeader />
              <Footer />
            </>
          }
          
        />
        <Route
          path='/services'
          element ={
            <>
              <ServiceSlider />
              <Footer />
            </>
          }
       />
       <Route
       path='/physical-security'
       element ={
        <>
        <PhyscialSlider/>
        <Footer />
        </>
       }
      />
        <Route
       path='/digital-security'
       element ={
        <>
        <DigitalSlider/>
        <Footer />
        </>
       }
      />
       <Route
       path='/contact'
       element ={
        <>
        <ContactForm/>
        <Footer />
        </>
       }
      />
         <Route
       path='/career'
       element ={
        <>
        <CareerPage/>
        <Footer />
        </>
       }
      />
      </Routes>
    </Router>
  );
}

export default App;
