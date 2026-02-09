
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';
import ChallengesSection from './ChallengesSection/ChallengesSection';
import Testimonials from './Testimonials/Testimonials';
import LinkedinSolutions from './LinkedinSolutions/LinkedinSolutions';
import SupportedLeadCRM from './SupportedLeadCRM/SupportedLeadCRM';
import JoinLeadCRM from './JoinLeadCRM/JoinLeadCRM';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <ChallengesSection/>
      <Testimonials/>
      <LinkedinSolutions/>
      <SupportedLeadCRM/>
      <JoinLeadCRM/>
   <Footer/>
    </div>
  );
}

export default App;
