import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, AlertCircle, ChevronLeft, ChevronRight, Video } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Checkbox } from '../components/ui/checkbox';
import './VideoGenTutorial.css';

const VideoGenPage = () => {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState({});
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const exampleVideos = [
    {
      url: 'https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/xljhpspk_20251018_2121_01k7x48nn3ftfsj8nq4gayq0a4.mp4',
      title: 'Example 1: AI Character Animation',
      description: 'Character animation using AI motion transfer'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/yxdajy53_20251018_2119_01k6m9k3gxe2d9175zekcd6cf6.mp4',
      title: 'Example 2: Scene Generation',
      description: 'AI-generated scene from text prompt'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/k5h9mled_20251018_2117_01k72228byfkpv848g0n2jtmgc.mp4',
      title: 'Example 3: Motion Transfer',
      description: 'Static image animated with motion reference'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/x1bj21v3_20251018_2117_01k7223eb9fkkr6wj8at49s6w7.mp4',
      title: 'Example 4: Hybrid Creation',
      description: 'Combination of AI assets and original footage'
    }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('video-gen-progress');
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
    localStorage.setItem('video-gen-progress', JSON.stringify(newState));
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? exampleVideos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev === exampleVideos.length - 1 ? 0 : prev + 1));
  };

  const steps = [
    {
      id: 'step1',
      title: 'Brainstorm Concept',
      content: (
        <>
          <p>What story or visual idea do you want? What format (vertical, 16:9, 10s, 30s)?</p>
          <ul>
            <li>Decide on your narrative or experimental concept</li>
            <li>Choose video format and duration</li>
            <li>Consider which AI tool fits your vision best</li>
          </ul>
          <div className="tip-box">
            <AlertCircle size={20} />
            <p><strong>Tip:</strong> Start simple! A clear 30-second concept is better than an ambitious unfinished project.</p>
          </div>
        </>
      )
    },
    {
      id: 'step2',
      title: 'Select Tool(s)',
      content: (
        <>
          <p>Choose the right AI video tool for your concept:</p>
          <ul>
            <li><strong>Wan 2.2 Animate:</strong> Upload static image + motion reference video to animate character or replace subject</li>
            <li><strong>Sora 2 (OpenAI):</strong> Generate clips from text prompts and images (free tier: up to ~15s clips)</li>
            <li><strong>Hybrid Approach:</strong> Combine AI-generated assets with your own footage</li>
          </ul>
          <p className="resource-link">
            <ExternalLink size={16} />
            <a href="https://higgsfield.ai/wan-animate-ai-video" target="_blank" rel="noopener noreferrer">
              Wan 2.2 Animate
            </a>
          </p>
          <p className="resource-link">
            <ExternalLink size={16} />
            <a href="https://openai.com/sora/" target="_blank" rel="noopener noreferrer">
              Sora 2 (OpenAI)
            </a>
          </p>
        </>
      )
    },
    {
      id: 'step3',
      title: 'Collect Assets',
      content: (
        <>
          <p>Gather everything you'll need for your video:</p>
          <ul>
            <li>Your images (photos, illustrations, screenshots)</li>
            <li>Reference videos (for motion transfer)</li>
            <li>Your own footage or voiceover (if applicable)</li>
            <li>Written prompts describing what you want to create</li>
          </ul>
          <div className="warning-box">
            <AlertCircle size={20} />
            <p><strong>⚠️ Important:</strong> Only use content you own or have rights to. For faces/voices, get written consent if publishing.</p>
          </div>
        </>
      )
    },
    {
      id: 'step4',
      title: 'Generate Your Video',
      content: (
        <>
          <ol>
            <li>Write clear, detailed prompts describing your desired outcome</li>
            <li>Upload your assets to the chosen platform</li>
            <li>Set parameters (duration, style, motion intensity, etc.)</li>
            <li>Generate initial version</li>
            <li>Iterate and refine based on results</li>
          </ol>
          <div className="settings-box">
            <h4>Pro Tips for Better Results:</h4>
            <ul>
              <li>Be specific about camera angles, lighting, and mood</li>
              <li>Start with shorter clips (10-15s) to save credits</li>
              <li>Generate multiple variations and pick the best</li>
              <li>Note what works for your reflection document</li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 'step5',
      title: 'Export & Polish',
      content: (
        <>
          <p>Download your final clip and add finishing touches:</p>
          <ul>
            <li>Export as MP4 (H.264 codec recommended)</li>
            <li>Optionally use free editor (DaVinci Resolve, CapCut) to add transitions or text</li>
            <li>Add simple credits or attribution if needed</li>
            <li>Ensure audio levels are consistent</li>
          </ul>
          <p className="note-text">Aim for 30-90 seconds total. If tool limits are shorter (10-15s), that's acceptable — focus on quality!</p>
        </>
      )
    },
    {
      id: 'step6',
      title: 'Write Reflection',
      content: (
        <>
          <p>Document your process and considerations:</p>
          <ul>
            <li><strong>Tools Used:</strong> Which AI platforms? Free tier or paid?</li>
            <li><strong>Prompts & Process:</strong> What worked? What didn't? What would you change?</li>
            <li><strong>Ethical Considerations:</strong> Likeness consent, content rights, AI transparency</li>
            <li><strong>Licensing:</strong> Confirm you used only free credits and own/permitted content</li>
          </ul>
          <div className="reflection-prompt">
            <h4>💡 Include in Reflection:</h4>
            <p>"I used [tool name] free tier. I am using my own face/voice (or have consent). No paid features used. Attribution: 'Partially AI-generated using [tool].'"</p>
          </div>
        </>
      )
    },
    {
      id: 'step7',
      title: 'Submit',
      content: (
        <>
          <p>Final submission checklist:</p>
          <ul>
            <li>✓ Video file (MP4 format, 30-90 seconds)</li>
            <li>✓ Reflection document (PDF or Google Doc)</li>
            <li>✓ Clear attribution if publishing publicly</li>
          </ul>
          <div className="success-box">
            <AlertCircle size={20} />
            <p><strong>Bonus Challenge:</strong> Deliver multiple clips in different formats (vertical/16:9, different styles) for +5% bonus!</p>
          </div>
        </>
      )
    }
  ];

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const totalSteps = steps.length;
  const progress = (completedCount / totalSteps) * 100;

  return (
    <div className="video-tutorial-page">
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        Back to Projects
      </button>

      <header className="tutorial-hero">
        <div className="hero-content">
          <h1 className="hero-title">🎬 AI Video Generation Project</h1>
          <p className="hero-subtitle">Create original short videos using AI-powered video generation tools</p>
          
          <div className="project-overview">
            <h2>Project Brief</h2>
            <p>Create an original short video (or series of clips) using free or freemium AI video tools. You might:</p>
            <ul>
              <li>Replace yourself or an actor using static image + motion transfer (e.g., Wan 2.2 Animate)</li>
              <li>Use simple prompt-based text-to-video generation (e.g., Sora 2)</li>
              <li>Combine AI assets with your own footage/voiceover to build a narrative</li>
            </ul>
            <p><strong>Deliverable:</strong> A video of ~30-90 seconds (or multiple shorter clips) plus a reflection sheet describing your process, tools, prompts, and ethical considerations.</p>
          </div>

          {/* Video Flipbook Section */}
          <div className="video-flipbook-section">
            <h2>📺 Example Videos</h2>
            <p className="flipbook-description">Flip through these AI-generated video examples to see what's possible:</p>
            
            <div className="flipbook-container">
              <button className="flipbook-nav left" onClick={handlePrevVideo} aria-label="Previous video">
                <ChevronLeft size={32} />
              </button>

              <div className="video-display">
                <div className="video-wrapper">
                  <video
                    key={currentVideoIndex}
                    controls
                    className="example-video"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={exampleVideos[currentVideoIndex].url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="video-info">
                  <h3>{exampleVideos[currentVideoIndex].title}</h3>
                  <p>{exampleVideos[currentVideoIndex].description}</p>
                  <div className="video-pagination">
                    {exampleVideos.map((_, index) => (
                      <span
                        key={index}
                        className={`pagination-dot ${index === currentVideoIndex ? 'active' : ''}`}
                        onClick={() => setCurrentVideoIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <button className="flipbook-nav right" onClick={handleNextVideo} aria-label="Next video">
                <ChevronRight size={32} />
              </button>
            </div>
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
        <h2>🧰 Free & Freemium AI Video Tools</h2>
        <div className="tools-table">
          <table>
            <thead>
              <tr>
                <th>Tool</th>
                <th>Description</th>
                <th>Free Use Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://openai.com/sora/" target="_blank" rel="noopener noreferrer">Sora 2 (OpenAI) <ExternalLink size={14} className="inline-icon" /></a></td>
                <td>Text or image → video. Generate realistic or stylized clips from prompts & images.</td>
                <td>Free users can generate short clips (up to ~15s in some regions as of Oct 2025)</td>
              </tr>
              <tr>
                <td><a href="https://higgsfield.ai/wan-animate-ai-video" target="_blank" rel="noopener noreferrer">Wan 2.2 Animate <ExternalLink size={14} className="inline-icon" /></a></td>
                <td>Upload static image + reference motion video → animate character or replace subject</td>
                <td>Free trials available. Character motion & replacement mode emphasized</td>
              </tr>
              <tr>
                <td>Open-source animation</td>
                <td>Traditional animation tools for simpler motion/2D work</td>
                <td>Good fallback if AI video generation is too resource-intensive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="ethics-section">
        <h2>⚠️ Safety & Ethical Considerations (Must Read)</h2>
        
        <div className="ethics-card">
          <h3>Training Data & Licensing</h3>
          <ul>
            <li>AI video output uses training data with unknown licensing</li>
            <li>Always treat as for learning and personal use unless explicitly permitted</li>
            <li>Read: <a href="https://www.axios.com/" target="_blank" rel="noopener noreferrer">Concerns about realistic AI fakes <ExternalLink size={14} className="inline-icon" /></a></li>
          </ul>
        </div>

        <div className="ethics-card">
          <h3>Consent & Likeness</h3>
          <ul>
            <li>When using your own face/voice or those of peers, obtain written consent for likeness/voice use if you plan to publish</li>
            <li>Avoid depicting real public figures without permission—may generate mis/disinformation</li>
          </ul>
        </div>

        <div className="ethics-card">
          <h3>Transparency & Attribution</h3>
          <ul>
            <li>Document your tool choices, prompt versions, and iterations</li>
            <li>If sharing publicly, include attribution like "Partially AI-generated using Wan 2.2 Animate (free trial)"</li>
            <li>Be transparent about AI assistance in your work</li>
          </ul>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="tutorial-steps">
        <h2>🎯 Suggested Workflow</h2>
        
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

      {/* Rubric Section */}
      <section className="rubric-section">
        <h2>📝 Assignment Rubric</h2>
        <div className="rubric-table">
          <table>
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Excellent (90-100%)</th>
                <th>Good (70-89%)</th>
                <th>Needs Improvement (&lt;70%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Originality & Concept</strong></td>
                <td>Clear, compelling idea; creative AI use; memorable output</td>
                <td>Good idea; solid AI use; less ambitious or slightly derivative</td>
                <td>Weak/unclear idea; minimal AI use</td>
              </tr>
              <tr>
                <td><strong>Execution / Technical Quality</strong></td>
                <td>Clean video, good sound, effective pacing; tool leveraged well</td>
                <td>Minor issues (sound/pacing); clear tool use but less polished</td>
                <td>Major flaws (bad sound, glitchy, unreadable)</td>
              </tr>
              <tr>
                <td><strong>Tool Use & Innovation</strong></td>
                <td>Meaningful AI use; explores parameters; maybe hybrid with own footage</td>
                <td>Appropriate tool use; less experimentation; standard workflow</td>
                <td>Minimal tool use; little experimentation</td>
              </tr>
              <tr>
                <td><strong>Reflection & Ethics</strong></td>
                <td>Thoughtful reflection: tools, prompts, changes, ethical/licensing discussion</td>
                <td>Decent reflection; lists steps but minimal ethical insight</td>
                <td>Missing/weak reflection; no ethical discussion</td>
              </tr>
              <tr>
                <td><strong>Free/Cost Awareness</strong></td>
                <td>Fully uses free tier; shows awareness of cost/licensing constraints</td>
                <td>Mostly free use; some ambiguity about cost/licensing</td>
                <td>Paid features without explanation; little awareness</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bonus-note">
          <p><strong>Bonus Challenge (+5%):</strong> Deliver multiple clips in different formats (vertical/16:9, different styles, narrative vs. experimental)</p>
        </div>
      </section>

      {/* Final Notes */}
      <section className="notes-section">
        <h2>📌 Final Notes</h2>
        <ul className="notes-list">
          <li><strong>Length:</strong> ~30-90 seconds ideal (10-15s acceptable if tool limits require it)</li>
          <li><strong>Format:</strong> Horizontal (16:9) preferred unless concept fits vertical (9:16) for social media</li>
          <li><strong>Output:</strong> Submit final MP4 + short reflection document</li>
          <li><strong>Tools:</strong> No payment needed—free tiers suffice; plan workflow around limits</li>
        </ul>
      </section>

      <footer className="tutorial-footer">
        <p>&copy; 2025 Bemidji State University • AI Course Projects</p>
      </footer>
    </div>
  );
};

export default VideoGenPage;