import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlowOrbs from './components/GlowOrbs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Temporarily disable Locomotive Scroll to debug visibility issues
    if (!isLoading) {
      // Simple ScrollTrigger setup without Locomotive
      ScrollTrigger.refresh();
    }
  }, [isLoading]);

  return (
    <div className="app">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className="page-wrap" style={{ 
        opacity: isLoading ? 0 : 1,
        position: 'relative',
        zIndex: 1
      }}>
        <GlowOrbs />
        <Navbar />
        
        <div className="scroll-container">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;