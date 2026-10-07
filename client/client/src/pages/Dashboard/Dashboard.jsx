import React, { useState } from 'react';
import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const Dashboard = () => {
  const [notificationCount, setNotificationCount] = useState(3);

  return (
    <div>
      <PageTitle 
        title="Dashboard" 
        subtitle="Overview of financial statistics and notifications." 
        badge={`Alerts: ${notificationCount}`} 
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <Card title="Notifications Counter" description="Manage unread alert count">
          <h2 style={{ fontSize: '2rem', margin: '0 0 1rem 0', color: '#4f46e5' }}>{notificationCount}</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button label="Clear All" variant="secondary" onClick={() => setNotificationCount(0)} />
            <Button label="Add Alert" variant="primary" onClick={() => setNotificationCount(prev => prev + 1)} />
          </div>
        </Card>

        <Card title="Monthly Budget" description="Allocated baseline">
          <h2 style={{ fontSize: '1.8rem', margin: '0', color: '#16a34a' }}>$5,400.00</h2>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
