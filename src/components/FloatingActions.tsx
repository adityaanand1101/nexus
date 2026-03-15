import React from 'react';
import { Phone, MessageCircle, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingActions: React.FC = () => {
  return (
    <div style={{ position: 'fixed', bottom: '30px', left: '30px', zIndex: 999, display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <motion.a 
        href="tel:+18005550199"
        style={{ background: 'var(--primary)', color: '#000', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--glow-primary)' }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Phone size={24} />
      </motion.a>
      
      <motion.div 
        style={{ background: '#25D366', color: '#fff', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </motion.div>

      <motion.div 
        style={{ background: 'var(--bg-card)', color: 'var(--primary)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--primary)', cursor: 'pointer' }}
        whileHover={{ scale: 1.1 }}
        title="Quick Scan"
      >
        <Lock size={24} />
      </motion.div>
    </div>
  );
};

export default FloatingActions;
