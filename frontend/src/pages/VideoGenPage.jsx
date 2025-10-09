import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Video, Film, Clapperboard, Sparkles } from 'lucide-react';
import './ProjectPage.css';

const VideoGenPage = () => {
  const navigate = useNavigate();

  const tutorials = [
    {
      icon: <Video size={40} />,
      title: 'AI Video Generation Basics',
      image: 'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmd8ZW58MHx8fHwxNzU5OTE1NDc3fDA&ixlib=rb-4.1.0&q=85',
      description: 'Step into the revolutionary world of AI-powered video generation and learn how artificial intelligence is transforming content creation. Discover the latest tools and platforms that enable you to create stunning video content from simple text prompts or image inputs. Understand the fundamentals of AI video models, their capabilities, and limitations. This foundational tutorial will guide you through your first AI-generated videos and help you understand the technology that makes it all possible.'
    },
    {
      icon: <Film size={40} />,
      title: 'Professional Video Editing',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHx2aWRlbyUyMGVkaXRpbmd8ZW58MHx8fHwxNzU5OTE1NDc3fDA&ixlib=rb-4.1.0&q=85',
      description: 'Master professional video editing techniques that elevate AI-generated content to broadcast quality. Learn industry-standard workflows using powerful editing software to cut, transition, and sequence your video clips. Explore color grading, audio synchronization, and visual effects that add polish and professionalism to your projects. This comprehensive guide covers everything from basic timeline editing to advanced post-production techniques that make your videos stand out in a crowded digital landscape.'
    },
    {
      icon: <Clapperboard size={40} />,
      title: 'Production & Cinematography',
      image: 'https://images.unsplash.com/photo-1576987212553-c43b8e44bb1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxBSSUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwwfHx8fDE3NTk5NzYyMjd8MA&ixlib=rb-4.1.0&q=85',
      description: 'Dive deep into the art and science of video production and cinematography principles that enhance AI-generated content. Learn about lighting, composition, camera angles, and movement that create cinematic experiences. Understand how to blend AI-generated footage with traditional filming techniques for hybrid productions. Explore storytelling through visual language and discover how to direct AI tools to achieve specific aesthetic goals. This tutorial bridges the gap between traditional filmmaking and AI-assisted content creation.'
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Creative Effects & Publishing',
      image: 'https://images.unsplash.com/flagged/photo-1575290319880-014c6eba06b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxBSSUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwwfHx8fDE3NTk5NzYyMjd8MA&ixlib=rb-4.1.0&q=85',
      description: 'Transform your AI-generated videos into captivating content with creative effects, animations, and motion graphics. Learn how to add titles, transitions, and special effects that enhance storytelling and viewer engagement. Understand the best practices for exporting, formatting, and publishing your videos across different platforms. Explore optimization techniques for social media, streaming services, and traditional broadcast. This final tutorial covers everything you need to take your videos from concept to published content that reaches and resonates with your audience.'
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
            <div className="project-badge">AI Video Creation</div>
            <h1 className="project-title">Video Generation</h1>
            <p className="project-description">
              Create stunning videos using cutting-edge AI technology. Learn professional
              techniques for generating, editing, and producing high-quality video content.
            </p>
          </div>
          <div className="project-hero-image">
            <img
              src="https://customer-assets.emergentagent.com/job_5c98d90a-cfee-4a8e-a956-e1801db1cef4/artifacts/xnxvzpde_image.png"
              alt="Video Generation"
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

export default VideoGenPage;
