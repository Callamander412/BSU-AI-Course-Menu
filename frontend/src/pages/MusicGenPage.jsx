import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Music, Sliders, Headphones, Waveform } from 'lucide-react';
import './ProjectPage.css';

const MusicGenPage = () => {
  const navigate = useNavigate();

  const tutorials = [
    {
      icon: <Music size={40} />,
      title: 'Getting Started with Suno AI',
      image: 'https://images.unsplash.com/photo-1595513279524-fa90ad188c98?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxBSSUyMG11c2ljJTIwc3R1ZGlvfGVufDB8fHx8MTc1OTk3NjE5Mnww&ixlib=rb-4.1.0&q=85',
      description: 'Embark on your AI music generation journey with Suno, the cutting-edge platform that transforms text prompts into professional-quality music. Learn how to craft effective prompts that capture the mood, genre, and style you envision. Understand the fundamentals of AI music generation and how machine learning models interpret your creative directions. This comprehensive introduction will give you the foundation needed to create everything from ambient soundscapes to energetic dance tracks.'
    },
    {
      icon: <Sliders size={40} />,
      title: 'Advanced Production Techniques',
      image: 'https://images.unsplash.com/photo-1708791783497-ad3ae07f9e69?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxBSSUyMG11c2ljJTIwc3R1ZGlvfGVufDB8fHx8MTc1OTk3NjE5Mnww&ixlib=rb-4.1.0&q=85',
      description: 'Take your AI-generated music to the next level with advanced production techniques and professional editing workflows. Explore how to refine and polish your AI-created tracks using industry-standard audio software. Learn mixing, mastering, and arrangement strategies that transform raw AI outputs into radio-ready productions. Discover how to layer multiple AI-generated elements, add human touches, and create cohesive musical compositions that rival traditionally produced music.'
    },
    {
      icon: <Waveform size={40} />,
      title: 'Audio Editing & Mixing',
      image: 'https://images.unsplash.com/photo-1509310202330-aec5af561c6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxtdXNpYyUyMHByb2R1Y3Rpb258ZW58MHx8fHwxNzU5ODk2NTA0fDA&ixlib=rb-4.1.0&q=85',
      description: 'Master the technical aspects of audio editing and mixing to bring professional quality to your AI-generated music. Understand frequency ranges, compression, equalization, and spatial effects that make tracks sound polished and dynamic. Learn how to balance multiple audio elements, create depth in your mixes, and achieve the perfect sound for different platforms and playback systems. This tutorial covers both the artistic and technical sides of modern music production.'
    },
    {
      icon: <Headphones size={40} />,
      title: 'Genre Exploration & Style Development',
      image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxtdXNpYyUyMHByb2R1Y3Rpb258ZW58MHx8fHwxNzU5ODk2NTA0fDA&ixlib=rb-4.1.0&q=85',
      description: 'Explore the vast landscape of musical genres and develop your unique sonic signature with AI-assisted composition. Learn how to generate music across multiple styles from electronic and hip-hop to classical and jazz. Understand the characteristics that define each genre and how to communicate them effectively to AI music generators. Discover techniques for blending genres, creating hybrid styles, and developing a distinctive sound that sets your productions apart from others.'
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
            <div className="project-badge">AI Music with Suno</div>
            <h1 className="project-title">Music Generation</h1>
            <p className="project-description">
              Harness the power of Suno AI to create original music tracks across any genre.
              From composition to production, learn every aspect of AI-assisted music creation.
            </p>
          </div>
          <div className="project-hero-image">
            <img
              src="https://customer-assets.emergentagent.com/job_5c98d90a-cfee-4a8e-a956-e1801db1cef4/artifacts/jme4o13q_image.png"
              alt="Music Generation"
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

export default MusicGenPage;
