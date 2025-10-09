import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import './HomePage.css';

const projects = [
  {
    id: 1,
    title: '3D Bobblehead',
    subtitle: 'AI-Powered 3D Modeling',
    description: 'Create custom 3D bobbleheads using AI and 3D printing technology',
    hoverDescription: 'Learn to scan, model, and 3D print your own custom bobbleheads with step-by-step tutorials',
    image: 'https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/c0icttwd_ChatGPT%20Image%20Oct%208%2C%202025%2C%2009_36_16%20PM.png',
    route: '/bobblehead',
    gradient: 'from-emerald-600 to-teal-600'
  },
  {
    id: 2,
    title: 'Music Generation',
    subtitle: 'AI Music with Suno',
    description: 'Generate original music tracks using Suno AI technology',
    hoverDescription: 'Compose professional music across any genre using AI - from prompt to finished track',
    image: 'https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/56mj4hgz_ChatGPT%20Image%20Oct%208%2C%202025%2C%2009_53_48%20PM.png',
    route: '/music-generation',
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    id: 3,
    title: 'Video Generation',
    subtitle: 'AI Video Creation',
    description: 'Create stunning videos using cutting-edge AI video generation tools',
    hoverDescription: 'Master AI video generation, professional editing, and cinematic production techniques',
    image: 'https://customer-assets.emergentagent.com/job_5c98d90a-cfee-4a8e-a956-e1801db1cef4/artifacts/xnxvzpde_image.png',
    route: '/video-generation',
    gradient: 'from-teal-600 to-cyan-600'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    subtitle: 'Build with Emergent',
    description: 'Create professional portfolio websites using Emergent platform',
    hoverDescription: 'Build and deploy your own portfolio website using AI-powered development tools',
    image: 'https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/0x7wxxcn_ChatGPT%20Image%20Oct%208%2C%202025%2C%2009_37_34%20PM.png',
    route: '/portfolio',
    gradient: 'from-emerald-600 to-green-600'
  },
  {
    id: 5,
    title: 'Krita LORA Training',
    subtitle: 'AI Art Models',
    description: 'Train custom LORA models on your artwork using Krita',
    hoverDescription: 'Train AI models that understand your unique art style and create personalized AI tools',
    image: 'https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/ewryhhqi_ChatGPT%20Image%20Oct%208%2C%202025%2C%2010_13_22%20PM.png',
    route: '/krita-lora',
    gradient: 'from-green-600 to-teal-600'
  }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNavigate = () => {
    navigate(projects[currentIndex].route);
  };

  const getCardClass = (index) => {
    if (index === currentIndex) return 'carousel-card active';
    if (index === (currentIndex - 1 + projects.length) % projects.length) return 'carousel-card left';
    if (index === (currentIndex + 1) % projects.length) return 'carousel-card right';
    return 'carousel-card hidden';
  };

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <Sparkles className="logo-icon" size={32} />
            <h1 className="logo-text">BSU AI Projects</h1>
          </div>
          <div className="university-name">Bemidji State University</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">
            Explore AI
            <span className="gradient-text"> Creative Projects</span>
          </h2>
          <p className="hero-subtitle">
            Choose your adventure in AI-powered creativity and innovation
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="carousel-container">
          <button className="carousel-nav left" onClick={handlePrevious} aria-label="Previous project">
            <ChevronLeft size={32} />
          </button>

          <div className="carousel-track">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={getCardClass(index)}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-image-wrapper">
                  <img src={project.image} alt={project.title} className="card-image" />
                  <div className={`card-gradient bg-gradient-to-t ${project.gradient}`}></div>
                </div>
                <div className="card-content">
                  <div className="card-subtitle">{project.subtitle}</div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-nav right" onClick={handleNext} aria-label="Next project">
            <ChevronRight size={32} />
          </button>
        </div>

        <button className="explore-button" onClick={handleNavigate}>
          Explore Project
          <span className="arrow">→</span>
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Bemidji State University • AI Course Projects</p>
      </footer>
    </div>
  );
};

export default HomePage;
