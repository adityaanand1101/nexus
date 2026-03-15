import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageCircle, CheckCircle, Zap } from 'lucide-react';
import '../styles/forms.css';

const ContactUs: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Support',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:annupackersandmovers@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="form-page-dark">
        <div className="container">
          <motion.div 
            className="form-container-dark dark-glass"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="form-success-dark">
              <div className="success-icon-dark">
                <CheckCircle size={80} color="var(--primary)" />
              </div>
              <h2 className="text-grad">Transmission Successful.</h2>
              <p>Thank you, {formData.name.split(' ')[0]}. Your message has been received by our global operations center. We will contact you at <strong>{formData.phone}</strong> shortly.</p>
              <div className="ref-dark">Ticket ID: #SUP-{Math.floor(Math.random() * 90000) + 10000}</div>
              <button onClick={() => setSubmitted(false)} className="btn btn-primary">Send New Message</button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-page-dark">
      <div className="container form-flex-dark">
        <motion.div 
          className="form-sidebar-dark"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="tag-dark">Global Network</span>
          <h2>Direct line to <br /><span className="text-grad">Operations.</span></h2>
          <p>Connect with our logistics experts across the nation. We are available 24/7 for critical move support.</p>
          
          <div className="benefit-grid-dark">
            <div className="benefit-dark">
              <Phone size={24} color="var(--primary)" />
              <div>
                <strong>Hotline</strong>
                <span>+91 9311091458</span>
              </div>
            </div>
            <div className="benefit-dark">
              <Mail size={24} color="var(--secondary)" />
              <div>
                <strong>Email</strong>
                <span>annupackersandmovers@gmail.com</span>
              </div>
            </div>
             <div className="benefit-dark">
              <MapPin size={24} color="var(--accent)" />
              <div>
                <strong>HQ</strong>
                <span>Pitampura, New Delhi - 110034</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="form-main-dark dark-glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <form className="dark-form" onSubmit={handleSubmit}>
            <div className="form-row-dark">
              <div className="form-group-dark">
                <label><User size={16} /> Name</label>
                <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
              </div>
              <div className="form-group-dark">
                <label><Phone size={16} /> Contact</label>
                <input type="tel" name="phone" placeholder="Mobile Number" required onChange={handleChange} />
              </div>
            </div>

            <div className="form-row-dark">
              <div className="form-group-dark">
                <label><Mail size={16} /> Email Address</label>
                <input type="email" name="email" placeholder="email@example.com" required onChange={handleChange} />
              </div>
              <div className="form-group-dark">
                <label><Zap size={16} /> Subject</label>
                <select name="subject" onChange={handleChange}>
                  <option value="General Support">General Support</option>
                  <option value="Technical Inquiry">Technical Inquiry</option>
                  <option value="Billing">Billing & Invoice</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>
            </div>

            <div className="form-group-dark">
              <label><MessageCircle size={16} /> Message</label>
              <textarea name="message" rows={4} placeholder="Briefly describe your query..." onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full-dark">
              Send Transmission <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
