import React, { useState } from 'react';
import { Shield, Database, Lock, Cpu, GitMerge, FileCheck, ArrowRight, Activity, TerminalSquare, Eye, Layers, ExternalLink, Mail, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
const Github = ExternalLink; // lucide-react version in use has no Github icon
import './index.css';

const GITHUB_REPO = 'https://github.com/nodellm-io/nodellm';
const GITHUB_EXTENSIONS = 'https://github.com/nodellm-io/extensions';
const DOCS_URL = 'https://github.com/nodellm-io/nodellm/blob/main/docs/USER_GUIDE_v1.md';
const RELEASES_URL = 'https://github.com/nodellm-io/nodellm/releases/latest';
const ISSUES_URL = 'https://github.com/nodellm-io/nodellm/issues';
const DISCUSSIONS_URL = 'https://github.com/nodellm-io/nodellm/discussions';
const EMAIL_INFO = 'info@nodellm.io';
const EMAIL_SECURITY = 'security@nodellm.io';
// Stripe payment link — update to live link when switching Stripe to live mode
const STRIPE_PRO_URL = 'https://buy.stripe.com/test_cNi8wPgAA6Xn0x28ZX67S00';

const faqs = [
  {
    q: 'Can NodeLLM run completely air-gapped?',
    a: 'Yes. NodeLLM is a local-first Tauri desktop application. Using Ollama with local models (Llama-3.1, Qwen2.5-Coder, DeepSeek-R1) it runs with zero internet connectivity. No code, findings, or IP ever leaves your machine.',
  },
  {
    q: 'Is NodeLLM an alternative to Aikido or Xbow?',
    a: 'NodeLLM is a human-in-the-loop offensive security workstation — not a cloud scanner. Where Aikido automates scanning in the cloud, NodeLLM gives the researcher full control: local models, interactive attack graphs, and a self-training flywheel that improves with your own findings.',
  },
  {
    q: 'Does the Pro license cover multiple machines?',
    a: 'Pro licenses cover one user across up to 2 devices. Enterprise licenses are seat-based. Community is free, unlimited installs, no license key needed.',
  },
  {
    q: 'What models does NodeLLM support?',
    a: 'Local: Llama-3.1, Qwen2.5-Coder, DeepSeek-R1 via Ollama. Cloud (optional): OpenAI GPT-4o, Anthropic Claude, Google Gemini, Groq. You can mix local and cloud per component in Hybrid mode.',
  },
  {
    q: 'How does the self-training flywheel work?',
    a: 'Every finding you label (Confirm / False Positive) is stored locally. NodeLLM exports this as Alpaca, ChatML, or DPO training data so you can fine-tune your local models to get smarter on your specific codebase patterns.',
  },
  {
    q: 'Is my data sent anywhere with the Pro license?',
    a: 'Only a license validation ping to licenses.nodellm.io every 72 hours — containing only a hardware fingerprint and your license key. Zero source code, zero findings, zero telemetry.',
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {faqs.map((item, i) => (
        <div key={i} className="glass faq-item" onClick={() => setOpen(open === i ? null : i)}>
          <div className="faq-header">
            <h3>{item.q}</h3>
            {open === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          {open === i && <p className="faq-answer">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

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
            <a href={DOCS_URL} target="_blank" rel="noreferrer" className="nav-link">Docs</a>
            <a href={GITHUB_REPO} target="_blank" rel="noreferrer" className="nav-link nav-github">
              <Github size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero container animate-fade-in">
        <div className="hero-glow"></div>
        <div className="hero-badge">
          <Github size={14} style={{ marginRight: '6px' }} />
          Open source on GitHub &nbsp;·&nbsp; v1.0.0 now available
        </div>
        <h1>Take Back Control.<br/><span className="text-gradient">Your Code. Your 0-Days. Your NodeLLM.</span></h1>
        <p>The first sovereign desktop application built for the 0-day era. A downloadable, human-in-the-loop reasoning engine. Run Llama-3 locally, offload to GPT-4 in the cloud, or run hybrid. You pull the strings.</p>
        <div className="hero-buttons">
          <a href={RELEASES_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Download Free &nbsp;<ArrowRight size={18} />
          </a>
          <a href={DOCS_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">Read Documentation</a>
        </div>
        <p className="hero-sub">macOS · Windows · Linux &nbsp;·&nbsp; Community edition free forever</p>
      </section>

      {/* Problem vs Solution */}
      <section className="section container">
        <div className="split-section">
          <div className="glass problem-card">
            <h3 className="split-card-title problem"><Eye /> The Problem with Cloud AI</h3>
            <p>Say goodbye to expensive, black-box AI scanners that treat your intellectual property like their training data. If you're sending your source code to a third-party API, you've already lost control.</p>
          </div>
          <div className="glass solution-card">
            <h3 className="split-card-title solution"><Shield /> The NodeLLM Solution</h3>
            <p>Think of it as the Burp Suite for the 0-day era. We don't replace the researcher with black-box AI — we arm the researcher with a sovereign desktop application. Hot-swap between Local, Cloud, and Hybrid models on the fly. You dictate the rules.</p>
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
            <p>Run 100% air-gapped. Use local models (DeepSeek-R1, Qwen2.5-Coder, Llama-3) via the bundled Ollama infrastructure. Your source code, logic flaws, and 0-days belong to you — always.</p>
          </div>

          <div className="glass feature-card">
            <div className="feature-icon"><Database /></div>
            <h3>Portable .nodellm Workspaces</h3>
            <p>Stop losing investigation context. Every lead, reasoning step, and validated proof is stored in a portable workspace archive. Export and share full handoffs with colleagues without losing state.</p>
          </div>

          <div className="glass feature-card">
            <div className="feature-icon"><TerminalSquare /></div>
            <h3>Proof Over Promises</h3>
            <p>Unlike generic LLM tools that hallucinate, NodeLLM generates deterministic proof chains. It writes the fuzzer, executes the test, and logs the result to a signed execution journal.</p>
          </div>

          <div className="glass feature-card">
            <div className="feature-icon"><Layers /></div>
            <h3>Human-in-the-Loop Canvas</h3>
            <p>Don't let AI guess your architecture. An interactive React Flow attack graph with MITRE ATT&CK swimlanes — review, confirm, and annotate findings before they become findings.</p>
          </div>

          <div className="glass feature-card">
            <div className="feature-icon"><GitMerge /></div>
            <h3>Burp Suite Integration</h3>
            <p>Bidirectional sync via the NodeLLM Burp Montoya extension. Mutate requests, ingest DAST findings, and capture runtime traffic directly into your attack graph.</p>
          </div>

          <div className="glass feature-card">
            <div className="feature-icon"><FileCheck /></div>
            <h3>Debate Engine</h3>
            <p>Every finding goes through a multi-round Analyst vs Validator debate loop with confidence scoring before it reaches you — dramatically reducing false positives.</p>
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
            <p>Every penetration test requires meticulous bookkeeping. The Projects Hub natively supports the <code>.nodellm</code> workspace standard. Securely export your entire workspace — findings, attack graphs, vector indices, execution journals — and import on any machine.</p>
          </div>
        </div>

        <div className="tour-row reverse">
          <div className="tour-image-wrapper">
            <img src="/images/architecture.png" alt="Interactive Attack Graph" className="tour-image" />
          </div>
          <div className="tour-content">
            <span className="tour-badge">Human-in-the-Loop</span>
            <h3>Interactive Attack Graph</h3>
            <p>The architecture canvas lets you drag, drop, and define exactly how services interact. 9 node types, 7 MITRE ATT&CK swimlanes, real-time graph updates as scans progress. Force the LLM to re-evaluate attack paths based on your ground truth.</p>
          </div>
        </div>

        <div className="tour-row">
          <div className="tour-image-wrapper">
            <img src="/images/training.png" alt="Self-Training Flywheel" className="tour-image" />
          </div>
          <div className="tour-content">
            <span className="tour-badge">Self-Training</span>
            <h3>Private Model Fine-Tuning</h3>
            <p>Label findings as confirmed or false positive. NodeLLM exports your feedback as Alpaca, ChatML, or DPO training data — ready to fine-tune your local Ollama models so they get smarter on your specific codebase patterns over time.</p>
          </div>
        </div>
      </section>

      {/* Ecosystem / Flywheel */}
      <section id="flywheel" className="section container">
        <div className="flywheel-section">
          <div className="flywheel-content">
            <h2 className="text-gradient">The Flywheel Effect</h2>
            <p>You aren't just a user — you're an architect. NodeLLM is a community-powered ecosystem where the more you hunt, the smarter your local models become.</p>
            <ul className="flywheel-list">
              <li>
                <Cpu className="flywheel-list-icon" />
                <div>
                  <strong>Self-Training</strong>
                  <p>Label your findings to fine-tune your own private models locally. Your data never leaves your machine.</p>
                </div>
              </li>
              <li>
                <Activity className="flywheel-list-icon" />
                <div>
                  <strong>Community Extensions</strong>
                  <p>Access researcher-contributed prompt libraries, 0-day rules, and architecture extensions on <a href={GITHUB_EXTENSIONS} target="_blank" rel="noreferrer" className="text-gradient">GitHub</a>.</p>
                </div>
              </li>
              <li>
                <Github className="flywheel-list-icon" />
                <div>
                  <strong>Open Contributions</strong>
                  <p>NodeLLM is open source. <a href={GITHUB_REPO} target="_blank" rel="noreferrer" className="text-gradient">Star the repo</a>, open issues, submit PRs, or join <a href={DISCUSSIONS_URL} target="_blank" rel="noreferrer" className="text-gradient">Discussions</a>.</p>
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
        <p className="section-subtitle">Choose the tier that matches your operational requirements. All tiers use the same binary — your license unlocks capabilities at runtime.</p>

        <div className="pricing-grid">
          <div className="glass pricing-card">
            <div className="pricing-tier">Community</div>
            <div className="pricing-price">Free</div>
            <p className="pricing-desc">Free forever. Full local scanning pipeline, no license key needed.</p>
            <ul className="pricing-features">
              <li><Shield size={16} /> Local LLM via Ollama</li>
              <li><Shield size={16} /> SAST code audit (up to 3 files)</li>
              <li><Shield size={16} /> Attack graph viewer</li>
              <li><Shield size={16} /> 1 live telemetry agent</li>
              <li><Shield size={16} /> Read-only prompt library</li>
              <li><Shield size={16} /> .nodellm workspace export</li>
            </ul>
            <a href={RELEASES_URL} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Download Free</a>
          </div>

          <div className="glass pricing-card pro">
            <div className="pricing-tier text-gradient">Pro</div>
            <div className="pricing-price">£199<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/yr</span></div>
            <p className="pricing-desc">The individual researcher's standard. Unlocks the full offensive intelligence suite.</p>
            <ul className="pricing-features">
              <li><Shield size={16} /> Everything in Community</li>
              <li><Shield size={16} /> Unlimited file SAST audit</li>
              <li><Shield size={16} /> Burp Suite extension</li>
              <li><Shield size={16} /> 0-day fuzzer agent</li>
              <li><Shield size={16} /> Cloud model routing (GPT-4o, Claude, Gemini)</li>
              <li><Shield size={16} /> Editable prompt & rule library</li>
              <li><Shield size={16} /> Training data export (Alpaca/DPO)</li>
              <li><Shield size={16} /> Scheduled scans</li>
              <li><Shield size={16} /> PDF/JSON/CSV report export</li>
              <li><Shield size={16} /> 1 user · 2 devices</li>
            </ul>
            <a href={STRIPE_PRO_URL} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Get Pro License — £199/yr</a>
          </div>

          <div className="glass pricing-card">
            <div className="pricing-tier">Enterprise</div>
            <div className="pricing-price">Custom</div>
            <p className="pricing-desc">For organisations requiring multi-seat deployment and priority support.</p>
            <ul className="pricing-features">
              <li><Shield size={16} /> Everything in Pro</li>
              <li><Shield size={16} /> Multi-seat licensing</li>
              <li><Shield size={16} /> Priority support</li>
              <li><Shield size={16} /> Custom model deployment</li>
              <li><Shield size={16} /> SSO / team management</li>
              <li><Shield size={16} /> Dedicated onboarding</li>
            </ul>
            <a href={`mailto:${EMAIL_INFO}?subject=NodeLLM Enterprise Enquiry`} className="btn btn-secondary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Contact Sales</a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section container">
        <h2 className="section-title">Resources</h2>
        <p className="section-subtitle">Everything you need to get started and go deep.</p>
        <div className="features-grid">
          <div className="glass feature-card">
            <div className="feature-icon"><BookOpen /></div>
            <h3>User Guide</h3>
            <p>Complete setup guide — installation, first scan, Ollama model download, license activation, and every feature explained.</p>
            <a href={DOCS_URL} target="_blank" rel="noreferrer" className="text-gradient resource-link">Read User Guide →</a>
          </div>
          <div className="glass feature-card">
            <div className="feature-icon"><Github /></div>
            <h3>GitHub Repository</h3>
            <p>Source code, issue tracker, release notes, and contribution guide. Star the repo to follow development.</p>
            <a href={GITHUB_REPO} target="_blank" rel="noreferrer" className="text-gradient resource-link">View on GitHub →</a>
          </div>
          <div className="glass feature-card">
            <div className="feature-icon"><Activity /></div>
            <h3>Extensions & Rules</h3>
            <p>Community-contributed prompt libraries, detection rules, and architecture extensions. Submit your own via pull request.</p>
            <a href={GITHUB_EXTENSIONS} target="_blank" rel="noreferrer" className="text-gradient resource-link">Browse Extensions →</a>
          </div>
          <div className="glass feature-card">
            <div className="feature-icon"><Mail /></div>
            <h3>Community Discussions</h3>
            <p>Ask questions, share findings techniques, and propose features in the GitHub Discussions forum.</p>
            <a href={DISCUSSIONS_URL} target="_blank" rel="noreferrer" className="text-gradient resource-link">Join Discussions →</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <FAQ />
      </section>

      {/* Bottom CTA */}
      <section className="section container" style={{ textAlign: 'center' }}>
        <div className="glass cta-box">
          <h2>You are not paying for a "scanner."<br/>You are paying for a <span className="text-gradient">Force Multiplier.</span></h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Outsmart the cloud. Own your intelligence. Start free.</p>
          <div className="hero-buttons" style={{ justifyContent: 'center' }}>
            <a href={RELEASES_URL} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 36px' }}>
              Download NodeLLM Free <ArrowRight size={18} />
            </a>
            <a href={GITHUB_REPO} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Github size={16} style={{ marginRight: '8px' }} />View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <div className="footer-content">
          <div className="footer-logo">
            <Shield className="logo-icon" size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
            NodeLLM &nbsp;·&nbsp; v1.0.0
          </div>
          <div className="footer-links">
            <a href={`mailto:${EMAIL_INFO}`} className="text-gradient">info@nodellm.io</a>
            <a href={`mailto:${EMAIL_SECURITY}`}>security@nodellm.io</a>
            <a href={DOCS_URL} target="_blank" rel="noreferrer">Documentation</a>
            <a href={GITHUB_REPO} target="_blank" rel="noreferrer">GitHub</a>
            <a href={GITHUB_EXTENSIONS} target="_blank" rel="noreferrer">Extensions</a>
            <a href={ISSUES_URL} target="_blank" rel="noreferrer">Report a Bug</a>
          </div>
        </div>
        <p className="footer-copy">© 2026 NodeLLM. All analysis runs locally — your code never leaves your machine.</p>
      </footer>
    </div>
  );
}

export default App;
