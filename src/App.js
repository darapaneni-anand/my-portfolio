import './App.css';
import Navbar from './Components/ComponentNavbar/Navbar';
import Self from './Components/SelfComponent/Self';
import Aboutme from './Components/ComponentAboutme/Aboutme';
import MyProject from './Components/MyProjects_Component/MyProject';
import Education from './Components/EducationComponent/Education';
import Contact from './Components/ContactComponent/Contact';
import Footer from './Components/FooterComponent/Footer';
import TechnicalSkills  from './Components/ComponentSkills/TechnicalSkills';


function App() {
  return (
    <div>
      <Navbar />
      <Self />
      <Aboutme />
      <Education />
      <TechnicalSkills/>
      <MyProject />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
