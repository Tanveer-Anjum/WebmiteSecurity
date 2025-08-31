import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsTicker from "./Components/NewsUpdate/NewsTicker";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import WhyChooseUs from "./Components/WhyChooseUs";
import Service from "./Components/Sections/Service";
import TestCard from "./Components/TestCard";
import Footer from "./Components/Footer";
import AboutHeader from "../src/Components/AboutUs/AboutHeader";

function App() {
  return (
    <Router>
     
      <NewsTicker />
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
           
              < AboutHeader />
              <Footer />
            </>
          }
        />

     
      </Routes>
    </Router>
  );
}

export default App;
