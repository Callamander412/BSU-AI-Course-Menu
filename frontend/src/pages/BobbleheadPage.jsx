import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Box, Printer, Scan, Palette } from 'lucide-react';
import './ProjectPage.css';

const BobbleheadPage = () => {
  const navigate = useNavigate();

  const tutorials = [
    {
      icon: <Scan size={40} />,
      title: '3D Scanning & Modeling',
      image: 'https://images.unsplash.com/photo-1653590590390-771cf729ec44?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHwzRCUyMG1vZGVsaW5nJTIwYm9iYmxlaGVhZHxlbnwwfHx8fDE3NTk5NzYxNTV8MA&ixlib=rb-4.1.0&q=85',
      description: 'Begin your bobblehead journey by learning the fundamentals of 3D scanning and digital sculpting. Discover how AI-powered tools can help you capture accurate facial features and proportions. Master the art of creating detailed 3D models that capture personality and character. This comprehensive guide will walk you through the entire modeling process, from initial scans to refined digital sculptures ready for printing.'
    },
    {
      icon: <Printer size={40} />,
      title: '3D Printing Process',
      image: 'https://images.unsplash.com/photo-1741517540162-451e3f5d6318?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHwzRCUyMHByaW50aW5nJTIwdHV0b3JpYWx8ZW58MHx8fHwxNzU5OTc2MTYyfDA&ixlib=rb-4.1.0&q=85',
      description: 'Dive deep into the world of 3D printing technology and learn how to bring your digital bobblehead designs to life. Understand the different printing materials, layer heights, and settings that produce the best results. Explore troubleshooting techniques for common printing issues and optimize your prints for durability and detail. This section covers everything from printer setup to post-processing techniques that will make your bobbleheads truly stand out.'
    },
    {
      icon: <Palette size={40} />,
      title: 'Customization & Finishing',
      image: 'https://images.pexels.com/photos/6713747/pexels-photo-6713747.jpeg',
      description: 'Transform your 3D printed bobblehead into a work of art with advanced customization and finishing techniques. Learn professional painting methods, color matching strategies, and detail enhancement tricks that bring your creations to life. Discover how to add accessories, clothing details, and personal touches that make each bobblehead unique. This tutorial covers everything from primer application to final protective coating, ensuring your bobbleheads look professional and last for years.'
    },
    {
      icon: <Box size={40} />,
      title: 'Assembly & Quality Control',
      image: 'https://images.unsplash.com/photo-1548980113-1a12ccf166f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHwzRCUyMG1vZGVsaW5nJTIwYm9iYmxlaGVhZHxlbnwwfHx8fDE3NTk5NzYxNTV8MA&ixlib=rb-4.1.0&q=85',
      description: 'Master the final steps of bobblehead creation with our comprehensive assembly and quality control guide. Learn how to properly attach the bobbling mechanism, balance the head for optimal movement, and ensure structural integrity. Understand quality checkpoints throughout the production process and how to identify and fix potential issues before they become problems. This section includes pro tips for packaging, displaying, and maintaining your finished bobbleheads to keep them looking their best.'
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
            <div className="project-badge">AI-Powered 3D Modeling</div>
            <h1 className="project-title">3D Bobblehead Creation</h1>
            <p className="project-description">
              Learn to create custom 3D bobbleheads using cutting-edge AI technology,
              3D scanning, and printing techniques. Transform digital models into physical collectibles.
            </p>
          </div>
          <div className="project-hero-image">
            <img
              src="https://customer-assets.emergentagent.com/job_5c98d90a-cfee-4a8e-a956-e1801db1cef4/artifacts/4j6rlzg2_image.png"
              alt="3D Bobblehead"
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

export default BobbleheadPage;
