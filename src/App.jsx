import React from 'react';
import { Shield, Database, Lock, Cpu, GitMerge, FileCheck, ArrowRight, Activity, TerminalSquare, Eye, Layers } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <Shield className="logo-icon" size={28} />
            <span>NodeLLM</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#flywheel" className="nav-link">Ecosystem</a>
            <a href="#pricing" className="nav-link">Pricing</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero container animate-fade-in">
        <div className="hero-glow"></div>
        <h1>Take Back Control.<br/><span className="text-gradient">Your Code. Your 0-Days. Your NodeLLM.</span></h1>
        <p>The first sovereign desktop application built for the 0-day era. A downloadable, human-in-the-loop reasoning engine. Run Llama-3 locally, offload to GPT-4 in the cloud, or run hybrid. You pull the strings.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">
            Download NodeLLM.io <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
          <button className="btn btn-secondary">Read Documentation</button>
        </div>

      </section>

      {/* Problem vs Solution */}
      <section className="section container">
        <div className="split-section">
          <div className="glass problem-card">
            <h3 className="split-card-title problem"><Eye /> The Problem with Cloud AI</h3>
            <p>Say goodbye to expensive, black-box AI scanners that treat your intellectual property like their training data. If you’re sending your source code to a third-party API, you’ve already lost control.</p>
          </div>
          <div className="glass solution-card">
            <h3 className="split-card-title solution"><Shield /> The NodeLLM Solution</h3>
            <p>Think of it as the Burp Suite for the 0-day era. We don't replace the researcher with black-box AI; we arm the researcher with a sovereign desktop application. Hot-swap between Local, Cloud, and Hybrid models on the fly. You dictate the rules.</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="section container">
        <h2 className="section-title">Why Researchers are Switching</h2>
        <p className="section-subtitle">A comprehensive suite of sovereign intelligence tools designed for offensive security.</p>
        
        <div className="features-grid">
          <div className="glass feature-card">
            <div className="feature-icon"><Lock /></div>
            <h3>Absolute Data Sovereignty</h3>
            <p>Run 100% air-gapped. Use local models (DeepSeek-R1, Qwen2.5-Coder, Llama-3) via our bundled infrastructure. Your source code, logic flaws, and 0-days belong to you.</p>
          </div>
          
          <div className="glass feature-card">
            <div className="feature-icon"><Database /></div>
            <h3>The .graphnode Standard</h3>
            <p>Stop losing investigation context. Every lead, reasoning step, and validated proof is stored in a portable, forensic workspace. Share handoffs with full context.</p>
          </div>
          
          <div className="glass feature-card">
            <div className="feature-icon"><TerminalSquare /></div>
            <h3>Proof Over Promises</h3>
            <p>Unlike generic LLM tools that hallucinate, NodeLLM generates Deterministic Proof Chains. It writes the fuzzer, executes the test, and provides signed telemetry.</p>
          </div>
          
          <div className="glass feature-card">
            <div className="feature-icon"><Layers /></div>
            <h3>Human-in-the-Loop Canvas</h3>
            <p>Don't let the AI guess your architecture. Drag and drop nodes, attach configuration context, and watch the LLM re-evaluate attack paths in real-time.</p>
          </div>
          
          <div className="glass feature-card">
            <div className="feature-icon"><GitMerge /></div>
            <h3>Full-Spectrum Integration</h3>
            <p>Bidirectional sync with Burp Suite for Repeater and sitemap logic. Real-time attack feeds to SIEM/Splunk so the Blue Team sees exactly what you're thinking.</p>
          </div>
          
          <div className="glass feature-card">
            <div className="feature-icon"><FileCheck /></div>
            <h3>Compliance Reporting</h3>
            <p>One-click export for EU AI Act & DORA audit reports with cryptographic timestamps to prove testing methodologies and regulatory compliance.</p>
          </div>
        </div>
      </section>

      {/* Platform Tour Showcase */}
      <section className="tour-section container">
        <h2 className="section-title text-gradient" style={{ marginBottom: '80px' }}>The NodeLLM Arsenal</h2>
        
        <div className="tour-row">
          <div className="tour-image-wrapper">
            <img src="/images/projects.png" alt="Forensic Hub and Exportable Workspace" className="tour-image" />
          </div>
          <div className="tour-content">
            <span className="tour-badge">Workspace & Portability</span>
            <h3>Forensic Hub & Context Export</h3>
            <p>Every penetration test requires meticulous bookkeeping. The Projects Hub natively supports the <code>.nodellm</code> standard. Securely export your entire workspace context to seamlessly transfer 0-day research to colleagues without losing state.</p>
          </div>
        </div>

        <div className="tour-row">
          <div className="tour-image-wrapper">
            <img src="/images/architecture.png" alt="Interactive Attack Graph" className="tour-image" />
          </div>
          <div className="tour-content">
            <span className="tour-badge">Human-in-the-Loop</span>
            <h3>Interactive Attack Graph</h3>
            <p>Don't let black-box AI guess the network topology. The Architecture Canvas allows you to drag, drop, and define exactly how services interact, forcing the interactive assistant to re-evaluate attack paths based on your ground truth.</p>
          </div>
        </div>
      </section>


      {/* Ecosystem / Flywheel */}
      <section id="flywheel" className="section container">
        <div className="flywheel-section">
          <div className="flywheel-content">
            <h2 className="text-gradient">The Flywheel Effect</h2>
            <p>You Aren't Just a User, You're an Architect. We’ve moved beyond static licenses. NodeLLM is a community-powered ecosystem where the more you hunt, the smarter your local models become.</p>
            <ul className="flywheel-list">
              <li>
                <Cpu className="flywheel-list-icon" />
                <div>
                  <strong>Self-Training</strong>
                  <p>Label your findings to fine-tune your own private models locally.</p>
                </div>
              </li>
              <li>
                <Activity className="flywheel-list-icon" />
                <div>
                  <strong>Community Lab</strong>
                  <p>Access a library of researcher-contributed prompts, 0-day rules, and architecture extensions—or monetize your own.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img src="/images/flywheel.png" alt="Self Training Flywheel" className="flywheel-image" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section container">
        <h2 className="section-title">Flexible Deployment</h2>
        <p className="section-subtitle">Choose the tier that matches your operational requirements.</p>
        
        <div className="pricing-grid">
          <div className="glass pricing-card">
            <div className="pricing-tier">Community</div>
            <div className="pricing-price">Free</div>
            <p className="pricing-desc">Free forever. Local-only scanning and deterministic testing.</p>
            <ul className="pricing-features">
              <li><Shield size={16} /> Local LLM Support</li>
              <li><Shield size={16} /> Basic .graphnode files</li>
              <li><Shield size={16} /> Community rulesets</li>
            </ul>
            <button className="btn btn-secondary" style={{ width: '100%' }}>Download Now</button>
          </div>
          
          <div className="glass pricing-card pro">
            <div className="pricing-tier text-gradient">Pro</div>
            <div className="pricing-price">$450<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/yr</span></div>
            <p className="pricing-desc">The individual researcher's standard. Unlocks advanced reasoning.</p>
            <ul className="pricing-features">
              <li><Shield size={16} /> Burp Suite Integration</li>
              <li><Shield size={16} /> 0-Day Fuzzer Generation</li>
              <li><Shield size={16} /> Advanced Architecture Canvas</li>
              <li><Shield size={16} /> Unsloth Fine-Tuning Support</li>
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }}>Buy License</button>
          </div>
          
          <div className="glass pricing-card">
            <div className="pricing-tier">Enterprise</div>
            <div className="pricing-price">Custom</div>
            <p className="pricing-desc">For organizations requiring distributed scanning fleets.</p>
            <ul className="pricing-features">
              <li><Shield size={16} /> mTLS-secured agent fleets</li>
              <li><Shield size={16} /> SIEM / Splunk Integration</li>
              <li><Shield size={16} /> Dedicated GPU server support</li>
              <li><Shield size={16} /> Priority 24/7 Support</li>
            </ul>
            <button className="btn btn-secondary" style={{ width: '100%' }}>Contact Sales</button>
          </div>
        </div>
      </section>
      
      {/* Content Clusters & Pillar Pages */}
      <section className="section container">
        <h2 className="section-title">Deep Technical Resources</h2>
        <p className="section-subtitle">Explore our core methodology and extend the platform.</p>
        <div className="features-grid">
          <div className="glass feature-card">
            <h3>The Sovereign Intelligence Manifesto</h3>
            <p>Why cloud-based AI is an unacceptable risk for 0-day research, and how the Human-in-the-Loop paradigm restores control.</p>
            <a href="#" className="text-gradient" style={{ fontWeight: 'bold', marginTop: '10px', display: 'inline-block' }}>Read Manifesto &rarr;</a>
          </div>
          <div className="glass feature-card">
            <h3>AST-Slicing for Logic Flaws</h3>
            <p>A deep dive into how NodeLLM uses AST-Slicing and deterministic proofs to hunt for deep business logic flaws in massive 5GB codebases.</p>
            <a href="#" className="text-gradient" style={{ fontWeight: 'bold', marginTop: '10px', display: 'inline-block' }}>Read Technical Deep-Dive &rarr;</a>
          </div>
          <div className="glass feature-card">
            <h3>The Extension Ecosystem SDK</h3>
            <p>Documenting our Python SDK. Learn how to write your own <code>jwt_auditor.py</code> and hook into the local agentic reasoning engine.</p>
            <a href="#" className="text-gradient" style={{ fontWeight: 'bold', marginTop: '10px', display: 'inline-block' }}>View Documentation &rarr;</a>
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="section container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="glass" style={{ padding: '40px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Q: Can NodeLLM run completely air-gapped?</h3>
            <p style={{ color: 'var(--text-muted)' }}>A: Yes, NodeLLM is a local-first Tauri application that supports fully air-gapped LLM execution via local GPU providers like Ollama or LM Studio.</p>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Q: Is NodeLLM an alternative to Aikido or Xbow?</h3>
            <p style={{ color: 'var(--text-muted)' }}>A: NodeLLM focuses heavily on offensive security and 0-day research, providing a human-in-the-loop workstation rather than just an automated cloud scanner like Aikido.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Q: Can I use NodeLLM for DORA and EU AI Act reporting?</h3>
            <p style={{ color: 'var(--text-muted)' }}>A: Yes. NodeLLM features automated, one-click compliance reporting tools that generate cryptographically signed audit logs of your testing methodology.</p>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="section container" style={{ textAlign: 'center' }}>
        <div className="glass" style={{ padding: '60px', borderColor: 'var(--accent-cyan)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>You are not paying for a "scanner."<br/>You are paying for a <span className="text-gradient">Force Multiplier.</span></h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Outsmart the cloud. Own your intelligence.</p>
          <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 36px' }}>Start your first 0-day hunt in 15 minutes</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <div className="footer-content">
          <div className="footer-logo">
            <Shield className="logo-icon" size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
            NodeLLM
          </div>
          <div className="footer-links">
            <a href="mailto:info@nodellm.io" className="text-gradient">Contact Team</a>
            <a href="#">Documentation</a>
            <a href="#">Community Lab</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
