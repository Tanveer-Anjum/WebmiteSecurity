import Button from 'react-bootstrap/Button';
import NewsTicker from './Components/NewsUpdate/NewsTicker';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import WhyChooseUs from './Components/WhyChooseUs';
import Service from './Components/Sections/Service';


function App() {
  return (
   <>
 <div>
<NewsTicker/>


</div>
<NavBar></NavBar>
  <HeroSection></HeroSection>
  <WhyChooseUs></WhyChooseUs>
  <Service></Service>
 </>

  );
}

export default App;
