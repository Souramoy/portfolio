import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from '@phosphor-icons/react';

const Projects = () => {
  const demoProjects = [
    {
       id: 1,
      title: "lodgedigital_demo_2",
      img: "https://private-user-images.githubusercontent.com/119148601/480127761-b24d66ca-f5f9-4977-a4f9-0e16c2138bd3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU3MTE5NzcsIm5iZiI6MTc1NTcxMTY3NywicGF0aCI6Ii8xMTkxNDg2MDEvNDgwMTI3NzYxLWIyNGQ2NmNhLWY1ZjktNDk3Ny1hNGY5LTBlMTZjMjEzOGJkMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgyMFQxNzQxMTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMDI4NTQ1MTM3M2E4ODlhMWM1OGExYWRmYzdiMmY3NTgzMGRjNzhiYTgzZTIwMjJkZGFmOGI5MzRhYjY5ZjUyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.SW0m5a5Q49JpfSL0egbBvgPykl1Dk35WCWMwt3I4Khw",
      stack: ["React", "ESLint 9.9.1", "SEO"],
      demo: "https://lodgedigital-demo-2.vercel.app/"
    },
    {
      id: 2,
      title: "lodgedigital_demo_1",
      img: "https://raw.githubusercontent.com/Souramoy/lodgedigital_demo_1/refs/heads/main/assets/banner.png",
      desc: "Modern React website template for hospitality businesses - hotels, resorts, lodges",
      stack: ["React", "Vite", "TypeScript"],
      demo: "https://lodgedigital-demo-1.vercel.app/"
    },
    {
      id: 3,
      title: "Restaurant_BellaVista",
      img: "https://github.com/Souramoy/Restaurant_BellaVista/raw/main/assets/banner.png",
      desc: "Demo restaurant website with 3D-embedded hero composition and interactive elements.",
      stack: ["React", "Vite", "Three.js"],
      demo: "https://restaurant-bella-vista.vercel.app/"
    },
    {
      id: 4,
      title: "Grand Hotel",
      img: "https://private-user-images.githubusercontent.com/119148601/480131269-8263a754-9852-4410-bf5d-e1ebdc3cd935.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU3MTIwODYsIm5iZiI6MTc1NTcxMTc4NiwicGF0aCI6Ii8xMTkxNDg2MDEvNDgwMTMxMjY5LTgyNjNhNzU0LTk4NTItNDQxMC1iZjVkLWUxZWJkYzNjZDkzNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgyMFQxNzQzMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wOTg3MGE1NTNhMTMwOTg0ZDMzNjQzYzNjNTU4YjdiMTYyNWNmZTQwZDU1YTM0ODBjNGYwYmExZWJjNGZkMmEwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.HdvDnek8Xx_uVoTbPJxlre11MaWQHY0Vk1tKTIH7ezs",
      desc: "A modern, responsive hotel website built with React, TypeScript, Tailwind CSS, and Vite. The website showcases the hotel's rooms, amenities, restaurant menu, gallery, and provides a contact form for inquiries",
      stack: ["React", "Node","ESLint 9.9.1", "SEO"],
      demo: "https://github.com/Souramoy/hotel_Grand_hotel.git"
    },
    {
      id: 5,
      title: "Your Song",
      img: "https://private-user-images.githubusercontent.com/119148601/480122953-821f3ba9-1009-4b14-84c0-f9eec67d5226.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU3MTIxNzgsIm5iZiI6MTc1NTcxMTg3OCwicGF0aCI6Ii8xMTkxNDg2MDEvNDgwMTIyOTUzLTgyMWYzYmE5LTEwMDktNGIxNC04NGMwLWY5ZWVjNjdkNTIyNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgyMFQxNzQ0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNDAyMmY4NGM0YmVmY2RlODJmNGVkY2VmNjVlMGZiMjRlYzlhODljYTkyM2ZmMmJlNTZlOTlmMGYzYzY5MmM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.gfEHCNFpfFYQ68McBJLyouhkdHN0Q4jnTNxKwDWg9iY",
      desc: "Song recommendation system with amazing UI and multi-language support, powered by Gemini 2.5 Pro.",
      stack: ["Html", "CSS","Gemini","Youtube"],
      demo: "https://junior-delta.vercel.app/"
    },
    {
      id: 6,
      title: "AI Career Coach",
      img: "https://github.com/Souramoy/app-teacher/blob/main/public/banner.jpg?raw=true",
      desc: "An advanced AI-powered career development platform built with Next.js that helps professionals excel in their career journey through intelligent tools and personalized guidance.",
      stack: ["React + Next", "Prisma ORM", "Clerk"],
      demo: "https://github.com/Souramoy/app-teacher.git"
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects',
        start: 'top 80%',
        end: 'bottom 20%',
        scroller: '.scroll-container'
      }
    });

    tl.fromTo('.projects-title', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .fromTo('.project-card', {
      opacity: 0,
      scale: 0.9,
      y: 40
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    }, '-=0.5');

  }, []);

  return (
    <section id="projects" className="projects" data-scroll-section>
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {demoProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image">
                <img src={project.img} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.demo} className="project-link">
                    <ArrowUpRight size={24} weight="light" />
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href={project.demo} className="btn-primary project-cta">
                  View Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects {
          padding: 8rem 2rem;
          position: relative;
        }
        
        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .projects-title {
          text-align: center;
          margin-bottom: 4rem;
          color: var(--text-strong);
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .project-card {
          padding: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px var(--primary);
        }
        
        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
          filter: grayscale(30%) contrast(110%);
        }
        
        .project-card:hover .project-image img {
          transform: scale(1.05);
          filter: grayscale(0%) contrast(115%);
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .project-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .project-link:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px var(--primary);
        }
        
        .project-content {
          padding: 2rem;
        }
        
        .project-content h3 {
          margin-bottom: 1rem;
          color: var(--text-strong);
          font-size: 1.3rem;
        }
        
        .project-content p {
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        
        .tech-badge {
          padding: 0.3rem 0.8rem;
          background: var(--glass);
          border: 1px solid var(--stroke);
          border-radius: 20px;
          font-size: 0.8rem;
          color: var(--text-dim);
          font-weight: 500;
        }
        
        .project-cta {
          width: 100%;
          justify-content: center;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .projects {
            padding: 4rem 1rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .project-card {
            min-width: unset;
          }
        }
        
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .project-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
