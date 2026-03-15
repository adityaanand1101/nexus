import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Phone, Mail, MessageSquare, Zap, CheckCircle } from 'lucide-react';
import '../styles/forms.css';

const GetEstimate: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Enterprise Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              <p>Thank you, {formData.name.split(' ')[0]}. Your inquiry has been routed to our logistics engineering team. We will contact you at <strong>{formData.phone}</strong> shortly.</p>
              <div className="ref-dark">Ticket ID: #LOG-{Math.floor(Math.random() * 90000) + 10000}</div>
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
          <span className="tag-dark">Direct Access</span>
          <h2>Connect with <br /><span className="text-grad">Logistics Experts.</span></h2>
          <p>Have complex requirements? Our engineering team is ready to design your perfect transition.</p>
          
          <div className="benefit-grid-dark">
            <div className="benefit-dark">
              <Zap size={24} color="var(--primary)" />
              <div>
                <strong>Rapid Response</strong>
                <span>Direct line to operations</span>
              </div>
            </div>
            <div className="benefit-dark">
              <MessageSquare size={24} color="var(--secondary)" />
              <div>
                <strong>Expert Advisory</strong>
                <span>Strategic move planning</span>
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
                <label><Mail size={16} /> Corporate Email</label>
                <input type="email" name="email" placeholder="email@company.com" required onChange={handleChange} />
              </div>
              <div className="form-group-dark">
                <label><MessageSquare size={16} /> Subject</label>
                <select name="subject" onChange={handleChange}>
                  <option value="Enterprise Inquiry">Enterprise Transition</option>
                  <option value="Residential">Premium Residential</option>
                  <option value="International">Global Shifting</option>
                  <option value="Support">System Support</option>
                </select>
              </div>
            </div>

            <div className="form-group-dark">
              <label><MessageSquare size={16} /> Brief Your Requirements</label>
              <textarea name="message" rows={4} placeholder="Describe your move requirements..." onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full-dark">
              Initiate Contact <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default GetEstimate;
