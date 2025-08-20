import React, { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react';
import { gsap } from 'gsap';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate navbar in
    gsap.fromTo('.navbar', {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 3,
      ease: 'power3.out'
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      gsap.fromTo('.mobile-menu', {
        opacity: 0,
        scale: 0.9
      }, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power3.out'
      });
      
      gsap.fromTo('.mobile-menu-item', {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.1,
        ease: 'power3.out'
      });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={toggleTheme}>
            <span className="glow-text theme-toggle">
              Souramoy
              <span className="theme-indicator">{isDark ? '🌙' : '☀️'}</span>
            </span>
          </div>
          
          <div className="nav-links desktop-only">
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <div className="mobile-menu-item">
              <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            </div>
            <div className="mobile-menu-item">
              <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            </div>
            <div className="mobile-menu-item">
              <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            </div>
            <div className="mobile-menu-item">
              <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 2rem;
          transition: all 0.3s ease;
        }
        
        .navbar.scrolled {
          background: rgba(11, 14, 20, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--stroke);
          box-shadow: var(--shadow-glass);
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .nav-logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
        }
        
        .theme-toggle {
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          background: var(--glass);
          backdrop-filter: blur(16px);
          border: 1px solid var(--stroke);
        }
        
        .theme-toggle:hover {
          background: var(--glass-hover);
          border-color: var(--stroke-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glass);
        }
        
        .theme-indicator {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        
        .theme-toggle:hover .theme-indicator {
          transform: scale(1.2) rotate(15deg);
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-links a {
          color: var(--text-dim);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-links a:hover {
          color: var(--text-strong);
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-strong);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .mobile-menu-toggle:hover {
          background: var(--glass-hover);
          border: 1px solid var(--stroke);
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(11, 14, 20, 0.95);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mobile-menu-content {
          text-align: center;
        }
        
        .mobile-menu-item {
          margin: 2rem 0;
        }
        
        .mobile-menu-item a {
          color: var(--text-strong);
          text-decoration: none;
          font-size: 2rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .mobile-menu-item a:hover {
          color: var(--primary);
          text-shadow: 0 0 20px var(--primary);
        }
        
        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: block;
          }
          
          .navbar {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;