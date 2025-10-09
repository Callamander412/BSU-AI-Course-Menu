import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Brush, Layers, Brain, Image } from 'lucide-react';
import './ProjectPage.css';

const KritaPage = () => {
  const navigate = useNavigate();

  const tutorials = [
    {
      icon: <Brush size={40} />,
      title: 'Digital Art Fundamentals in Krita',
      image: 'https://images.unsplash.com/photo-1744686909443-eb72a54de998',
      description: 'Discover the powerful world of Krita, a professional open-source digital painting application used by artists worldwide. Learn the essential tools, brushes, and features that make Krita a go-to choice for digital artists. Explore layer management, blend modes, and advanced painting techniques that bring your artistic visions to life. This foundational tutorial will familiarize you with Krita\'s interface, customization options, and workflow optimizations that professional digital artists use to create stunning artwork efficiently.'
    },
    {
      icon: <Layers size={40} />,
      title: 'Creating Training Data',
      image: 'https://images.unsplash.com/photo-1515222410484-613a51c43721',
      description: 'Learn the critical process of preparing high-quality training data for your custom LORA models. Understand how to create, organize, and annotate your artwork collection for optimal AI training results. Discover best practices for dataset diversity, consistency, and technical specifications that lead to successful model training. This tutorial covers everything from initial artwork selection to proper file formatting, tagging strategies, and quality control measures that ensure your training data produces accurate and useful AI models.'
    },
    {
      icon: <Brain size={40} />,
      title: 'LORA Model Training',
      image: 'https://images.unsplash.com/photo-1706777387154-ab5bf204a5bf',
      description: 'Dive into the fascinating world of LORA (Low-Rank Adaptation) model training and learn how to create AI models based on your unique artistic style. Understand the technical concepts behind fine-tuning AI image generation models with your own artwork. Explore training parameters, iteration counts, learning rates, and optimization techniques that produce models capable of generating art in your signature style. This comprehensive guide demystifies AI training and empowers you to create personalized AI tools that augment your creative capabilities.'
    },
    {
      icon: <Image size={40} />,
      title: 'Using Your Trained Models',
      image: 'https://images.unsplash.com/photo-1706777373963-63bd4befea4e',
      description: 'Master the art of leveraging your custom-trained LORA models to enhance your creative workflow and explore new artistic possibilities. Learn how to integrate your models with popular AI image generation platforms, control their influence through prompting techniques, and combine them with other models for unique results. Discover practical applications for your trained models in concept art, illustration, and design work. This final tutorial teaches you how to refine your models through iterative training, troubleshoot common issues, and continuously improve their performance as your artistic style evolves.'
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
            <div className="project-badge">AI Art Models</div>
            <h1 className="project-title">Krita LORA Training</h1>
            <p className="project-description">
              Train custom LORA models on your own artwork using Krita. Learn to create
              AI models that understand and replicate your unique artistic style.
            </p>
          </div>
          <div className="project-hero-image">
            <img
              src="https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/ouhr2l1g_image.png"
              alt="Krita LORA Training"
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

export default KritaPage;
