import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import '../styles/home.css';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'Precision Logistics in 2026',
      excerpt: "How AI and real-time telemetry are changing the way we move enterprise assets across borders.",
      author: 'Annu Sharma',
      date: 'Feb 20, 2026',
      tag: 'Technology',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'The Engineering of Safe Packing',
      excerpt: "Deep dive into our SafeSeal™ technology and why multi-layer protection is essential for fragile electronics.",
      author: 'Ops Team',
      date: 'Feb 15, 2026',
      tag: 'Safety',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Corporate Moving: Zero Downtime Strategies',
      excerpt: "Planning an office relocation? Here is how to ensure your digital infrastructure remains online during transit.",
      author: 'Enterprise Dept.',
      date: 'Feb 10, 2026',
      tag: 'Business',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'IoT in Logistics: Monitoring in Real-Time',
      excerpt: "How sensor networks provide granular data on shipment orientation, temperature, and shock.",
      author: 'Tech R&D',
      date: 'Feb 05, 2026',
      tag: 'Innovation',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'The Psychology of Productive Workspaces',
      excerpt: "Why a systemized office transition significantly improves employee morale and output.",
      author: 'HR Strategy',
      date: 'Jan 28, 2026',
      tag: 'Enterprise',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Global Expansion: Logistics Standards',
      excerpt: "Navigating international maritime and air freight regulations for seamless global shifting.",
      author: 'Global Ops',
      date: 'Jan 20, 2026',
      tag: 'International',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="home-dark">
      <div className="container" style={{ padding: '120px 24px 80px' }}>
        <div className="section-header-dark" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="tag-dark">Insights & Intelligence</span>
          <h2 className="text-grad">The Logistics Journal</h2>
          <p style={{ maxWidth: '600px', margin: '20px auto' }}>Cutting-edge perspectives on relocation, technology, and supply chain efficiency.</p>
        </div>

        <div className="services-grid-dark" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
          {posts.map((p, i) => (
            <motion.div 
              className="service-card-dark dark-glass" 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, borderColor: 'var(--primary)' }}
              style={{ padding: 0, overflow: 'hidden' }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              </div>
              <div style={{ padding: '30px' }}>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '15px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={14} /> {p.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Tag size={14} color="var(--primary)" /> {p.tag}</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', lineHeight: '1.3' }}>{p.title}</h3>
                <p style={{ marginBottom: '25px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>{p.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    <User size={16} color="var(--primary)" /> {p.author}
                  </span>
                  <button style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Read Report <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
