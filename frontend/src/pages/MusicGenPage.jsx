import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, AlertCircle, Play, Music2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Checkbox } from '../components/ui/checkbox';
import './MusicGenTutorial.css';

const MusicGenPage = () => {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('music-gen-progress');
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
    localStorage.setItem('music-gen-progress', JSON.stringify(newState));
  };

  const steps = [
    {
      id: 'step0',
      title: 'Plan Your Song Ideas (10–15 min)',
      content: (
        <>
          <ul>
            <li>Write original lyrics for 2–3 verses + choruses</li>
            <li>Decide three target styles (e.g., indie folk, 90s alt-rock, cinematic pop)</li>
            <li>Practice your melody at a steady tempo (use a metronome if helpful)</li>
          </ul>
          <div className="tip-box">
            <AlertCircle size={20} />
            <p><strong>Tip:</strong> Keep your melody simple and memorable. Complex melodies can be harder for AI to follow accurately.</p>
          </div>
        </>
      )
    },
    {
      id: 'step1',
      title: 'Record Your Reference Vocal (Clean Capture)',
      content: (
        <>
          <p>Use your phone/DAW to record one clear take of your melody (no background music).</p>
          <ul>
            <li>Keep it within 6–60 seconds for Basic; up to 120s for Pro/Premier</li>
            <li>Save as WAV or high-quality M4A/MP3</li>
          </ul>
          <p className="resource-link">
            <ExternalLink size={16} />
            <a href="https://help.suno.com/en/articles/2477633" target="_blank" rel="noopener noreferrer">
              Upload Audio Guide (Official)
            </a>
          </p>
          <p className="resource-link">
            <ExternalLink size={16} />
            <a href="https://help.suno.com/en/articles/6141569" target="_blank" rel="noopener noreferrer">
              How to Use Audio Uploads
            </a>
          </p>
          <div className="settings-box">
            <h4>Tips for Cleaner Results:</h4>
            <ul>
              <li>Record in a quiet room</li>
              <li>Stay consistent in pitch and timing</li>
              <li>Count in softly so the AI catches your downbeat</li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 'step2',
      title: 'Upload to Suno',
      content: (
        <>
          <ol>
            <li>Go to <a href="https://suno.com/" target="_blank" rel="noopener noreferrer">Suno.com <ExternalLink size={14} className="inline-icon" /></a> and sign in</li>
            <li>Open Create (or Library → Upload Audio)</li>
            <li>Confirm the clip length (Basic: 6–60s; Pro/Premier: longer)</li>
            <li>Give the upload a clear title (e.g., "Chorus idea – 92 bpm – key of G")</li>
          </ol>
          <div className="tutorial-image-container">
            <img src="https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/cp2p3mut_image.png" alt="Suno upload interface" className="tutorial-image" />
          </div>
        </>
      )
    },
    {
      id: 'step3',
      title: 'Prompt Suno to Arrange Around Your Melody',
      content: (
        <>
          <p>In the prompt/description, specify genre, mood, instruments, tempo feel, and production vibe.</p>
          <div className="settings-box">
            <h4>Example Prompts (paste and customize):</h4>
            <ul>
              <li>"Warm indie-folk ballad, intimate acoustic guitar and soft brush drums, keep vocal melody as uploaded, 92 bpm feel, organic and dynamic, no heavy autotune."</li>
              <li>"Cinematic pop with airy pads and big chorus impact, maintain uploaded melody contour, modern mix, wide stereo, subtle reverb, 100 bpm."</li>
              <li>"90s alt-rock, crunchy guitars, live kit, present bass, keep uploaded melody phrasing, 120 bpm, raw and energetic."</li>
            </ul>
          </div>
          <div className="tutorial-image-container">
            <img src="https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/qfukl0ba_image.png" alt="Suno prompt interface" className="tutorial-image" />
          </div>
        </>
      )
    },
    {
      id: 'step4',
      title: 'Generate, Review, and Iterate',
      content: (
        <>
          <ol>
            <li>Click Create. Wait for the two-part generation (A/B) to finish</li>
            <li>If timing feels off, regenerate with a tempo hint ("exact 92 bpm feel") or re-record a steadier guide vocal</li>
            <li>If style clashes, adjust instrumentation terms (e.g., "no EDM synths," "add piano ostinato," "dry vocals")</li>
          </ol>
          <div className="tutorial-image-container">
            <img src="https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/rp7clxwk_image.png" alt="Suno generation results" className="tutorial-image" />
          </div>
        </>
      )
    },
    {
      id: 'step5',
      title: 'Extend to a Full Song (If Needed)',
      content: (
        <>
          <p>Use Extend to build verse/chorus structure until you reach your target length.</p>
          <p className="resource-link">
            <ExternalLink size={16} />
            <a href="https://help.suno.com/en/categories/550017" target="_blank" rel="noopener noreferrer">
              Making Music Category (Durations/Models)
            </a>
          </p>
        </>
      )
    },
    {
      id: 'step6',
      title: 'Download Audio (and Optional Stems)',
      content: (
        <>
          <p>For mixing or mastering later, download WAV (preferred over MP3).</p>
          <p>To isolate parts, use Suno's Stem Extraction:</p>
          <ol>
            <li>Select the song → More Actions (...) → Get Stems</li>
            <li>Choose Vocals/Instrumental or 12-track stems</li>
            <li>Download</li>
          </ol>
          <p className="resource-link">
            <ExternalLink size={16} />
            <a href="https://help.suno.com/en/articles/6141441" target="_blank" rel="noopener noreferrer">
              Stem Extraction Guide (Official)
            </a>
          </p>
        </>
      )
    },
    {
      id: 'step7',
      title: 'Repeat for 2 More Genres',
      content: (
        <>
          <p>Reuse your same uploaded vocal and prompt two different genre/production directions.</p>
          <p>You should end with 3 distinct full songs that all honor your melody/lyrics.</p>
          <div className="success-box">
            <AlertCircle size={20} />
            <p><strong>Goal:</strong> Three stylistically distinct productions from one original vocal recording!</p>
          </div>
        </>
      )
    }
  ];

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const totalSteps = steps.length;
  const progress = (completedCount / totalSteps) * 100;

  return (
    <div className="music-tutorial-page">
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        Back to Projects
      </button>

      <header className="tutorial-hero">
        <div className="hero-content">
          <h1 className="hero-title">🎵 Suno Song Project</h1>
          <p className="hero-subtitle">Write your own lyrics & melody → upload → generate three finished tracks</p>
          
          <div className="project-overview">
            <h2>🎯 Learning Goals</h2>
            <ul>
              <li>Capture a clean vocal idea (lyrics + melody you wrote)</li>
              <li>Use Upload Audio to guide generation</li>
              <li>Produce three finished songs in different styles</li>
              <li>Export high-quality audio; (optionally) extract stems for basic mixing</li>
            </ul>
          </div>

          {/* Audio Comparison Section */}
          <div className="audio-comparison-section">
            <h2>📻 Example: Your Input vs Suno Output</h2>
            <p className="comparison-description">Listen to how Suno transforms a simple vocal recording into a full production:</p>
            
            <div className="audio-players-grid">
              <div className="audio-player-card">
                <div className="audio-player-header">
                  <Music2 size={24} className="audio-icon" />
                  <h3>Your Vocal Input</h3>
                </div>
                <p className="audio-description">Raw vocal melody recording (no instruments)</p>
                <audio controls className="audio-player">
                  <source src="https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/zi3fhbb7_Copy%20of%20Big%20ol%20Deck.m4a" type="audio/mp4" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              <div className="audio-player-card highlight">
                <div className="audio-player-header">
                  <Play size={24} className="audio-icon" />
                  <h3>Suno's Output</h3>
                </div>
                <p className="audio-description">Full production with instruments, harmony, and arrangement</p>
                <audio controls className="audio-player">
                  <source src="https://customer-assets.emergentagent.com/job_bsu-ai-projects/artifacts/ey7l5gcp_Big%20Ol%27%20Deck%20%28GumryPucket%29.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
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
        <h2>🧰 Tools & Official Links</h2>
        <div className="tools-grid">
          <a href="https://suno.com/" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Suno (AI Music Web App)</span>
          </a>
          <a href="https://help.suno.com/en/articles/2410049" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Plans & Credits Guide</span>
          </a>
          <a href="https://help.suno.com/en/articles/2477633" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Upload Audio Guide</span>
          </a>
          <a href="https://help.suno.com/en/articles/6141569" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>How to Use Audio Uploads</span>
          </a>
          <a href="https://help.suno.com/en/articles/2416769" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Ownership Summary</span>
          </a>
          <a href="https://suno.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Terms of Service</span>
          </a>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="ethics-section">
        <h2>⚖️ Ethics & Use (Read First)</h2>
        
        <div className="ethics-card">
          <h3>Use Your Own Content</h3>
          <ul>
            <li>Use your own lyrics and your own vocal melody</li>
            <li>You're uploading recordings you created</li>
          </ul>
        </div>

        <div className="ethics-card">
          <h3>Licensing & Ownership</h3>
          <ul>
            <li><strong>Basic (free):</strong> 50 credits/day; Suno retains ownership; non-commercial use only (no selling/distributing on paid channels)</li>
            <li><strong>Pro/Premier:</strong> Songs created while subscribed are yours; commercial use allowed</li>
            <li>Details: <a href="https://help.suno.com/en/articles/2410049" target="_blank" rel="noopener noreferrer">Plans & Credits <ExternalLink size={14} className="inline-icon" /></a></li>
            <li>Ownership: <a href="https://help.suno.com/en/articles/2416769" target="_blank" rel="noopener noreferrer">Rights Summary <ExternalLink size={14} className="inline-icon" /></a></li>
            <li>Commercial vs Non-Commercial: <a href="https://help.suno.com/en/articles/2425345" target="_blank" rel="noopener noreferrer">Usage Guide <ExternalLink size={14} className="inline-icon" /></a></li>
          </ul>
        </div>

        <div className="ethics-card">
          <h3>Legal Landscape</h3>
          <ul>
            <li>Legal landscape is evolving - review recent developments</li>
            <li>Read: <a href="https://www.wired.com/story/ai-music-generators-suno-and-udio-sued-for-copyright-infringement" target="_blank" rel="noopener noreferrer">RIAA Lawsuits Against Suno/Udio (Wired) <ExternalLink size={14} className="inline-icon" /></a></li>
          </ul>
        </div>

        <div className="reflection-prompt">
          <h4>💡 Reflection Requirement:</h4>
          <p>Your reflection should mention one concrete ethical or legal consideration from the resources above.</p>
        </div>
      </section>

      {/* Step-by-Step Tutorial */}
      <section className="tutorial-steps">
        <h2>🔧 Step-by-Step Process</h2>
        
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
                    <span className="step-number">Step {index}</span>
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

      {/* Deliverables */}
      <section className="deliverables-section">
        <h2>📦 Deliverables</h2>
        <ul className="deliverables-list">
          <li>3 full songs generated via Suno from your own uploaded vocal (each in a different style/genre)</li>
          <li>A short process note (what you tried, prompts used, what changed)</li>
          <li>A reflection citing at least one official Suno help doc and one news/ethics article</li>
        </ul>
      </section>

      {/* Troubleshooting */}
      <section className="troubleshooting-section">
        <h2>💡 Tips & Troubleshooting</h2>
        <div className="troubleshooting-grid">
          <div className="trouble-card">
            <h4>Upload Length Errors</h4>
            <p><strong>Solution:</strong> Trim your clip to ≤60s on Basic (longer allowed on paid tiers)</p>
          </div>
          <div className="trouble-card">
            <h4>Melody Not Followed Closely</h4>
            <p><strong>Solution:</strong> Re-record with tighter rhythm and clear sustained notes; add prompt cues like "strictly follow uploaded melody phrasing"</p>
          </div>
          <div className="trouble-card">
            <h4>Vocals Too Wet/Autotuned</h4>
            <p><strong>Solution:</strong> Add "dry vocal," "minimal tuning," "natural vibrato," or "subtle reverb only" to your prompt</p>
          </div>
          <div className="trouble-card">
            <h4>Noisy Stems</h4>
            <p><strong>Solution:</strong> Suno's stems are handy but not perfect—download WAV and clean up in a DAW if needed</p>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="credits-section">
        <h2>🧾 Additional Resources</h2>
        <ul className="credits-list">
          <li><a href="https://help.suno.com/en/articles/6141441" target="_blank" rel="noopener noreferrer">Stem Extraction Guide <ExternalLink size={14} className="inline-icon" /></a></li>
          <li><a href="https://help.suno.com/en/articles/2418177" target="_blank" rel="noopener noreferrer">Credit Refresh Behavior <ExternalLink size={14} className="inline-icon" /></a></li>
          <li><a href="https://help.suno.com/en/categories/550145" target="_blank" rel="noopener noreferrer">Rights & Ownership Category <ExternalLink size={14} className="inline-icon" /></a></li>
          <li><a href="https://help.suno.com/en/articles/6882817" target="_blank" rel="noopener noreferrer">Add Vocals (Beta) Feature <ExternalLink size={14} className="inline-icon" /></a></li>
        </ul>
      </section>

      <footer className="tutorial-footer">
        <p>&copy; 2025 Bemidji State University • AI Course Projects</p>
      </footer>
    </div>
  );
};

export default MusicGenPage;
