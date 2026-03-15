import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import '../styles/faq.css';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do you calculate the moving cost?",
      answer: "The cost depends on several factors: volume of goods, type of packing required, distance between locations, number of floors, and elevator availability. We provide a free pre-move survey to give you an accurate quote."
    },
    {
      question: "Do you provide insurance for my goods?",
      answer: "Yes, we offer comprehensive transit insurance. This covers any damage that might occur during transit due to accidents, fire, or other unforeseen events. We highly recommend insurance for inter-city and long-distance moves."
    },
    {
      question: "How far in advance should I book my move?",
      answer: "For local moves, 3-5 days is sufficient. For inter-city or peak season moves (weekends and month-ends), we recommend booking at least 1-2 weeks in advance to ensure availability."
    },
    {
      question: "What items do you NOT move?",
      answer: "For safety reasons, we do not move hazardous materials, explosives, gas cylinders, liquid items, jewelry, high-value documents, or perishable food items. Please contact us for a detailed list."
    }
  ];

  return (
    <div className="faq-page-v2">
      <div className="container">
        <motion.div 
          className="section-title-v2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="section-tag">Help Center</span>
          <h2>Got questions? We've got answers.</h2>
          <p>Everything you need to know about our moving services, safety protocols, and pricing.</p>
        </motion.div>

        <div className="faq-grid-v2">
          <motion.div 
            className="faq-container-v2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item-v2 ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="faq-question-v2">
                  <h3>{faq.question}</h3>
                  <div className={`faq-icon-v2 ${activeIndex === index ? 'active' : ''}`}>
                    <ChevronDown size={24} />
                  </div>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div 
                      className="faq-answer-v2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="faq-support-card glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <HelpCircle size={48} color="var(--primary)" style={{ marginBottom: '20px' }} />
            <h3>Need more help?</h3>
            <p>Our dedicated support team is available 24/7 to help you with your queries.</p>
            <div className="support-actions">
              <a href="tel:+911234567890" className="btn btn-primary"><Phone size={18} /> Call Now</a>
              <a href="mailto:annupackersandmovers@gmail.com" className="btn btn-outline" style={{ border: '2px solid var(--primary)', color: 'var(--primary)' }}><Mail size={18} /> Email Us</a>
            </div>
            <div className="whatsapp-support">
              <MessageCircle size={20} />
              <span>WhatsApp Support: +91 987 654 3210</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
