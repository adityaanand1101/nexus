import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Zap } from 'lucide-react';
import '../styles/global.css';

const Popup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('seenPopupDark');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 6000); // Show after 6 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('seenPopupDark', 'true');
  };

  const handleSubmit = () => {
    if (email) {
      window.location.href = `mailto:annupackersandmovers@gmail.com?subject=Elite Network Access Request&body=Requesting 20% discount for: ${email}`;
      closePopup();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="popup-overlay">
          <motion.div 
            className="popup-content-dark dark-glass"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            style={{ 
              borderColor: 'var(--primary)',
              boxShadow: 'var(--glow-primary)'
            }}
          >
            <button className="popup-close" onClick={closePopup}>
              <X size={24} />
            </button>
            <div className="popup-body">
              <div className="popup-icon-box" style={{ 
                width: '80px', 
                height: '80px', 
                background: 'rgba(6, 182, 212, 0.1)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 25px',
                border: '1px solid var(--primary)'
              }}>
                <Zap size={40} color="var(--primary)" fill="var(--primary)" />
              </div>
              <h2 className="text-grad" style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Elite Intelligence</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1.1rem' }}>Join our priority network and receive a 20% discount on your next enterprise transition.</p>
              <div className="popup-form" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '16px 20px', 
                    background: 'rgba(15, 23, 42, 0.8)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '1rem'
                  }} 
                />
                <button className="btn btn-primary" onClick={handleSubmit} style={{ width: '100%', padding: '18px' }}>
                  Claim Access <Send size={18} />
                </button>
              </div>
              <p style={{ fontSize: '0.8rem', marginTop: '20px', color: 'rgba(255,255,255,0.3)' }}>No spam, just pure logistics engineering updates.</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
