import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate logo in
    tl.fromTo('.preloader-logo', {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)'
    }, {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power3.out'
    });

    // Animate progress bar
    tl.to('.progress-bar', {
      width: '100%',
      duration: 2,
      ease: 'power2.out',
      onComplete: () => {
        // Fade out preloader
        gsap.to('.preloader', {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: 'power3.inOut',
          onComplete: () => {
            onComplete();
            // Animate main content in
            gsap.fromTo('.page-wrap', {
              opacity: 0,
              filter: 'blur(8px)'
            }, {
              opacity: 1,
              filter: 'blur(0px)',
              duration: 1,
              ease: 'power3.out'
            });
          }
        });
      }
    }, '-=0.5');

  }, [onComplete]);

  return (
    <div className="preloader">
      <div className="preloader-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="preloader-content">
        <h1 className="preloader-logo glow-text">SOURAMOY</h1>
        <div className="progress-container ">
          <div className="progress-bar"></div>
        </div>
      </div>
      
      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--gradient-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: all 0.3s ease;
        }
        
        .preloader::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-overlay);
          pointer-events: none;
          z-index: 1;
        }
        
        .preloader-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }
        
        .preloader-logo {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 3rem;
          text-shadow: 0 0 40px var(--primary);
          position: relative;
          transition: all 0.3s ease;
        }
        
        .preloader-logo::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: blur(10px);
          opacity: 0.5;
          z-index: -1;
        }
        
        .progress-container {
          width: 300px;
          height: 4px;
          background: var(--glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--stroke);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-glass);
          margin: 0 auto;
        }
        
        .progress-bar {
          width: 0%;
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--neon));
          border-radius: 4px;
          box-shadow: 
            0 0 20px var(--neon),
            0 0 40px var(--primary);
          position: relative;
        }
        
        .progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }
        
        .preloader-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }
        
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: var(--primary);
          border-radius: 50%;
          filter: blur(1px);
          opacity: 0.7;
          box-shadow: 0 0 8px var(--primary);
          animation: float 6s ease-in-out infinite;
        }
        
        .particle:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 6s;
        }
        
        .particle:nth-child(2) {
          top: 60%;
          left: 80%;
          animation-delay: 1s;
          animation-duration: 8s;
        }
        
        .particle:nth-child(3) {
          top: 80%;
          left: 30%;
          animation-delay: 2s;
          animation-duration: 7s;
        }
        
        .particle:nth-child(4) {
          top: 30%;
          left: 70%;
          animation-delay: 3s;
          animation-duration: 9s;
        }
        
        .particle:nth-child(5) {
          top: 50%;
          left: 50%;
          animation-delay: 4s;
          animation-duration: 5s;
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.7;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) scale(1.2); 
            opacity: 1;
          }
          50% { 
            transform: translateY(-10px) translateX(-15px) scale(0.8); 
            opacity: 0.5;
          }
          75% { 
            transform: translateY(-30px) translateX(5px) scale(1.1); 
            opacity: 0.9;
          }
        }
        
        @media (max-width: 768px) {
          .progress-container {
            width: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;