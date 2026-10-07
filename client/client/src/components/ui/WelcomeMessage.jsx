import React from 'react';

const WelcomeMessage = ({ userName, projectName, organizationName }) => {
  return (
    <div style={{
      backgroundColor: '#e0f2fe',
      borderLeft: '4px solid #0284c7',
      padding: '1rem',
      borderRadius: '6px',
      marginBottom: '1.5rem'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', color: '#0369a1' }}>
        Welcome back, {userName}!
      </h3>
      <p style={{ margin: 0, color: '#334155', fontSize: '0.95rem' }}>
        Project: <strong>{projectName}</strong> | Organization: <strong>{organizationName}</strong>
      </p>
    </div>
  );
};

export default WelcomeMessage;
