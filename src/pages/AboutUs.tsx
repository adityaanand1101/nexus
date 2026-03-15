import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Award, ShieldCheck, Zap } from 'lucide-react';
import '../styles/about.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-page-v2">
      <div className="container">
        {/* Modern Hero */}
        <motion.div 
          className="about-hero-v2 glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="about-hero-content">
            <span className="section-tag" style={{ color: 'white' }}>Est. 2008</span>
            <h1 style={{ color: 'white', fontSize: '4rem' }}>Moving with <span>Heart.</span></h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', maxWidth: '600px' }}>Annu Packers and Movers is more than a logistics company—we are your partners in starting a new chapter of your life.</p>
          </div>
          <motion.div 
            className="about-hero-icon"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Zap size={100} color="var(--accent)" style={{ opacity: 0.2 }} />
          </motion.div>
        </motion.div>

        {/* Story Section */}
        <section className="about-story-v2">
          <div className="about-story-grid">
            <motion.div 
              className="about-story-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Our team" />
              <div className="experience-box-v2 floating">
                <strong>15+</strong>
                <span>Years of trust</span>
              </div>
            </motion.div>

            <motion.div 
              className="about-story-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag" style={{ textAlign: 'left' }}>Our Legacy</span>
              <h2>Building trust through every move</h2>
              <p>Founded in 2008, Annu Packers and Movers started with a single truck and a promise: to treat every customer's belongings as our own. Today, we are India's leading relocation partner, serving over 10,000+ happy families.</p>
              <div className="mission-list-v2">
                <div className="mission-item-v2">
                  <div className="mission-icon-v2"><Target size={24} /></div>
                  <div>
                    <h4>Precision Moving</h4>
                    <p>Expert packing and scientific loading to ensure zero damage.</p>
                  </div>
                </div>
                <div className="mission-item-v2">
                  <div className="mission-icon-v2"><ShieldCheck size={24} /></div>
                  <div>
                    <h4>Secure Transit</h4>
                    <p>Every move is fully insured and tracked in real-time.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values-v2">
          <div className="section-title-v2">
            <span className="section-tag">Core Values</span>
            <h2>What we stand for</h2>
          </div>
          <div className="values-grid-v2">
            {[
              { icon: <Heart size={40} />, title: 'Customer First', desc: 'Your satisfaction is the only metric we use to measure our success.', color: 'var(--primary)' },
              { icon: <Award size={40} />, title: 'Excellence', desc: 'We never settle for "good enough". We aim for perfection in every pack.', color: 'var(--accent)' },
              { icon: <Users size={40} />, title: 'Integrity', desc: 'Honest pricing and reliable timelines. No hidden terms, ever.', color: 'var(--success)' }
            ].map((v, i) => (
              <motion.div 
                className="value-card-v2 glass-card" 
                key={i}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon-v2" style={{ color: v.color }}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
