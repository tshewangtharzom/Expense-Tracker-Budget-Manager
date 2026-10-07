import React, { useState } from 'react';
import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import WelcomeMessage from '../../components/ui/WelcomeMessage';

const Home = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [userNote, setUserNote] = useState('');

  return (
    <div style={{ maxWidth: '640px' }}>
      <PageTitle 
        title="Home" 
        subtitle="Welcome to your personal finance portal." 
        badge="Sprint 9" 
      />

      <WelcomeMessage 
        userName="Alex" 
        projectName="Expense Tracker" 
        organizationName="Budget Corp" 
      />

      <Card title="Subscription Status" description="Toggle your email alerts preference.">
        <p style={{ marginBottom: '1rem', color: '#0f172a', fontWeight: '500' }}>
          Current Status: <strong>{isSubscribed ? 'Subscribed' : 'Unsubscribed'}</strong>
        </p>

        {isSubscribed ? (
          <div style={{ padding: '0.55rem', backgroundColor: '#dcfce7', color: '#15803d', borderRadius: '4px', marginBottom: '1rem', fontSize: '0.875rem' }}>
            ✓ You are subscribed to receive weekly expense report digests.
          </div>
        ) : (
          <div style={{ padding: '0.55rem', backgroundColor: '#fef3c7', color: '#b45309', borderRadius: '4px', marginBottom: '1rem', fontSize: '0.875rem' }}>
            ! Email notifications are currently turned off.
          </div>
        )}

        <Button 
          label={isSubscribed ? "Unsubscribe" : "Subscribe to Weekly Reports"} 
          variant={isSubscribed ? "secondary" : "primary"}
          onClick={() => setIsSubscribed(!isSubscribed)} 
        />
      </Card>

      <Card title="Quick Note" description="Type below to see state update live as you type.">
        <input 
          type="text" 
          placeholder="Type a quick budget memo..."
          value={userNote}
          onChange={(e) => setUserNote(e.target.value)}
          style={{
            width: '100%',
            padding: '0.6rem',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            marginBottom: '0.75rem',
            outline: 'none',
            fontSize: '0.95rem'
          }}
        />
        <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem' }}>
          Live Preview: <em>{userNote ? userNote : '(Start typing above...)'}</em>
        </p>
      </Card>
    </div>
  );
};

export default Home;
