import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-dark">
      <div className="container">
        <div className="footer-grid-dark">
          <div className="footer-brand-dark">
            <div className="footer-logo-dark">
              <Shield size={32} />
              <span>Nexus Cyber-Sec</span>
            </div>
            <p>Advanced digital defense systems for the modern enterprise. Protecting your data with military-grade encryption and AI surveillance.</p>
            <div className="social-links-dark">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links-dark">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Intel Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links-dark">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Threat Intelligence</Link></li>
              <li><Link to="/services">Penetration Testing</Link></li>
              <li><Link to="/services">Cloud Security</Link></li>
              <li><Link to="/services">Incident Response</Link></li>
              <li><Link to="/services">Compliance Audit</Link></li>
            </ul>
          </div>

          <div className="footer-contact-dark">
            <h3>Secure Comms</h3>
            <div className="contact-item-dark">
              <Phone size={18} />
              <span>+1 (800) 555-0199</span>
            </div>
            <div className="contact-item-dark">
              <Mail size={18} />
              <span>secure@nexus-cyber.com</span>
            </div>
            <div className="contact-item-dark">
              <MapPin size={18} />
              <span>Cyber City, Silicon Valley, CA</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-dark">
          <p>&copy; {new Date().getFullYear()} Nexus Cyber-Sec. All Rights Reserved.</p>
          <div className="legal-links-dark">
            <Link to="/terms">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
