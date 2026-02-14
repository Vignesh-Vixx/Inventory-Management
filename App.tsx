
import React, { useState, useEffect } from 'react';
import { User, UserRole } from './types';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Requests from './components/Requests';
import Approval from './components/Approval';
import Issuing from './components/Issuing';
import Reports from './components/Reports';
import UserManagement from './components/UserManagement';
import ReceiptConfirmation from './components/ReceiptConfirmation';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Check session
  useEffect(() => {
    const savedUser = localStorage.getItem('inv_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('inv_user', JSON.stringify(u));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('inv_user');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'inventory': return <Inventory />;
      case 'my-requests': return <Requests user={user} />;
      case 'confirm-receipt': return <ReceiptConfirmation user={user} />;
      case 'approvals': return <Approval user={user} />;
      case 'issuing': return <Issuing user={user} />;
      case 'reports': return <Reports />;
      case 'users': return <UserManagement currentUser={user} />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout 
      user={user} 
      onLogout={handleLogout}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
