import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, AlertCircle, Globe, Sparkles } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Checkbox } from '../components/ui/checkbox';
import './PortfolioTutorial.css';

const PortfolioPage = () => {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-progress');
    if (saved) {
      setCompletedSteps(JSON.parse(saved));
    }
  }, []);

  const toggleStep = (stepId) => {
    const newState = {
      ...completedSteps,
      [stepId]: !completedSteps[stepId]
    };
    setCompletedSteps(newState);
    localStorage.setItem('portfolio-progress', JSON.stringify(newState));
  };

  const steps = [
    {
      id: 'step1',
      title: 'Plan Your Structure',
      content: (
        <>
          <p>Sketch out what sections you'll need before you start building.</p>
          
          <div className="structure-box">
            <h4>Typical Structure:</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="structure-box">
            <h4>Optional Pages:</h4>
            <ul>
              <li>Resume / CV</li>
              <li>Blog / News</li>
              <li>Gallery or Publications</li>
            </ul>
          </div>

          <div className="tip-box">
            <AlertCircle size={20} />
            <p><strong>Tip:</strong> Keep it simple! Start with 4 core pages. You can always add more later.</p>
          </div>
        </>
      )
    },
    {
      id: 'step2',
      title: 'Create Your Emergent Site',
      content: (
        <>
          <ol>
            <li>Go to <a href="https://app.emergent.sh/" target="_blank" rel="noopener noreferrer">Emergent <ExternalLink size={14} className="inline-icon" /></a></li>
            <li>Click <strong>Create New App → New HTML Project</strong></li>
            <li>Choose a template (Portfolio • Gallery • Minimal • Professional)</li>
            <li>Give your project a clear name (e.g., "Jane Doe Portfolio")</li>
            <li>Select <strong>Generate Site</strong></li>
            <li>When the template loads, use the built-in AI editor to describe layout changes</li>
          </ol>

          <div className="example-prompt-box">
            <Sparkles size={20} />
            <div>
              <h4>Example AI Prompts:</h4>
              <p>"Add a navigation bar with Home, About, Projects, and Contact."</p>
              <p>"Make the hero section with a large heading and centered text."</p>
            </div>
          </div>

          <p className="resource-link">
            <ExternalLink size={16} />
            <a href="https://docs.emergent.dev/" target="_blank" rel="noopener noreferrer">
              Emergent Documentation
            </a>
          </p>
        </>
      )
    },
    {
      id: 'step3',
      title: 'Customize Your Pages',
      content: (
        <>
          <div className="page-section">
            <h4>🏠 Home</h4>
            <ul>
              <li>Add a short headline ("Designer • Illustrator • Student")</li>
              <li>Include a clear photo</li>
              <li>Write a short welcome paragraph (2–3 sentences)</li>
            </ul>
          </div>

          <div className="page-section">
            <h4>👤 About</h4>
            <ul>
              <li>Add your professional bio or artist statement (100–150 words)</li>
              <li>Optionally include a downloadable resume (PDF link)</li>
            </ul>
          </div>

          <div className="page-section">
            <h4>💼 Projects / Work</h4>
            <ul>
              <li>Add one card or section per project</li>
              <li>Include title, short description, image, and optional external link</li>
              <li>Compress large images using <a href="https://tinypng.com/" target="_blank" rel="noopener noreferrer">TinyPNG <ExternalLink size={14} className="inline-icon" /></a> to improve loading speed</li>
            </ul>
          </div>

          <div className="page-section">
            <h4>✉️ Contact</h4>
            <ul>
              <li>Add your professional email (use an address you check often)</li>
              <li>Optionally include LinkedIn, Instagram, or portfolio-relevant social links</li>
            </ul>
          </div>

          <div className="tip-box">
            <AlertCircle size={20} />
            <p><strong>Pro Tip:</strong> Use high-quality images but compress them first. Large files slow down your site!</p>
          </div>
        </>
      )
    },
    {
      id: 'step4',
      title: 'Refine Style & Layout',
      content: (
        <>
          <p>Use the AI editor or edit HTML/CSS manually to polish your design.</p>

          <div className="resources-grid">
            <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer" className="resource-card">
              <span>📚</span>
              <span>CSS Basics</span>
            </a>
            <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer" className="resource-card">
              <span>🔤</span>
              <span>Google Fonts</span>
            </a>
            <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer" className="resource-card">
              <span>🎨</span>
              <span>Free Icons</span>
            </a>
          </div>

          <div className="example-prompt-box">
            <Sparkles size={20} />
            <div>
              <h4>AI Style Prompts:</h4>
              <p>"Make my background white with subtle shadow boxes and a light blue accent color."</p>
              <p>"Center the About page text and increase heading size."</p>
              <p>"Add hover effects to project cards with smooth transitions."</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'step5',
      title: 'Test & Publish',
      content: (
        <>
          <ol>
            <li>Preview your site on desktop and mobile</li>
            <li>Fix spacing or image sizing issues</li>
            <li>Validate your HTML: <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer">W3C Validator <ExternalLink size={14} className="inline-icon" /></a></li>
            <li>When satisfied, click <strong>Publish</strong> in Emergent</li>
            <li>Copy your public link (e.g., https://emergent.dev/app/janedoe-portfolio)</li>
            <li>Share this link in your professional documents, resume, or LinkedIn profile</li>
          </ol>

          <div className="success-box">
            <Globe size={20} />
            <div>
              <p><strong>Congratulations!</strong> Your portfolio is now live and accessible to employers, clients, and collaborators worldwide.</p>
            </div>
          </div>
        </>
      )
    }
  ];

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const totalSteps = steps.length;
  const progress = (completedCount / totalSteps) * 100;

  return (
    <div className="portfolio-tutorial-page">
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        Back to Projects
      </button>

      <header className="tutorial-hero">
        <div className="hero-content">
          <h1 className="hero-title">🌐 Create Your Professional Portfolio Website</h1>
          <p className="hero-subtitle">Build and publish with Emergent - AI-assisted web builder</p>
          
          <div className="project-overview">
            <h2>🎯 Project Overview</h2>
            <p>This project will help you build and publish a professional portfolio website using Emergent, an AI-assisted web builder that lets you generate, customize, and host HTML sites directly in your browser.</p>
            <p>Your portfolio can feature creative, academic, or professional work—photography, design, writing, research, internships, or any project that represents your personal or career growth.</p>
            <p className="goal-text">💡 <strong>The goal:</strong> Leave this class with a polished, public-facing website you can share with employers, clients, or graduate programs.</p>
          </div>

          <div className="progress-tracker">
            <div className="progress-header">
              <h3>Your Progress</h3>
              <span className="progress-text">{completedCount} of {totalSteps} steps completed</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Tools Section */}
      <section className="tools-section">
        <h2>🧰 Official Tools & Resources</h2>
        <div className="tools-table">
          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Tool</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Website builder</td>
                <td>Emergent</td>
                <td><a href="https://app.emergent.sh/" target="_blank" rel="noopener noreferrer">emergent.sh <ExternalLink size={14} className="inline-icon" /></a></td>
              </tr>
              <tr>
                <td>Image optimization</td>
                <td>TinyPNG</td>
                <td><a href="https://tinypng.com/" target="_blank" rel="noopener noreferrer">tinypng.com <ExternalLink size={14} className="inline-icon" /></a></td>
              </tr>
              <tr>
                <td>HTML/CSS reference</td>
                <td>W3Schools</td>
                <td><a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">w3schools.com <ExternalLink size={14} className="inline-icon" /></a></td>
              </tr>
              <tr>
                <td>HTML validator</td>
                <td>W3C Validator</td>
                <td><a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer">validator.w3.org <ExternalLink size={14} className="inline-icon" /></a></td>
              </tr>
              <tr>
                <td>Free icons</td>
                <td>Flaticon</td>
                <td><a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">flaticon.com <ExternalLink size={14} className="inline-icon" /></a></td>
              </tr>
              <tr>
                <td>Free web fonts</td>
                <td>Google Fonts</td>
                <td><a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">fonts.google.com <ExternalLink size={14} className="inline-icon" /></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="ethics-section">
        <h2>⚖️ Professional & Ethical Guidelines</h2>
        <p className="ethics-intro">Before publishing online, keep these principles in mind:</p>
        
        <div className="ethics-card">
          <h3>Content Ownership</h3>
          <ul>
            <li>Showcase your own work. Only display projects you created or collaborated on with permission</li>
            <li>Credit collaborators clearly and accurately</li>
            <li>Respect confidentiality. Avoid sharing materials from clients, employers, or institutions without written approval</li>
          </ul>
        </div>

        <div className="ethics-card">
          <h3>AI Transparency</h3>
          <ul>
            <li>Use transparent AI labeling if AI-assisted tools were used (e.g., "Concept art enhanced using AI illustration")</li>
            <li>Be honest about your role in collaborative or AI-assisted work</li>
          </ul>
        </div>

        <div className="ethics-card">
          <h3>Further Reading</h3>
          <ul>
            <li><a href="https://www.weforum.org/agenda/2024/03/responsible-ai-art-design-creativity/" target="_blank" rel="noopener noreferrer">"Responsible AI in Art and Design" – World Economic Forum (2024) <ExternalLink size={14} className="inline-icon" /></a></li>
            <li><a href="https://mediaengagement.org/research/the-ethics-of-ai-art/" target="_blank" rel="noopener noreferrer">"The Ethics of AI Art" – Center for Media Engagement <ExternalLink size={14} className="inline-icon" /></a></li>
            <li><a href="https://creativecommons.org/2024/02/13/ai-transparency-authorship/" target="_blank" rel="noopener noreferrer">"AI Transparency and Authorship" – Creative Commons (2024) <ExternalLink size={14} className="inline-icon" /></a></li>
          </ul>
        </div>
      </section>

      {/* Deliverables */}
      <section className="deliverables-section">
        <h2>🧭 Portfolio Goals & Deliverables</h2>
        <p>Each student will:</p>
        <ul className="deliverables-list">
          <li>Build and publish a personal portfolio website using Emergent's free tools</li>
          <li>Include at least four pages: Home/Landing, About, Projects/Work Samples, Contact</li>
          <li>Submit the public URL of the finished site</li>
          <li>Write a brief reflection (150–250 words) on what you learned about presenting yourself professionally online</li>
        </ul>
      </section>

      {/* Step-by-Step */}
      <section className="tutorial-steps">
        <h2>🔧 Step-by-Step Guide</h2>
        
        <Accordion type="single" collapsible className="steps-accordion">
          {steps.map((step, index) => (
            <AccordionItem key={step.id} value={step.id} className="step-item">
              <div className="step-header-wrapper">
                <Checkbox
                  id={step.id}
                  checked={completedSteps[step.id] || false}
                  onCheckedChange={() => toggleStep(step.id)}
                  className="step-checkbox"
                />
                <AccordionTrigger className="step-trigger">
                  <div className="step-title-wrapper">
                    <span className="step-number">Step {index + 1}</span>
                    <span className="step-title">{step.title}</span>
                  </div>
                </AccordionTrigger>
              </div>
              <AccordionContent className="step-content">
                {step.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Rubric */}
      <section className="rubric-section">
        <h2>🧾 Assessment Rubric</h2>
        <div className="rubric-table">
          <table>
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Excellent (A)</th>
                <th>Proficient (B)</th>
                <th>Developing (C or below)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Design & Aesthetics</strong></td>
                <td>Clean, modern design; strong visual hierarchy; cohesive fonts/colors</td>
                <td>Design mostly consistent; minor spacing or color issues</td>
                <td>Cluttered or inconsistent design; poor readability</td>
              </tr>
              <tr>
                <td><strong>Navigation & Structure</strong></td>
                <td>Logical structure; all links functional; clear user flow</td>
                <td>Mostly organized; small issues with link paths</td>
                <td>Confusing or incomplete navigation</td>
              </tr>
              <tr>
                <td><strong>Content Quality</strong></td>
                <td>Professional, clear writing; no major errors; appropriate images</td>
                <td>Minor grammar or formatting issues; text adequate</td>
                <td>Informal tone, grammatical errors, or missing content</td>
              </tr>
              <tr>
                <td><strong>Professional Branding</strong></td>
                <td>Shows clear identity and career focus; effective bio/statement</td>
                <td>Includes basic information but lacks distinct voice or focus</td>
                <td>Minimal or unclear professional presentation</td>
              </tr>
              <tr>
                <td><strong>Technical Functionality</strong></td>
                <td>Loads correctly on mobile & desktop; no broken embeds; validated HTML</td>
                <td>Minor layout issues; mostly responsive</td>
                <td>Major display errors or untested responsiveness</td>
              </tr>
              <tr>
                <td><strong>Ethical & Legal Awareness</strong></td>
                <td>Credits collaborators; uses original/licensed visuals; transparent about AI</td>
                <td>Mostly credited; some unclear ownership</td>
                <td>Uncredited borrowed materials; unclear rights</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Optional Enhancements */}
      <section className="enhancements-section">
        <h2>💡 Optional Enhancements</h2>
        <div className="enhancements-grid">
          <div className="enhancement-card">
            <h4>Interactive Gallery</h4>
            <p>Add light/dark mode toggle or interactive image gallery with lightbox effects</p>
          </div>
          <div className="enhancement-card">
            <h4>Demo Reel</h4>
            <p>Embed a short video showcasing your work (YouTube or Vimeo)</p>
          </div>
          <div className="enhancement-card">
            <h4>QR Code</h4>
            <p>Generate a QR code linking to your portfolio for resumes or business cards: <a href="https://www.qr-code-generator.com/" target="_blank" rel="noopener noreferrer">QR Generator <ExternalLink size={14} className="inline-icon" /></a></p>
          </div>
          <div className="enhancement-card">
            <h4>Blog/RSS Feed</h4>
            <p>Add a blog section using Emergent's HTML App features: <a href="https://docs.emergent.dev/apps/" target="_blank" rel="noopener noreferrer">Emergent Docs <ExternalLink size={14} className="inline-icon" /></a></p>
          </div>
        </div>
      </section>

      {/* Reflection Prompts */}
      <section className="reflection-section">
        <h2>🧘 Reflection Prompts</h2>
        <p>Choose one or two for your final paragraph (150–250 words):</p>
        <ul className="reflection-list">
          <li>What do you want a visitor to feel or learn about you when they view your portfolio?</li>
          <li>How did using an AI-assisted builder change your view of web design?</li>
          <li>What challenges did you face organizing and describing your professional work?</li>
          <li>What choices did you make to keep your portfolio both honest and creative?</li>
        </ul>
      </section>

      <footer className="tutorial-footer">
        <p>&copy; 2025 Bemidji State University • AI Course Projects</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;