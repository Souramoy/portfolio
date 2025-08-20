import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 4 });
    
    tl.fromTo('.hero-title', {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)'
    }, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power3.out'
    })
    .fromTo('.hero-subtitle', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .fromTo('.hero-cta', {
      opacity: 0,
      scale: 0.9
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4')
    .fromTo('.spline-embed', {
      opacity: 0,
      x: 100
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.8');

  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" data-scroll-section>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm Souramoy –<br />
            <span className="gradient-text">Full Stack Developer</span>
          </h1>
          <p className="hero-subtitle">
            Crafting immersive digital experiences with cutting-edge technology
          </p>
          <button className="btn-primary hero-cta" onClick={scrollToContact}>
            Contact Me
          </button>
        </div>
        
        <div className="hero-visual">
          <iframe
            className="spline-embed"
            src="https://my.spline.design/aibrain-B5eCwwZtO77jFYqJXGJ5vdnr/"
            frameBorder="0"
            width="100%"
            height="100%"
            aria-label="3D hero scene"
          />
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 2rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }
        
        .hero-text {
          z-index: 2;
        }
        
        .hero-title {
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          margin-bottom: 2.5rem;
          color: var(--text-dim);
          line-height: 1.6;
        }
        
        .hero-visual {
          height: 600px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: transparent;
        }
        
        .spline-embed {
          border-radius: 20px;
          background: transparent;
          border: none;
        }
        
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          
          .hero-visual {
            height: 400px;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 6rem 1rem 0;
            min-height: 90vh;
          }
          
          .hero-content {
            gap: 2rem;
          }
          
          .hero-visual {
            height: 300px;
          }
          
          .hero-subtitle {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;