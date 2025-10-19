import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, CheckCircle2, Circle, ExternalLink, AlertCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Checkbox } from '../components/ui/checkbox';
import './BobbleheadTutorial.css';

const BobbleheadPage = () => {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState({});

  // Load completion state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('bobblehead-progress');
    if (saved) {
      setCompletedSteps(JSON.parse(saved));
    }
  }, []);

  // Save completion state to localStorage
  const toggleStep = (stepId) => {
    const newState = {
      ...completedSteps,
      [stepId]: !completedSteps[stepId]
    };
    setCompletedSteps(newState);
    localStorage.setItem('bobblehead-progress', JSON.stringify(newState));
  };

  const steps = [
    {
      id: 'step1',
      title: 'Create Your 2D Bobblehead Concept',
      content: (
        <>
          <p>Use Photoshop, Krita, or another design tool. Make a caricature or illustration of yourself.</p>
          <ul>
            <li>Exaggerate proportions (larger head, simplified body)</li>
            <li>Export your design as a PNG or JPG for reference</li>
          </ul>
          <div className="tutorial-image-container">
            <img src="https://doc-14-bc-docstext.googleusercontent.com/export/e6hpso97lrhpva19l3uocm525o/alpo9g8fj0uftt99upp6c45t14/1760837125000/111615661650392184309/*/images/39dc38858942e081a6af141ba995c64f39120c87622e93d7375ed95eae42078a.jpg" alt="2D Bobblehead concept example" className="tutorial-image" />
          </div>
          <div className="tip-box">
            <AlertCircle size={20} />
            <p><strong>Design Tip:</strong> Think cartoon proportions – big expressive head, small body!</p>
          </div>
        </>
      )
    },
    {
      id: 'step2',
      title: 'Generate a 3D Model in Meshy.ai',
      content: (
        <>
          <ol>
            <li>Go to <a href="https://www.meshy.ai/" target="_blank" rel="noopener noreferrer">Meshy.ai <ExternalLink size={14} className="inline-icon" /></a> and sign in (Google login works)</li>
            <li>Choose <strong>Image to 3D</strong> or <strong>Text to 3D</strong></li>
            <li>Upload your 2D concept or describe it in text (e.g., "cartoon bobblehead with a big smiling head and small plastic body")</li>
            <li>Wait for processing and preview results</li>
            <li>Use the "Variations" tool if available to refine</li>
          </ol>
          <div className="tip-box">
            <AlertCircle size={20} />
            <p><strong>Pro Tip:</strong> Be specific in your text prompts – mention style, colors, and character traits!</p>
          </div>
        </>
      )
    },
    {
      id: 'step3',
      title: 'Publish Directly to Sketchfab',
      content: (
        <>
          <p className="highlight">🟢 You can now publish your model straight from Meshy — no paid export required.</p>
          <ol>
            <li>When your Meshy model is complete, click <strong>Publish to Sketchfab</strong></li>
            <li>You may be prompted to link or create a Sketchfab account</li>
            <li>After publishing, open your model page on Sketchfab and toggle "Downloadable" in the settings</li>
            <li>Set the license to <strong>Creative Commons Attribution (CC BY)</strong> or <strong>All Rights Reserved</strong> if it's your original work</li>
          </ol>
          <p className="resource-link">
            <ExternalLink size={16} />
            <a href="https://help.sketchfab.com/hc/en-us/articles/202512873-Publishing-3D-Models" target="_blank" rel="noopener noreferrer">
              Sketchfab Publishing Guide
            </a>
          </p>
        </>
      )
    },
    {
      id: 'step4',
      title: 'Prepare for 3D Printing in Blender',
      content: (
        <>
          <ol>
            <li>Import your model into <a href="https://www.blender.org/download/" target="_blank" rel="noopener noreferrer">Blender <ExternalLink size={14} className="inline-icon" /></a> (File → Import → GLB/FBX)</li>
            <li>Clean up geometry (delete any excess ground planes or floating meshes)</li>
            <li>Separate the base so it can be hollowed out</li>
            <li>Use <strong>Modifiers → Boolean → Difference</strong> to carve a cavity for the voice box</li>
            <li>Measure the voice box from <a href="https://a.co/d/afwl1JZ" target="_blank" rel="noopener noreferrer">Amazon <ExternalLink size={14} className="inline-icon" /></a> (approx. 1.5" x 2.5" x 0.75")</li>
            <li>Create a removable bottom lid or magnetic closure</li>
            <li>Export your print-ready model as <strong>STL</strong></li>
          </ol>
          <div className="tip-box">
            <AlertCircle size={20} />
            <p><strong>Important:</strong> Leave enough wall thickness (at least 2mm) for structural integrity!</p>
          </div>
        </>
      )
    },
    {
      id: 'step5',
      title: 'Slice for Print in Bambu Studio',
      content: (
        <>
          <p>Download: <a href="https://bambulab.com/en/software/bambu-studio" target="_blank" rel="noopener noreferrer">Bambu Studio <ExternalLink size={14} className="inline-icon" /></a></p>
          <ol>
            <li>Import both body and base STLs</li>
            <li>Position flat faces down to minimize supports</li>
            <li>Enable <strong>Tree Supports</strong> for overhangs only</li>
            <li>Preview your layers to ensure the cavity is empty (no infill)</li>
            <li>Slice and export to G-code or send to printer</li>
          </ol>
          <div className="settings-box">
            <h4>Recommended Printing Settings:</h4>
            <ul>
              <li><strong>Layer Height:</strong> 0.20 mm</li>
              <li><strong>Wall Count:</strong> 3</li>
              <li><strong>Infill:</strong> 10–15%</li>
              <li><strong>Base:</strong> 0% infill if cavity modeled manually</li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: 'step6',
      title: 'Clone Your Voice with VoicV',
      content: (
        <>
          <ol>
            <li>Go to <a href="https://voicv.com/voice-cloning" target="_blank" rel="noopener noreferrer">VoicV Voice Cloning <ExternalLink size={14} className="inline-icon" /></a></li>
            <li>Record a clean 30–60 second voice sample</li>
            <li>Upload and wait for model training</li>
            <li>Once complete, use the Text-to-Speech feature to generate your bobblehead phrases (e.g., "Hey there! I'm mini-me!")</li>
            <li>Download as .MP3 or .WAV</li>
          </ol>
          <div className="warning-box">
            <AlertCircle size={20} />
            <p><strong>⚠️ Ethics Warning:</strong> Only use your own voice or voices recorded with explicit permission. Voice cloning without consent violates academic and ethical guidelines.</p>
          </div>
        </>
      )
    },
    {
      id: 'step7',
      title: 'Load the Voice onto the Box',
      content: (
        <>
          <p>Use the voice box: <a href="https://a.co/d/afwl1JZ" target="_blank" rel="noopener noreferrer">Voice Box Hardware <ExternalLink size={14} className="inline-icon" /></a></p>
          <ol>
            <li>Connect the device via USB</li>
            <li>Drag-and-drop your audio files into the "sound" directory</li>
            <li>You can wire a small pushbutton or motion sensor to trigger playback</li>
            <li>Test before sealing the base</li>
          </ol>
          <div className="tip-box">
            <AlertCircle size={20} />
            <p><strong>Tip:</strong> Test audio volume and clarity before final assembly!</p>
          </div>
        </>
      )
    },
    {
      id: 'step8',
      title: 'Assemble & Test',
      content: (
        <>
          <ol>
            <li>Insert electronics and secure the voice box</li>
            <li>Install your spring or connector between head and body</li>
            <li>Test bobble motion and audio playback</li>
            <li>Paint and finish the model if desired</li>
          </ol>
          <div className="success-box">
            <CheckCircle2 size={20} />
            <p><strong>Congratulations!</strong> You've created your own AI-powered talking bobblehead!</p>
          </div>
        </>
      )
    }
  ];

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const totalSteps = steps.length;
  const progress = (completedCount / totalSteps) * 100;

  return (
    <div className="bobblehead-tutorial-page">
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        Back to Projects
      </button>

      {/* Hero Section */}
      <header className="tutorial-hero">
        <div className="hero-content">
          <h1 className="hero-title">🎨 AI Bobblehead Project</h1>
          <p className="hero-subtitle">Meshy + Voice Cloning + 3D Printing</p>
          
          <div className="project-overview">
            <h2>🧠 Project Overview</h2>
            <p>You'll design and fabricate a talking bobblehead of yourself (or a character of your choice). This project blends AI-generated 3D modeling, voice cloning, and 3D printing.</p>
            
            <h3>Students will:</h3>
            <ul>
              <li>Create or illustrate a 2D bobblehead concept</li>
              <li>Generate a 3D model using Meshy.ai and export it via Sketchfab</li>
              <li>Clone their own voice with VoicV and load it into a voice box</li>
              <li>Modify the 3D model to include a cavity for electronics, then print it on the Bambu Lab printers</li>
            </ul>
          </div>

          {/* Progress Tracker */}
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

      {/* Tools and Resources */}
      <section className="tools-section">
        <h2>🧩 Tools and Links</h2>
        <div className="tools-grid">
          <a href="https://www.meshy.ai/" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Meshy.ai (Text/Image → 3D model)</span>
          </a>
          <a href="https://sketchfab.com/" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Sketchfab (3D model hosting/export)</span>
          </a>
          <a href="https://voicv.com/voice-cloning" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Voice Cloning (VoicV)</span>
          </a>
          <a href="https://a.co/d/afwl1JZ" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Voice Box Hardware</span>
          </a>
          <a href="https://www.blender.org/download/" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Blender (3D editing)</span>
          </a>
          <a href="https://bambulab.com/en/software/bambu-studio" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Bambu Studio (3D slicer)</span>
          </a>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="ethics-section">
        <h2>⚖️ Ethics & Research Before You Begin</h2>
        
        <div className="ethics-card">
          <h3>Voice Cloning</h3>
          <ul>
            <li>Only use your own voice or voices recorded with explicit permission</li>
            <li>Read about ethical implications: <a href="https://www.technologyreview.com/2024/03/14/1088578/deepfake-voice-threats-ethics/" target="_blank" rel="noopener noreferrer">"How Deepfake Voices Threaten Democracy" – MIT Technology Review <ExternalLink size={14} className="inline-icon" /></a></li>
          </ul>
        </div>

        <div className="ethics-card">
          <h3>AI Art & Data Sources</h3>
          <ul>
            <li>Learn what datasets AI tools use to train image/3D generation models</li>
            <li>Read: <a href="https://news.harvard.edu/gazette/story/2023/11/who-owns-ai-art/" target="_blank" rel="noopener noreferrer">"Who Owns AI Art?" – Harvard Gazette <ExternalLink size={14} className="inline-icon" /></a></li>
          </ul>
        </div>

        <div className="ethics-card">
          <h3>Licensing & Attribution</h3>
          <ul>
            <li>Meshy free-tier models often fall under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0 <ExternalLink size={14} className="inline-icon" /></a> (requires credit)</li>
            <li>Sketchfab explains licensing: <a href="https://help.sketchfab.com/hc/en-us/articles/202600873-Downloadable-Models" target="_blank" rel="noopener noreferrer">Downloadable Models Guide <ExternalLink size={14} className="inline-icon" /></a></li>
          </ul>
        </div>

        <div className="reflection-prompt">
          <h4>💡 Reflection Prompt:</h4>
          <p>Before starting, write 2–3 sentences on your thoughts about AI's role in creativity and authorship. Include one takeaway from the readings above.</p>
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

      {/* Troubleshooting */}
      <section className="troubleshooting-section">
        <h2>🧠 Troubleshooting</h2>
        <div className="troubleshooting-grid">
          <div className="trouble-card">
            <h4>Problem: Can't download model from Meshy</h4>
            <p><strong>Solution:</strong> Use "Publish to Sketchfab" method (free export workaround)</p>
          </div>
          <div className="trouble-card">
            <h4>Problem: Hollow base keeps filling with infill</h4>
            <p><strong>Solution:</strong> Ensure cavity is fully modeled as an empty space before exporting STL</p>
          </div>
          <div className="trouble-card">
            <h4>Problem: Voice playback too quiet</h4>
            <p><strong>Solution:</strong> Use a powered micro speaker or keep cavity vents open for sound</p>
          </div>
        </div>
      </section>

      {/* Extension Ideas */}
      <section className="extension-section">
        <h2>🧰 Extension Ideas</h2>
        <ul className="extension-list">
          <li>Paint and weather your figure using acrylics</li>
          <li>Create a team of bobbleheads for your class</li>
          <li>Design a pushbutton that triggers randomized voice lines</li>
          <li>Add a QR code on the base linking to your online portfolio</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="tutorial-footer">
        <p>&copy; 2025 Bemidji State University • AI Course Projects</p>
      </footer>
    </div>
  );
};

export default BobbleheadPage;