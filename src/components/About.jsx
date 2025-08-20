import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Palette, 
  Rocket, 
  Database, 
  Globe, 
  Cpu 
} from '@phosphor-icons/react';

const About = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        end: 'bottom 20%',
        scroller: '.scroll-container'
      }
    });

    tl.fromTo('.about-content', {
      opacity: 0,
      filter: 'blur(10px)'
    }, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power3.out'
    })
    .fromTo('.profile-image', {
      opacity: 0,
      x: -50,
      scale: 0.9
    }, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .fromTo('.skill-item', {
      opacity: 0,
      scale: 0.8,
      y: 20
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.3');

  }, []);

  const skills = [
    { name: 'Frontend', icon: Code, color: '#6ea8ff' },
    { name: 'Design', icon: Palette, color: '#8a5cff' },
    { name: 'Performance', icon: Rocket, color: '#54ffe0' },
    { name: 'Database', icon: Database, color: '#ff6b9d' },
    { name: 'Web APIs', icon: Globe, color: '#ffd93d' },
    { name: 'AI/ML', icon: Cpu, color: '#6bcf7f' }
  ];

  return (
    <section id="about" className="about" data-scroll-section>
      <div className="about-container">
        <div className="about-content">
          <div className="profile-section">
            <div className="profile-image-container">
              <img 
                src="/src/assets/profile.png" 
                alt="Souramoy Profile" 
                className="profile-image"
              />
              <div className="profile-glow"></div>
            </div>
          </div>
          
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a passionate full-stack developer with a love for creating 
              immersive digital experiences. With expertise in modern web 
              technologies and a keen eye for design, I bring ideas to life 
              through clean code and stunning visuals.
            </p>
            <p>
              My journey spans from crafting pixel-perfect interfaces to 
              building robust backend systems. I thrive on challenges and 
              constantly push the boundaries of what's possible on the web.
            </p>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item glass-card">
                  <skill.icon 
                    size={24} 
                    weight="light" 
                    style={{ color: skill.color }}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 8rem 2rem;
          position: relative;
        }
        
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: center;
        }
        
        .profile-section {
          display: flex;
          justify-content: center;
        }
        
        .profile-image-container {
          position: relative;
          width: 300px;
          height: 300px;
        }
        
        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--stroke);
          transition: all 0.3s ease;
          filter: grayscale(20%) contrast(110%);
        }
        
        .profile-image:hover {
          transform: translateY(-5px) rotate(2deg);
          filter: grayscale(0%) contrast(115%) saturate(110%);
        }
        
        .profile-glow {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          opacity: 0.3;
          z-index: -1;
          animation: pulse 3s ease-in-out infinite;
        }
        
        .about-text h2 {
          margin-bottom: 2rem;
          color: var(--text-strong);
        }
        
        .about-text p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.7;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 3rem;
        }
        
        .skill-item {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .skill-item:hover {
          transform: translateY(-5px);
          background: var(--card);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .skill-item span {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-dim);
        }
        
        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          
          .profile-image-container {
            width: 250px;
            height: 250px;
          }
        }
        
        @media (max-width: 768px) {
          .about {
            padding: 4rem 1rem;
          }
          
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .profile-image-container {
            width: 200px;
            height: 200px;
          }
        }
        
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;