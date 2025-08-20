import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const GlowOrbs = () => {
  useEffect(() => {
    // Animate floating orbs
    gsap.to('.glow-orb', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.5
    });

    gsap.to('.glow-orb', {
      x: 30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.3
    });

    // Rotate orbs
    gsap.to('.glow-orb', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
      stagger: 2
    });

  }, []);

  return (
    <div className="glow-orbs">
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>
      <div className="glow-orb orb-4"></div>
      <div className="glow-orb orb-5"></div>

      <style jsx>{`
        .glow-orbs {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
        }
        
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.6;
          will-change: transform;
        }
        
        @keyframes drift {
          0%, 100% { 
            transform: translateX(0px) translateY(0px) scale(1); 
          }
          25% { 
            transform: translateX(30px) translateY(-20px) scale(1.1); 
          }
          50% { 
            transform: translateX(-20px) translateY(-30px) scale(0.9); 
          }
          75% { 
            transform: translateX(-30px) translateY(20px) scale(1.05); 
          }
        }
        
        .orb-1 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          top: 10%;
          left: 10%;
          animation: drift 15s ease-in-out infinite;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
          top: 20%;
          right: 15%;
          animation: drift 18s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .orb-3 {
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, var(--neon) 0%, transparent 70%);
          bottom: 30%;
          left: 20%;
          animation: drift 20s ease-in-out infinite;
          animation-delay: 4s;
        }
        
        .orb-4 {
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          bottom: 20%;
          right: 25%;
          animation: drift 16s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .orb-5 {
          width: 160px;
          height: 160px;
          background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          animation: drift 22s ease-in-out infinite;
          animation-delay: 3s;
        }
        
        @media (max-width: 768px) {
          .glow-orb {
            filter: blur(30px);
            opacity: 0.3;
          }
          
          .orb-1, .orb-2, .orb-3, .orb-4, .orb-5 {
            width: 80px;
            height: 80px;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .glow-orb {
            animation: none !important;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default GlowOrbs;