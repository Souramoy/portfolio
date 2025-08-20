import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from '@phosphor-icons/react';

const Footer = () => {
  useEffect(() => {
    // Animate footer in
    gsap.fromTo('.footer', {
      opacity: 0,
      y: 60,
      filter: 'blur(10px)'
    }, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%'
      }
    });

    // Animate floating particles
    gsap.to('.particle', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.5
    });

  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" data-scroll-section>
      <div className="footer-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="glow-text">Souramoy</h3>
            <p>Crafting digital experiences with passion</p>
          </div>
          
          <div className="footer-nav">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/Souramoy">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/souramoy-shee-16656123a/">LinkedIn</a></li>
              <li><a href="mailto:souramoys@gmail.com">Email</a></li>
              <li><a href="https://www.instagram.com/soura_shee/">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Made with <Heart size={16} weight="fill" style={{ color: '#ff6b9d' }} /> by Souramoy
          </p>
          <p>&copy; 2025 All rights reserved</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, transparent 0%, var(--bg-secondary) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid var(--stroke);
          padding: 4rem 2rem 2rem;
          position: relative;
          overflow: hidden;
          min-height: 60vh;
          transition: all 0.3s ease;
        }
        
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--glass);
          opacity: 0.3;
          pointer-events: none;
          transition: all 0.3s ease;
        }
        
        .footer-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--primary);
          border-radius: 50%;
          filter: blur(1px);
          opacity: 0.6;
          box-shadow: 0 0 8px var(--primary);
          transition: all 0.3s ease;
        }
        
        .particle:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .particle:nth-child(2) {
          top: 40%;
          left: 80%;
          animation-delay: 1s;
        }
        
        .particle:nth-child(3) {
          top: 60%;
          left: 30%;
          animation-delay: 2s;
        }
        
        .particle:nth-child(4) {
          top: 80%;
          left: 70%;
          animation-delay: 0.5s;
        }
        
        .particle:nth-child(5) {
          top: 30%;
          left: 50%;
          animation-delay: 1.5s;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-brand h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }
        
        .footer-brand p {
          color: var(--text-dim);
          font-size: 1.1rem;
        }
        
        .footer-nav h4,
        .footer-social h4 {
          color: var(--text-strong);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .footer-nav ul,
        .footer-social ul {
          list-style: none;
        }
        
        .footer-nav li,
        .footer-social li {
          margin-bottom: 0.8rem;
        }
        
        .footer-nav a,
        .footer-social a {
          color: var(--text-dim);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .footer-nav a:hover,
        .footer-social a:hover {
          color: var(--primary);
          padding-left: 5px;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid var(--stroke);
          color: var(--text-dim);
          font-size: 0.9rem;
        }
        
        .footer-bottom p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 1rem 2rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;