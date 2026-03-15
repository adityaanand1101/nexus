import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ChevronRight, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Defense Systems', path: '/services' },
    { label: 'Intel Blog', path: '/blog' },
    { label: 'Our Mission', path: '/about' },
    { label: 'Contact Command', path: '/contact' }
  ];

  return (
    <nav className={`navbar-dark ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo-dark">
          <motion.div 
            className="logo-icon-dark"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Shield size={28} color="var(--primary)" />
          </motion.div>
          <div className="logo-text-dark">
            <span className="logo-neon">Nexus</span>
            <span className="logo-sub">Cyber-Sec</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="nav-desktop">
          <ul className="nav-list-dark">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div className="nav-glow" layoutId="nav-glow" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="nav-cta-dark">
            <motion.div 
              className="phone-chip"
              whileHover={{ scale: 1.05 }}
            >
              <Lock size={16} color="var(--primary)" />
              <span>ENCRYPTED</span>
            </motion.div>
            <Link to="/get-estimate" className="btn btn-primary nav-btn-dark">
              Security Audit <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-dark-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            <div className="container mobile-flex">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mobile-cta-group">
                <Link to="/get-estimate" className="btn btn-primary" onClick={() => setIsOpen(false)}>Audit Now</Link>
                <Link to="/contact" className="btn btn-outline" onClick={() => setIsOpen(false)}>Contact Command</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
