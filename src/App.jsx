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
            <img src="/images/projects.png" alt="Projects Dashboard" className="tour-image" />
          </div>
          <div className="tour-content">
            <span className="tour-badge">Workspace</span>
            <h3>Forensic Projects Hub</h3>
            <p>Every penetration test requires meticulous bookkeeping. Our Projects Hub natively supports the <code>.graphnode</code> standard, ensuring that every 0-day, every tool execution, and every hypothesis is cryptographically linked to your local workspace.</p>
          </div>
        </div>

        <div className="tour-row">
          <div className="tour-image-wrapper">
            <img src="/images/architecture.png" alt="Architecture Canvas" className="tour-image" />
          </div>
          <div className="tour-content">
            <span className="tour-badge">Human-in-the-Loop</span>
            <h3>Interactive Architecture Canvas</h3>
            <p>You don't let black-box AI guess the network topology. The Architecture Canvas allows you to drag, drop, and define exactly how services interact, instantly forcing the local LLM to re-evaluate its attack paths based on your absolute truth.</p>
          </div>
        </div>

        <div className="tour-row">
          <div className="tour-image-wrapper">
            <img src="/images/stride.png" alt="STRIDE Threat Models" className="tour-image" />
          </div>
          <div className="tour-content">
            <span className="tour-badge">Telemetry</span>
            <h3>Dynamic STRIDE Threat Modeling</h3>
            <p>Using our air-gapped agent endpoints, NodeLLM ingests live process, port, and firewall telemetry. It doesn't guess; it builds real-time STRIDE threat models based on cryptographic evidence from the target host.</p>
          </div>
        </div>

        <div className="tour-row">
          <div className="tour-image-wrapper">
            <img src="/images/findings.png" alt="Vulnerability Findings" className="tour-image" />
          </div>
          <div className="tour-content">
            <span className="tour-badge">Validation</span>
            <h3>Deterministic Proof Chains</h3>
            <p>Generic AI hallucinates vulnerabilities. NodeLLM produces Deterministic Proof Chains. Every hypothesis generated by the Analyst agent is strictly validated by the local Fuzzer before being promoted to a verified finding.</p>
          </div>
        </div>

        <div className="tour-row">
          <div className="tour-image-wrapper">
            <img src="/images/burp.png" alt="Burp Suite Integration" className="tour-image" />
          </div>
          <div className="tour-content">
            <span className="tour-badge">Integration</span>
            <h3>Bidirectional Proxy Sync</h3>
            <p>The Burp Suite of the LLM era plugs directly into the actual Burp Suite. Seamlessly sync your repeater tabs, proxy history, and sitemaps directly into the local agentic reasoning engine for deep business logic analysis.</p>
          </div>
        </div>

        <div className="tour-row">
          <div className="tour-image-wrapper">
            <img src="/images/training.png" alt="Self Training" className="tour-image" />
          </div>
          <div className="tour-content">
            <span className="tour-badge">Self-Training</span>
            <h3>Local Weights Flywheel</h3>
            <p>The more you hunt, the smarter your node becomes. Label your successful exploits and architecture mappings to automatically fine-tune local models (Llama-3, DeepSeek) completely offline.</p>
          </div>
        </div>

        <div className="tour-row">
          <div className="tour-image-wrapper">
            <img src="/images/context_transfer.png" alt="Context Transfer" className="tour-image" />
          </div>
          <div className="tour-content">
            <span className="tour-badge">Portability</span>
            <h3>Context Memory Transfer</h3>
            <p>Don't lose your train of thought. Export your entire context memory, graph architecture, and active findings into a single, encrypted <code>.nodellm</code> file to hand off your 0-day research to a colleague instantly.</p>
          </div>
        </div>

        <div className="tour-row">
          <div className="tour-image-wrapper">
            <img src="/images/reports.png" alt="Compliance Reports" className="tour-image" />
          </div>
          <div className="tour-content">
            <span className="tour-badge">Compliance</span>
            <h3>Automated Regulatory Export</h3>
            <p>Turn weeks of manual reporting into a single click. Instantly generate audit-ready DORA, ISO 20007, and EU AI Act compliance reports complete with cryptographic timestamps of your testing methodologies.</p>
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
