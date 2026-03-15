import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Briefcase, Truck, Globe, Zap, Package, Search, MapPin, BarChart } from 'lucide-react';
import '../styles/home.css';

const Services: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <HomeIcon size={40} />,
      title: 'Precision Residential',
      desc: 'White-glove home shifting with specialized packing for electronics and fragile items.',
      features: ['5-Layer Packing', 'Furniture Dismantling', 'Unpacking & Setup'],
      color: '#06B6D4'
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Enterprise Relocation',
      desc: 'Minimize downtime with our efficient office and IT infrastructure moving services.',
      features: ['Server Handling', 'Record Management', 'Employee Assistance'],
      color: '#3B82F6'
    },
    {
      icon: <Truck size={40} />,
      title: 'Vehicle Logistics',
      desc: 'Door-to-door transport for cars and bikes using specialized closed carriers.',
      features: ['Zero-scratch Guarantee', 'GPS Tracking', 'Transit Insurance'],
      color: '#FACC15'
    },
    {
      icon: <Globe size={40} />,
      title: 'Global Transitions',
      desc: 'Complete international moving solutions including customs and documentation.',
      features: ['Customs Clearance', 'Air/Sea Freight', 'Global Network'],
      color: '#10B981'
    }
  ];

  return (
    <div className="home-dark">
      <section className="hero-dark" style={{ minHeight: '60vh', padding: '120px 0 80px' }}>
        <div className="container">
          <motion.div 
            className="section-header-dark"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <span className="tag-dark">Expertise & Scalability</span>
            <h1 className="text-grad" style={{ fontSize: '4rem', marginBottom: '20px' }}>Logistics Engineered <br />For Precision.</h1>
            <p>From micro-shifting to enterprise-level global transitions, we provide the infrastructure and expertise for a seamless move.</p>
          </motion.div>
        </div>
      </section>

      <section className="services-dark" style={{ padding: '0 0 100px' }}>
        <div className="container">
          <div className="services-grid-dark">
            {services.map((service, index) => (
              <motion.div 
                className="service-card-dark dark-glass"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, borderColor: service.color, boxShadow: `0 0 30px ${service.color}20` }}
                style={{ padding: '40px' }}
              >
                <div className="card-icon-dark" style={{ color: service.color, marginBottom: '25px' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{service.title}</h3>
                <p style={{ marginBottom: '25px', color: 'var(--text-muted)' }}>{service.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                   {service.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                      <Zap size={14} color={service.color} fill={service.color} /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/get-estimate" className="btn btn-outline" style={{ borderColor: service.color, color: service.color, width: '100%' }}>
                  Book This Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="method-dark">
        <div className="container method-grid-dark">
          <motion.div className="method-text-dark" {...fadeInUp}>
            <span className="tag-dark">Our Process</span>
            <h2>How We Ensure <br />Zero Friction.</h2>
            <div className="process-steps-dark">
              {[
                { icon: <Search size={24} />, t: 'Pre-Move Survey', d: 'AI-assisted volume analysis and strategic planning.' },
                { icon: <Package size={24} />, t: 'Smart Packing', d: 'Proprietary packing materials and scientific loading techniques.' },
                { icon: <BarChart size={24} />, t: 'Fleet Integration', d: 'GPS-enabled transit with real-time telemetry updates.' },
                { icon: <MapPin size={24} />, t: 'Site Re-settling', d: 'Precision unboxing and setup at your new destination.' }
              ].map((step, i) => (
                <div className="step-dark" key={i}>
                  <div className="step-num-dark" style={{ background: 'var(--primary)', color: '#000' }}>{i + 1}</div>
                  <div className="step-info-dark">
                    <h4>{step.t}</h4>
                    <p>{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="method-image-dark" {...fadeInUp}>
            <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop" alt="Warehouse" />
            <div className="method-overlay-glow" style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', opacity: 0.1 }}></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
