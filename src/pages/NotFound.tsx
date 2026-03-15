import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '80vh', 
      textAlign: 'center',
      padding: '20px',
      color: 'var(--secondary)'
    }}>
      <AlertTriangle size={80} color="var(--primary)" style={{ marginBottom: '20px' }} />
      <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '10px' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ maxWidth: '500px', marginBottom: '40px', color: 'var(--light-text)' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Home size={20} />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
