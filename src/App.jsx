// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
// import DigitalServices from "./Components/Sections/DigitalServicesComponent";
// import DigitalHeroSection from "./Components/DigitalHeroSection";
// import NavBar from "./Components/NavBar";
// import NewsTicker from "./Components/NewsUpdate/NewsTicker";   // home ticker
// import HeroSection from "./Components/PhysicalSectionHeroSection";
// import WhyChooseUs from "./Components/WhyChooseUs";
// import PhysicalService from "./Components/Sections/PhysicalServiceComponent";
// import TestCard from "./Components/TestCard";
// import Footer from "./Components/Footer";
// import AboutHeader from "./Components/AboutUs/AboutHeader";
// import ServiceSlider from "./Components/Services/ServiceSlider";
// import PhyscialSlider from "./Components/PhysicalSecurity/PhyscialSlider";
// import DigitalSlider from "./Components/DigitalSecurity/DigitalSlider";
// import ContactForm from "./Components/ContactPage/ContactForm";
// import CareerPage from "./Components/Career/CareerPage";
// import SecuritySwitchButton from "./Components/SecuritySwitchButton/SwitchButton";


// // ✅ Component to render ticker
// function TickerSwitcher({ showVideo, isDigitalSecurityActive }) {
//   return (
//     <NewsTicker
//       showVideo={showVideo}
//       isDigitalSecurityActive={isDigitalSecurityActive}
//     />
//   );
// }

// function App() {
//   const [showVideo, setShowVideo] = useState(false);
//   const [isDigitalSecurityActive, setIsDigitalSecurityActive] = useState(false);

//   const handleSecuritySwitch = () => {
//     setIsDigitalSecurityActive(prevState => !prevState);
//   };

//   return (
//     <Router>
//       {/* ✅ Pass state so ticker background updates */}
//       <TickerSwitcher
//         showVideo={showVideo}
//         isDigitalSecurityActive={isDigitalSecurityActive}
//       />

//       <NavBar
//         showVideo={showVideo}
//         setShowVideo={setShowVideo}
//         isDigitalSecurityActive={isDigitalSecurityActive}
//         handleSecuritySwitch={handleSecuritySwitch}
//       />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               {isDigitalSecurityActive
//                 ? <DigitalHeroSection isDigitalSecurityActive={isDigitalSecurityActive} />
//                 : <HeroSection />
//               }

//               {/* ✅ Switch Button Overlapping Slider */}
//               <div className="flex justify-center -mt-5 relative z-20">
//                 <SecuritySwitchButton
//                   handleSecuritySwitch={handleSecuritySwitch}
//                   isDigitalSecurityActive={isDigitalSecurityActive}
//                 />
//               </div>

//               <WhyChooseUs isDigitalSecurityActive={isDigitalSecurityActive} />

//               {isDigitalSecurityActive
//                 ? <DigitalServices isDigitalSecurityActive={isDigitalSecurityActive} />
//                 : <PhysicalService isDigitalSecurityActive={isDigitalSecurityActive} />}

                
//               <TestCard isDigitalSecurityActive={isDigitalSecurityActive}/>
//               <Footer />
//             </>
//           }
//         />

//         <Route
//           path="/about"
//           element={
//             <div className="pt-24">
//               <AboutHeader />
//               <Footer />
//             </div>
//           }
//         />

//         <Route
//           path="/services"
//           element={
//             <div className="container mx-auto overflow-hidden flex justify-center pt-24">
//               <ServiceSlider />
//               <Footer />
//             </div>
//           }
//         />

//         <Route
//           path="/physical-security"
//           element={
//             <div className="pt-24">
//               <PhyscialSlider />
//               <Footer />
//             </div>
//           }
//         />

//         <Route
//           path="/digital-security"
//           element={
//             <div className="pt-24">
//               <DigitalSlider />
//               <Footer />
//             </div>
//           }
//         />

//         <Route
//           path="/contact"
//           element={
//             <div className="pt-24">
//               <ContactForm />
//               <Footer />
//             </div>
//           }
//         />

//         <Route
//           path="/career"
//           element={
//             <div className="pt-24">
//               <CareerPage />
//               <Footer />
//             </div>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import DigitalServices from "./Components/Sections/DigitalServicesComponent";
import DigitalHeroSection from "./Components/DigitalHeroSection";
import NavBar from "./Components/NavBar";
import NewsTicker from "./Components/NewsUpdate/NewsTicker";
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
import CareerPage from "./Components/Career/CareerPage";
import SecuritySwitchButton from "./Components/SecuritySwitchButton/SwitchButton";
import TransitionPage from "./Components/Transition/TransitionVedios"; // ✅ import
import StatsSection from "./Components/AboutUs/StatsSection";

// ✅ Component to render ticker
function TickerSwitcher({ showVideo, isDigitalSecurityActive }) {
  return (
    <NewsTicker
      showVideo={showVideo}
      isDigitalSecurityActive={isDigitalSecurityActive}
    />
  );
}

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [isDigitalSecurityActive, setIsDigitalSecurityActive] = useState(false);

  return (
    <Router>
      {/* ✅ Always show NavBar & NewsTicker */}
      <TickerSwitcher
        showVideo={showVideo}
        isDigitalSecurityActive={isDigitalSecurityActive}
      />

      <NavBar
        showVideo={showVideo}
        setShowVideo={setShowVideo}
        isDigitalSecurityActive={isDigitalSecurityActive}
      />

      <Routes>
        {/* ✅ Transition Page */}
        <Route
          path="/transition"
          element={
            <TransitionPage
              onFinish={() => setIsDigitalSecurityActive(true)}
            />
          }
        />

        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <>
              {isDigitalSecurityActive
                ? <DigitalHeroSection isDigitalSecurityActive={isDigitalSecurityActive} />
                : <HeroSection isDigitalSecurityActive={isDigitalSecurityActive} />
              }

              {/* ✅ Switch Button */}
              <div className="flex justify-center -mt-5 relative z-20">
                <SwitchWithNavigate
                  isDigitalSecurityActive={isDigitalSecurityActive}
                  setIsDigitalSecurityActive={setIsDigitalSecurityActive}
                />
              </div>

              <WhyChooseUs isDigitalSecurityActive={isDigitalSecurityActive} />

              {isDigitalSecurityActive
                ? <DigitalServices isDigitalSecurityActive={isDigitalSecurityActive} />
                : <PhysicalService isDigitalSecurityActive={isDigitalSecurityActive} />
              }

              <TestCard isDigitalSecurityActive={isDigitalSecurityActive} />
              <Footer />
            </>
          }
        />

        {/* ✅ Other pages (NavBar & NewsTicker still visible) */}
        {/* <Route path="/about" element={<div className="pt-24"><AboutHeader /><Footer /></div>} /> */}


    <Route
          path="/about"
          element={
            <div className="pt-24">
              <AboutHeader isDigitalSecurityActive={isDigitalSecurityActive} />
              {/* <StatsSection isDigitalSecurityActive={isDigitalSecurityActive} /> */}
              <Footer />
            </div>
          }
        />

        <Route path="/services" element={<div className="container mx-auto overflow-hidden flex justify-center pt-24"><ServiceSlider /><Footer /></div>} />
        <Route path="/physical-security" element={<div className="pt-24"><PhyscialSlider /><Footer /></div>} />
        <Route path="/digital-security" element={<div className="pt-24"><DigitalSlider /><Footer /></div>} />
        <Route path="/contact" element={<div className="pt-24"><ContactForm /><Footer /></div>} />
        <Route path="/career" element={<div className="pt-24"><CareerPage /><Footer /></div>} />
      </Routes>
    </Router>
  );
}

// ✅ Wrapper for SecuritySwitchButton so it can navigate
function SwitchWithNavigate({ isDigitalSecurityActive, setIsDigitalSecurityActive }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isDigitalSecurityActive) {
      // Direct switch back to physical
      setIsDigitalSecurityActive(false);
    } else {
      // Show transition video before digital
      navigate("/transition");
    }
  };

  return (
    <SecuritySwitchButton
      handleSecuritySwitch={handleClick}
      isDigitalSecurityActive={isDigitalSecurityActive}
    />
  );
}

export default App;
