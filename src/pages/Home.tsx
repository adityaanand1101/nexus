import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Globe, ShieldCheck, Star, ArrowRight, Zap, BarChart, Cpu, Terminal, Activity } from 'lucide-react';
import '../styles/home.css';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: <Shield size={32} />, title: 'Threat Intelligence', color: 'var(--primary)', desc: 'AI-driven real-time global threat monitoring.' },
    { icon: <Lock size={32} />, title: 'Encryption Systems', color: 'var(--secondary)', desc: 'Quantum-resistant data protection protocols.' },
    { icon: <Terminal size={32} />, title: 'Penetration Testing', color: 'var(--accent)', desc: 'Aggressive ethical hacking & vulnerability scans.' },
    { icon: <Activity size={32} />, title: 'Incident Response', color: 'var(--success)', desc: 'Rapid containment & digital forensics teams.' },
  ];

  return (
    <div className="home-dark">
      {/* Hero Section */}
      <section className="hero-dark">
        <div className="container hero-flex-dark">
          <motion.div 
            className="hero-text-dark"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge-dark">
              <Zap size={14} fill="var(--accent)" /> <span>The Cyber-Security Era is Here</span>
            </div>
            <h1>Secure Your <span className="text-grad">Digital Frontier</span> With Precision.</h1>
            <p>Nexus combines AI-driven proactive defense with elite ethical hacking to ensure your infrastructure remains impenetrable.</p>
            
            <div className="hero-actions-dark">
              <Link to="/get-estimate" className="btn btn-primary">
                Free Security Audit <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Speak to a Specialist
              </Link>
            </div>

            <div className="hero-meta-dark">
              <div className="meta-item"><Star size={14} fill="var(--accent)" /> <span>Top Rated Cyber Agency</span></div>
              <div className="meta-item"><ShieldCheck size={14} /> <span>ISO 27001 Certified</span></div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual-dark"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="glow-orb"></div>
            <div className="image-wrapper-dark">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Cyber Security" />
              <div className="floating-stat-dark animate-float">
                <BarChart size={24} color="var(--primary)" />
                <div>
                  <strong>Prevention Rate</strong>
                  <span>99.99% Breach Deflected</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Ticker */}
      <div className="trust-ticker-dark">
        <div className="container ticker-flex">
          <div className="ticker-item"><Cpu size={18} /> <span>AI Proactive Defense</span></div>
          <div className="ticker-item"><Lock size={18} /> <span>End-to-End Encryption</span></div>
          <div className="ticker-item"><Eye size={18} /> <span>24/7 SOC Monitoring</span></div>
          <div className="ticker-item"><Globe size={18} /> <span>Global Compliance</span></div>
        </div>
      </div>

      {/* Services Grid */}
      <section id="services" className="services-dark">
        <div className="container">
          <motion.div className="section-header-dark" {...fadeInUp}>
            <span className="tag-dark">Our Expertise</span>
            <h2>Advanced Defense Modules</h2>
          </motion.div>

          <div className="services-grid-dark">
            {services.map((service, index) => (
              <motion.div 
                className="service-card-dark dark-glass"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, borderColor: service.color }}
              >
                <div className="card-icon-dark" style={{ color: service.color, boxShadow: `0 0 20px ${service.color}20` }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to="/services" className="service-link-dark" style={{ color: service.color }}>
                  View Documentation <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="method-dark">
        <div className="container method-grid-dark">
          <motion.div className="method-image-dark" {...fadeInUp}>
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" alt="SOC Center" />
            <div className="method-overlay-glow"></div>
          </motion.div>

          <motion.div className="method-text-dark" {...fadeInUp}>
            <span className="tag-dark">Our Protocol</span>
            <h2>The Engineering Of Defense.</h2>
            <div className="process-steps-dark">
              {[
                { n: '01', t: 'Vulnerability Assessment', d: 'Deep scan of your entire digital footprint.' },
                { n: '02', t: 'Perimeter Hardening', d: 'Deploying multi-layer firewall & AI guards.' },
                { n: '03', t: 'Active Monitoring', d: '24/7 surveillance by our elite SOC team.' },
                { n: '04', t: 'Continuous Optimization', d: 'Dynamic updates to meet evolving threats.' }
              ].map((step, i) => (
                <div className="step-dark" key={i}>
                  <div className="step-num-dark">{step.n}</div>
                  <div className="step-info-dark">
                    <h4>{step.t}</h4>
                    <p>{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="cta-dark container">
        <motion.div 
          className="cta-wrapper-dark"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="cta-content-dark">
            <h2>Ready to secure your assets?</h2>
            <p>Join 500+ enterprises protected by Nexus Cyber-Sec.</p>
            <div className="cta-btn-group-dark">
              <Link to="/get-estimate" className="btn btn-primary">Start Security Audit</Link>
              <Link to="/contact" className="btn btn-outline">Consult Elite Engineer</Link>
            </div>
          </div>
          <div className="cta-icon-bg-dark">
            <Shield size={300} strokeWidth={0.5} opacity={0.05} color="var(--primary)" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
