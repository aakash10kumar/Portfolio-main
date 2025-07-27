import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks"
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Download from "./components/Dwonload";
import Footer from "./components/Footer"
import Education from "./components/Education";
import Skill from "./components/Skill";
import Achievement from "./components/Achivement";
import Experience from "./components/Experience";
function App() {
  return (
    <div className="relative text-white overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">

      <div className="absolute inset-0 animate-slideUp bg-gradient-to-tr from-blue-950 via-black to-purple-900 opacity-10 pointer-events-none z-0" />
      <Navbar />

      <div id="about">
        <Hero />
      </div>
      <div id="download">
        <Download />
      </div>
      <div id="eduction">
        <Education />
      </div>
      <div id="skill">
        <Skill />
      </div>
       <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="contact">
        <Achievement />
      </div>
      <div id="socialLinks">
        <SocialLinks />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;


