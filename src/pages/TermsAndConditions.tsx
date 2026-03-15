import React from 'react';
import { Shield, Clock, FileText } from 'lucide-react';
import '../styles/legal.css';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="section-title">
          <Shield size={48} color="var(--primary)" style={{ marginBottom: '20px' }} />
          <h2>Terms & Conditions</h2>
          <p>Please read these terms and conditions carefully before using our services.</p>
        </div>

        <div className="legal-container">
          <div className="legal-section">
            <div className="legal-header">
              <Clock size={24} />
              <h3>1. Booking and Cancellation</h3>
            </div>
            <p>Customers must book their move at least 3-7 days in advance. Cancellations made within 48 hours of the scheduled move will incur a 10% cancellation fee of the total estimated cost. We reserve the right to reschedule moves due to unforeseen circumstances like extreme weather or vehicle breakdown.</p>
          </div>

          <div className="legal-section">
            <div className="legal-header">
              <FileText size={24} />
              <h3>2. Service Scope</h3>
            </div>
            <p>Annu Packers and Movers provides packing, loading, transportation, unloading, and unpacking services. Our standard quote includes basic assembly and disassembly of standard furniture. Specialized items like heavy safes, pool tables, or high-end musical instruments may require additional charges.</p>
          </div>

          <div className="legal-section">
            <div className="legal-header">
              <Shield size={24} />
              <h3>3. Insurance and Liability</h3>
            </div>
            <p>We take extreme care of your belongings. However, in the case of any damage during transit, our liability is limited to the terms of the insurance policy purchased by the customer. Items packed by the customer themselves are not covered under our standard insurance for internal damages.</p>
          </div>

          <div className="legal-section">
            <div className="legal-header">
              <Clock size={24} />
              <h3>4. Payment Terms</h3>
            </div>
            <p>A 20% advance payment is required at the time of booking confirmation. The remaining 80% of the payment must be cleared upon completion of loading at the origin point or as agreed upon during the contract signing. We accept cash, UPI, and bank transfers.</p>
          </div>

          <div className="legal-section">
            <div className="legal-header">
              <FileText size={24} />
              <h3>5. Prohibited Items</h3>
            </div>
            <p>We do not transport hazardous materials, including but not limited to explosives, flammables, toxic substances, jewelry, cash, and high-value legal documents. Customers are responsible for ensuring that no such items are packed with their household goods.</p>
          </div>
        </div>

        <div className="legal-footer">
          <p>Last Updated: February 20, 2026</p>
          <p>If you have any questions regarding these terms, please contact us at <a href="mailto:annupackersandmovers@gmail.com">annupackersandmovers@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
