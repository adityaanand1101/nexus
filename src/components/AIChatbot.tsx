import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/chatbot.css';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "System Online. I am the Nexus Defense Bot. How can I secure your perimeter today?", isUser: false }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    setMessages(prev => [...prev, { text: inputText, isUser: true }]);
    const userQuery = inputText.toLowerCase();
    setInputText("");

    setTimeout(() => {
      let botResponse = "Access Denied. Please contact a human agent for high-level clearance.";
      
      if (userQuery.includes('audit') || userQuery.includes('scan')) {
        botResponse = "Initiating preliminary scan protocols. We offer comprehensive vulnerability assessments. Would you like to schedule one?";
      } else if (userQuery.includes('hack') || userQuery.includes('breach')) {
        botResponse = "Emergency Protocol Alpha. Please contact our Incident Response Team immediately at +1 (800) 555-0199.";
      } else if (userQuery.includes('price') || userQuery.includes('cost')) {
        botResponse = "Security investment varies by infrastructure scale. Please use our 'Get Quote' module for an encrypted estimate.";
      } else if (userQuery.includes('hello') || userQuery.includes('hi')) {
        botResponse = "Greetings. Defense systems active. State your inquiry.";
      }

      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 1000);
  };

  return (
    <>
      <motion.button 
        className="chatbot-toggle-dark"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Bot size={28} />
        <span className="notification-dot"></span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chatbot-window-dark"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            <div className="chatbot-header-dark">
              <div className="chatbot-title">
                <Shield size={20} />
                <span>Nexus AI Command</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>

            <div className="chatbot-messages-dark">
              {messages.map((msg, index) => (
                <div key={index} className={`message-bubble ${msg.isUser ? 'user' : 'bot'}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input-dark">
              <input 
                type="text" 
                placeholder="Enter command..." 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend}><Send size={18} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
