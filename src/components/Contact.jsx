import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
        end: 'bottom 20%'
      }
    });

    tl.fromTo('.contact-title', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .fromTo('.contact-form', {
      opacity: 0,
      x: -50
    }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .fromTo('.contact-info', {
      opacity: 0,
      x: 50
    }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.8')
    .fromTo('.form-group', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.4');

  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Animate submit button
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });

    // Here you would typically send the form data
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-particles">
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
      </div>
      <div className="contact-container">
        <h2 className="contact-title">Let's Work Together</h2>
        
        <div className="contact-content">
          <div className="contact-form glass-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary submit-btn">
                <PaperPlaneTilt size={20} weight="light" />
                Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <div className="info-card glass-card">
              <h3>Get In Touch</h3>
              <p>
                Ready to bring your ideas to life? Let's discuss your next 
                project and create something amazing together.
              </p>
              
              <div className="social-links">
                <a href="https://github.com/Souramoy" className="social-link">
                  <GithubLogo size={24} weight="light" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/souramoy-shee-16656123a/" className="social-link">
                  <LinkedinLogo size={24} weight="light" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: 8rem 2rem;
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, 
            var(--bg) 0%, 
            var(--bg-secondary) 25%, 
            var(--bg) 50%, 
            var(--bg-secondary) 75%, 
            var(--bg) 100%);
          overflow: hidden;
        }
        
        .contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-overlay);
          opacity: 0.7;
          pointer-events: none;
          z-index: 1;
        }
        
        .contact::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at 20% 30%, 
            rgba(110, 168, 255, 0.1) 0%, 
            transparent 50%
          ),
          radial-gradient(
            circle at 80% 70%, 
            rgba(138, 92, 255, 0.1) 0%, 
            transparent 50%
          ),
          radial-gradient(
            circle at 50% 50%, 
            rgba(84, 255, 224, 0.05) 0%, 
            transparent 50%
          );
          pointer-events: none;
          z-index: 1;
        }
        
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .contact-title {
          text-align: center;
          margin-bottom: 4rem;
          color: var(--text-strong);
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        
        .contact-form {
          padding: 3rem;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 2px solid var(--stroke);
          box-shadow: 
            var(--shadow-glass),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }
        
        .form-group {
          margin-bottom: 2rem;
          position: relative;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-strong);
          font-weight: 500;
          font-size: 0.9rem;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: var(--glass);
          border: 1px solid var(--stroke);
          border-radius: 12px;
          color: var(--text-strong);
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 
            0 0 0 3px rgba(110, 168, 255, 0.1),
            0 0 20px rgba(110, 168, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .info-card {
          padding: 2.5rem;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 2px solid var(--stroke);
          box-shadow: 
            var(--shadow-glass),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .info-card:hover {
          border-color: var(--stroke-hover);
          transform: translateY(-4px);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.2);
        }
        
        .info-card h3 {
          margin-bottom: 1rem;
          color: var(--text-strong);
          font-size: 1.5rem;
        }
        
        .info-card p {
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--glass);
          border: 1px solid var(--stroke);
          border-radius: 12px;
          color: var(--text-dim);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          color: var(--text-strong);
          background: var(--card);
          transform: translateX(5px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }
        
        .social-link:hover svg {
          color: var(--primary);
        }
        
        .contact-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }
        
        .contact-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--accent);
          border-radius: 50%;
          filter: blur(1px);
          opacity: 0.6;
          box-shadow: 0 0 12px var(--accent);
          animation: contactFloat 8s ease-in-out infinite;
        }
        
        .contact-particle:nth-child(1) {
          top: 15%;
          left: 15%;
          animation-delay: 0s;
          animation-duration: 8s;
        }
        
        .contact-particle:nth-child(2) {
          top: 70%;
          left: 85%;
          animation-delay: 2s;
          animation-duration: 10s;
        }
        
        .contact-particle:nth-child(3) {
          top: 40%;
          left: 10%;
          animation-delay: 4s;
          animation-duration: 12s;
        }
        
        .contact-particle:nth-child(4) {
          top: 80%;
          left: 70%;
          animation-delay: 6s;
          animation-duration: 9s;
        }
        
        @keyframes contactFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.6;
          }
          25% { 
            transform: translateY(-30px) translateX(15px) scale(1.3); 
            opacity: 1;
          }
          50% { 
            transform: translateY(-15px) translateX(-20px) scale(0.7); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-25px) translateX(10px) scale(1.1); 
            opacity: 0.8;
          }
        }
        
        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact {
            padding: 4rem 1rem;
          }
          
          .contact-form,
          .info-card {
            padding: 2rem;
          }
          
          .social-links {
            flex-direction: row;
          }
          
          .social-link {
            flex: 1;
            justify-content: center;
          }
          
          .social-link span {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;