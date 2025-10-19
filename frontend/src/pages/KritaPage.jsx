import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, AlertCircle, Monitor } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Checkbox } from '../components/ui/checkbox';
import './KritaTutorial.css';

const KritaPage = () => {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('krita-progress');
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
    localStorage.setItem('krita-progress', JSON.stringify(newState));
  };

  const steps = [
    {
      id: 'step0',
      title: 'Request Access to AI Computer (TAD Building)',
      content: (
        <>
          <div className="tad-access-box">
            <Monitor size={24} />
            <div>
              <p><strong>Before you begin:</strong> You'll need access to the high-performance AI computer in the TAD building for training your LORA model.</p>
              <p>Contact your instructor to request access. This computer has the necessary GPU resources for efficient model training.</p>
            </div>
          </div>
          <div className="tip-box">
            <AlertCircle size={20} />
            <p><strong>Why?</strong> LORA training requires significant GPU memory. The TAD AI computer ensures faster training times and better results.</p>
          </div>
        </>
      )
    },
    {
      id: 'step1',
      title: 'Prepare Your Dataset (Your Own Art)',
      content: (
        <>
          <p>Export 20–200 images (PNG/JPG) of your own artwork.</p>
          <ul>
            <li>Clean backgrounds if possible; crop to the subject</li>
            <li>Keep styles consistent across your dataset</li>
            <li>Place in a folder like: <code>datasets/yourname_style/</code></li>
          </ul>
          <div className="settings-box">
            <h4>Optional but Recommended: Auto-Caption</h4>
            <p>Use WD14 or Florence-based taggers to automatically caption your images. This makes training converge faster on concepts.</p>
            <ul>
              <li><a href="https://www.runcomfy.com/comfyui-nodes/ComfyUI-WD14-Tagger" target="_blank" rel="noopener noreferrer">WD14 in ComfyUI <ExternalLink size={14} className="inline-icon" /></a></li>
              <li><a href="https://github.com/LarryJane491/Image-Captioning-in-ComfyUI" target="_blank" rel="noopener noreferrer">Image-Captioning-in-ComfyUI <ExternalLink size={14} className="inline-icon" /></a></li>
            </ul>
          </div>
          <div className="warning-box">
            <AlertCircle size={20} />
            <p><strong>⚠️ Ethics:</strong> Train only on art you own or have written permission to use. No copyrighted or other artists' work!</p>
          </div>
        </>
      )
    },
    {
      id: 'step2',
      title: 'Train a LORA (ComfyUI or Kohya)',
      content: (
        <>
          <p>Choose your training method:</p>
          
          <div className="method-choice">
            <h4>Option A: ComfyUI Route (Recommended)</h4>
            <ol>
              <li>Ensure ComfyUI is installed: <a href="https://docs.comfy.org/" target="_blank" rel="noopener noreferrer">ComfyUI Docs <ExternalLink size={14} className="inline-icon" /></a></li>
              <li>Install the Lora-Training-in-Comfy node: <a href="https://www.runcomfy.com/comfyui-nodes/Lora-Training-in-Comfy" target="_blank" rel="noopener noreferrer">Installation Guide <ExternalLink size={14} className="inline-icon" /></a></li>
              <li>Load a training workflow and set:
                <ul>
                  <li>Base model (SD 1.5, SDXL, or FLUX)</li>
                  <li>Image folder and captions</li>
                  <li>Batch size, learning rate (1e-4 to 5e-5), epochs (3–10)</li>
                </ul>
              </li>
              <li>Run training → get .safetensors LORA in <code>models/loras/</code></li>
            </ol>
            <p className="resource-link">
              <ExternalLink size={16} />
              <a href="https://www.youtube.com/watch?v=DW9pyLH1u-8" target="_blank" rel="noopener noreferrer">
                Video: How to Train LORA in ComfyUI
              </a>
            </p>
          </div>

          <div className="method-choice">
            <h4>Option B: Kohya Route (GUI)</h4>
            <ol>
              <li>Follow a Kohya LORA guide:
                <ul>
                  <li><a href="https://learn.thinkdiffusion.com/flux-lora-training-with-kohya/" target="_blank" rel="noopener noreferrer">Flux LORA with Kohya (2025) <ExternalLink size={14} className="inline-icon" /></a></li>
                  <li><a href="https://www.stablediffusiontutorials.com/2024/03/lora-model-training-kohya.html" target="_blank" rel="noopener noreferrer">Kohya GUI Walkthrough <ExternalLink size={14} className="inline-icon" /></a></li>
                </ul>
              </li>
              <li>In LORA tab: set base checkpoint, dataset folder, resolution, learning rate, network dim/alpha</li>
              <li>Start training; export .safetensors</li>
            </ol>
          </div>
        </>
      )
    },
    {
      id: 'step3',
      title: 'Install Your LORA in Krita',
      content: (
        <>
          <ol>
            <li>Confirm which base your Krita AI Diffusion uses: <a href="https://docs.interstice.cloud/base-models/" target="_blank" rel="noopener noreferrer">Base Models Guide <ExternalLink size={14} className="inline-icon" /></a></li>
            <li>Put your .safetensors in the plugin's LORA models directory</li>
            <li>Restart Krita if your LORA list doesn't refresh</li>
          </ol>
          <p className="resource-link">
            <ExternalLink size={16} />
            <a href="https://www.youtube.com/watch?v=dkYUi5gZdA0" target="_blank" rel="noopener noreferrer">
              Video: Add Another Checkpoint/LORA Directory
            </a>
          </p>
          <div className="tip-box">
            <AlertCircle size={20} />
            <p><strong>Important:</strong> LORA must match your base model (SD 1.5 ≠ SDXL ≠ FLUX)</p>
          </div>
        </>
      )
    },
    {
      id: 'step4',
      title: 'Use LORA in Krita AI Diffusion + Live Painting',
      content: (
        <>
          <ol>
            <li>Open Krita → Tools → Krita AI Diffusion panel</li>
            <li>Choose a base model compatible with your LORA</li>
            <li>Load your LORA and set weight/strength (start ~0.6–0.8; adjust)</li>
            <li><strong>Live Painting:</strong> Enable Live mode so strokes update render continuously</li>
            <li>Compose on the left (canvas), watch generated view on right/second monitor</li>
          </ol>
          <p className="resource-link">
            <ExternalLink size={16} />
            <a href="https://github.com/Acly/krita-ai-diffusion" target="_blank" rel="noopener noreferrer">
              Plugin Features (Live Painting listed)
            </a>
          </p>
          <p className="resource-link">
            <ExternalLink size={16} />
            <a href="https://www.youtube.com/watch?v=nkVjXjzs4Z0" target="_blank" rel="noopener noreferrer">
              Video: Getting Started with Live Painting
            </a>
          </p>
          <div className="note-text">
            If Live mode requests LCM LORA for speed, install an LCM LORA that matches your base model.
          </div>
        </>
      )
    },
    {
      id: 'step5',
      title: 'Create & Export Final Images',
      content: (
        <>
          <p>Use your trained LORA to create at least 3 finished images:</p>
          <ul>
            <li>At least one created with Live Painting mode</li>
            <li>Demonstrate control with selections, inpainting, refinements</li>
            <li>Export as PNG/JPG at high resolution</li>
          </ul>
          <p>For targeted edits, use Selection Fill / inpainting: <a href="https://docs.interstice.cloud/selections/" target="_blank" rel="noopener noreferrer">Selections Guide <ExternalLink size={14} className="inline-icon" /></a></p>
          <div className="success-box">
            <AlertCircle size={20} />
            <p><strong>Tip:</strong> Save your workflow and settings! Document what works for your reflection.</p>
          </div>
        </>
      )
    }
  ];

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const totalSteps = steps.length;
  const progress = (completedCount / totalSteps) * 100;

  return (
    <div className="krita-tutorial-page">
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        Back to Projects
      </button>

      <header className="tutorial-hero">
        <div className="hero-content">
          <h1 className="hero-title">🎨 Train Your Own LORA → Live Drawing in Krita</h1>
          <p className="hero-subtitle">AI-powered live drawing with your personal art style</p>
          
          <div className="project-overview">
            <h2>What You'll Make</h2>
            <p>A small LORA trained on your own artwork (dataset of 20–200 images), then use it inside Krita AI Diffusion to live-draw while a second screen continuously renders with your LORA's style.</p>
          </div>

          {/* Example Images Section */}
          <div className="examples-section">
            <h2>🖼️ See the Transformation</h2>
            <p className="examples-description">Simple sketches become detailed artwork with AI assistance:</p>
            
            <div className="examples-grid">
              <div className="example-card">
                <img src="https://images.unsplash.com/photo-1593472807861-5bb884af28f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxkcmF3aW5nJTIwdHV0b3JpYWx8ZW58MHx8fHwxNzYwODQxNDUwfDA&ixlib=rb-4.1.0&q=85" alt="Simple sketch example" />
                <p className="example-label">Simple Sketch Input</p>
              </div>
              <div className="example-arrow">→</div>
              <div className="example-card">
                <img src="https://images.unsplash.com/photo-1605012555174-f01851e9410d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxkcmF3aW5nJTIwdHV0b3JpYWx8ZW58MHx8fHwxNzYwODQxNDUwfDA&ixlib=rb-4.1.0&q=85" alt="Detailed AI result" />
                <p className="example-label">AI-Enhanced Detail</p>
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

      {/* Official Tools Section */}
      <section className="tools-section">
        <h2>🧰 Official Tools & Documentation</h2>
        <div className="tools-grid">
          <a href="https://github.com/Acly/krita-ai-diffusion" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Krita AI Diffusion (Plugin)</span>
          </a>
          <a href="https://docs.interstice.cloud/" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Krita AI Handbook</span>
          </a>
          <a href="https://docs.comfy.org/" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>ComfyUI Documentation</span>
          </a>
          <a href="https://docs.comfy.org/tutorials/basic/lora" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>LORA Basics (Comfy)</span>
          </a>
          <a href="https://learn.thinkdiffusion.com/flux-lora-training-with-kohya/" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>Flux LORA with Kohya</span>
          </a>
          <a href="https://www.runcomfy.com/comfyui-nodes/ComfyUI-WD14-Tagger" target="_blank" rel="noopener noreferrer" className="tool-card">
            <ExternalLink size={20} />
            <span>WD14 Tagger (Captioning)</span>
          </a>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="ethics-section">
        <h2>⚖️ Ethics & Use (Read First)</h2>
        
        <div className="ethics-card">
          <h3>Dataset Ethics</h3>
          <ul>
            <li>Train only on art you own or have written permission to use</li>
            <li>No copyrighted work or other artists' work without explicit consent</li>
            <li>Document provenance: list where each image came from and why it's allowed</li>
          </ul>
        </div>

        <div className="ethics-card">
          <h3>Model Compatibility</h3>
          <ul>
            <li>A LORA trained for SD 1.5 won't load on SDXL/FLUX, and vice-versa</li>
            <li>Check base model compatibility: <a href="https://docs.interstice.cloud/base-models/" target="_blank" rel="noopener noreferrer">Base Model Notes <ExternalLink size={14} className="inline-icon" /></a></li>
          </ul>
        </div>

        <div className="ethics-card">
          <h3>Further Reading</h3>
          <ul>
            <li><a href="https://mediaengagement.org/research/the-ethics-of-ai-art/" target="_blank" rel="noopener noreferrer">The Ethics of AI Art – Media Engagement Lab <ExternalLink size={14} className="inline-icon" /></a></li>
            <li><a href="https://arxiv.org/html/2507.05549v1" target="_blank" rel="noopener noreferrer">Ethical Implications of AI in Creative Industries – arXiv <ExternalLink size={14} className="inline-icon" /></a></li>
          </ul>
        </div>
      </section>

      {/* Step-by-Step */}
      <section className="tutorial-steps">
        <h2>📋 Step-by-Step Workflow</h2>
        
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
        <h2>📦 Project Deliverables</h2>
        <ul className="deliverables-list">
          <li>Your trained .safetensors LORA file</li>
          <li>Model card (readme with: data size, epochs, learning rate, base model)</li>
          <li>Three finished images from Krita using your LORA (at least one with Live Painting)</li>
          <li>1–2 paragraph reflection describing dataset choices, training settings, and ethical notes</li>
        </ul>
      </section>

      {/* Rubric */}
      <section className="rubric-section">
        <h2>📝 Grading Rubric</h2>
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
                <td><strong>Dataset Quality & Ethics</strong></td>
                <td>Own work only, well-curated, clean captions/tags; provenance documented</td>
                <td>Mostly own work, minor inconsistencies; partial documentation</td>
                <td>Mixed/unclear rights; weak or missing documentation</td>
              </tr>
              <tr>
                <td><strong>Training Practice</strong></td>
                <td>Clear parameter choices; model card includes steps/epochs/lr/base; iterative tests shown</td>
                <td>Basic parameters; limited iteration; model card missing details</td>
                <td>Opaque settings; no model card; little iteration evidence</td>
              </tr>
              <tr>
                <td><strong>Krita Integration</strong></td>
                <td>LORA loads correctly; live mode works; consistent style across 3+ images</td>
                <td>LORA loads; minor live mode issues; mostly consistent outputs</td>
                <td>LORA not used correctly; incompatible base; inconsistent results</td>
              </tr>
              <tr>
                <td><strong>Craft & Clarity</strong></td>
                <td>Final images coherent, on-style, demonstrate control (selections, refinements)</td>
                <td>Images generally on-style with some rough spots</td>
                <td>Images muddy or off-style; limited control shown</td>
              </tr>
              <tr>
                <td><strong>Reflection</strong></td>
                <td>Thoughtful 1–2 paragraphs: dataset choices, captions, training settings, ethics</td>
                <td>Reflection present but surface-level</td>
                <td>Reflection missing or doesn't address ethics/settings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="troubleshooting-section">
        <h2>💡 Troubleshooting</h2>
        <div className="troubleshooting-grid">
          <div className="trouble-card">
            <h4>LORA Doesn't Change Output</h4>
            <p><strong>Solution:</strong> Check base compatibility (SD 1.5 vs SDXL vs FLUX). Ensure LORA is enabled and strength is non-zero.</p>
            <p><a href="https://github.com/Acly/krita-ai-diffusion/discussions/648" target="_blank" rel="noopener noreferrer">Community Discussion <ExternalLink size={14} className="inline-icon" /></a></p>
          </div>
          <div className="trouble-card">
            <h4>Live Painting Not Updating</h4>
            <p><strong>Solution:</strong> Verify plugin is fully installed/updated and connected to ComfyUI server with required nodes.</p>
            <p><a href="https://docs.interstice.cloud/comfyui-setup/" target="_blank" rel="noopener noreferrer">ComfyUI Setup Guide <ExternalLink size={14} className="inline-icon" /></a></p>
          </div>
          <div className="trouble-card">
            <h4>Training Overfitting/Underfitting</h4>
            <p><strong>Solution:</strong> Reduce/increase network dim/alpha and learning rate. Add more varied angles/compositions. Start with fewer epochs and inspect interim results.</p>
          </div>
          <div className="trouble-card">
            <h4>Weak Captioning</h4>
            <p><strong>Solution:</strong> Batch caption with WD14 or try Florence-2 caption nodes.</p>
            <p><a href="https://github.com/miaoshouai/ComfyUI-Miaoshouai-Tagger" target="_blank" rel="noopener noreferrer">Florence-2 Tagger <ExternalLink size={14} className="inline-icon" /></a></p>
          </div>
        </div>
      </section>

      {/* Reflection Prompts */}
      <section className="reflection-section">
        <h2>💭 Reflection Prompts (Pick One)</h2>
        <ul className="reflection-list">
          <li>What stylistic elements did your LORA capture well, and what did it miss?</li>
          <li>How did captions/tags affect the consistency of results?</li>
          <li>What ethical boundaries did you set for your dataset, and why?</li>
        </ul>
      </section>

      <footer className="tutorial-footer">
        <p>&copy; 2025 Bemidji State University • AI Course Projects</p>
      </footer>
    </div>
  );
};

export default KritaPage;