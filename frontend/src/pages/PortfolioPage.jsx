import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Layout, Code, Palette, Globe } from 'lucide-react';
import './ProjectPage.css';

const PortfolioPage = () => {
  const navigate = useNavigate();

  const tutorials = [
    {
      icon: <Layout size={40} />,
      title: 'Website Planning & Design',
      image: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTk5NzYyNjR8MA&ixlib=rb-4.1.0&q=85',
      description: 'Begin your portfolio website journey with strategic planning and thoughtful design principles that showcase your work effectively. Learn how to organize your content, create compelling layouts, and design user experiences that engage visitors. Explore modern web design trends, color theory, typography, and visual hierarchy that make portfolios memorable. This comprehensive guide covers everything from wireframing and mockups to creating a cohesive visual identity that represents your personal brand and creative vision.'
    },
    {
      icon: <Code size={40} />,
      title: 'Building with Emergent Platform',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTk5NzYyNjR8MA&ixlib=rb-4.1.0&q=85',
      description: 'Dive into the powerful Emergent platform and discover how AI-assisted development can accelerate your portfolio creation. Learn to leverage Emergent\'s intelligent code generation, modern tech stack, and built-in best practices to build professional websites faster than ever. Understand the platform\'s architecture, deployment workflows, and optimization features that ensure your portfolio performs flawlessly. This tutorial demystifies modern web development and shows you how AI tools can enhance rather than replace your creative coding skills.'
    },
    {
      icon: <Palette size={40} />,
      title: 'Content Creation & Presentation',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDB8fHx8MTc1OTk3NjI2OXww&ixlib=rb-4.1.0&q=85',
      description: 'Master the art of presenting your student work and projects in the most compelling way possible. Learn how to write engaging project descriptions, select the perfect showcase images, and create case studies that tell the story behind your work. Discover photography and documentation techniques that capture your projects professionally. Explore strategies for organizing your portfolio by theme, skill, or chronology. This section teaches you how to balance aesthetics with functionality, ensuring visitors can easily navigate and appreciate your creative achievements.'
    },
    {
      icon: <Globe size={40} />,
      title: 'Deployment & Optimization',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTk5NzYyNjR8MA&ixlib=rb-4.1.0&q=85',
      description: 'Take your portfolio live and optimize it for maximum impact with professional deployment and performance tuning techniques. Learn about hosting options, custom domains, SSL certificates, and the technical details that make websites accessible worldwide. Understand SEO fundamentals, page speed optimization, mobile responsiveness, and accessibility standards that ensure your portfolio reaches the widest possible audience. This final tutorial covers maintenance, updates, analytics tracking, and strategies for continuously improving your online presence to attract opportunities and showcase your evolving skills.'
    }
  ];

  return (
    <div className="project-page">
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        Back to Projects
      </button>

      <header className="project-header">
        <div className="project-hero">
          <div className="project-hero-content">
            <div className="project-badge">Build with Emergent</div>
            <h1 className="project-title">Portfolio Website Creation</h1>
            <p className="project-description">
              Create stunning portfolio websites to showcase your student work using the
              Emergent platform. Build professional sites with AI-assisted development.
            </p>
          </div>
          <div className="project-hero-image">
            <img
              src="https://customer-assets.emergentagent.com/job_5c98d90a-cfee-4a8e-a956-e1801db1cef4/artifacts/u0jaexon_image.png"
              alt="Portfolio Website"
            />
          </div>
        </div>
      </header>

      <section className="tutorials-section">
        <h2 className="section-title">Tutorial Steps</h2>
        <div className="tutorials-grid">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="tutorial-card">
              <div className="tutorial-image-wrapper">
                <img src={tutorial.image} alt={tutorial.title} className="tutorial-image" />
                <div className="tutorial-icon">{tutorial.icon}</div>
              </div>
              <div className="tutorial-content">
                <h3 className="tutorial-title">{tutorial.title}</h3>
                <p className="tutorial-description">{tutorial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="project-footer">
        <p>© 2025 Bemidji State University • AI Course Projects</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
