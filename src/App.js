import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ContactForm } from "./components/Contact";
import ParticlesComponent from "./components/Particles";
import { useInView } from "react-intersection-observer";

function FadeInSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Adjust as necessary to trigger earlier or later
  });

  return (
    <div ref={ref} className={`fade-in ${inView ? "visible" : ""}`}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden'}}>
      <div className="particles-container">
        <ParticlesComponent />
      </div>
      <div className="main-content">
      <NavBar />

        <FadeInSection>
          <Banner />
        </FadeInSection>
        <FadeInSection>
          <Skills />
        </FadeInSection>
        <FadeInSection>
          <Projects />
        </FadeInSection>
        <FadeInSection>
          <ContactForm />
        </FadeInSection>
      </div>
    </div>
  );
}

export default App;
