import React, { useState, useEffect } from 'react';
import MenuPage from './components/MenuPage';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#/');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);

  // Track hash routing changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#/');
    };
    
    // Initial auth check
    const sessionToken = sessionStorage.getItem('luna_admin_session');
    if (sessionToken) {
      setIsAuthenticated(true);
      setIsDemoMode(sessionToken === 'demo-session-token');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLoginSuccess = (authenticated, demoMode) => {
    setIsAuthenticated(authenticated);
    setIsDemoMode(demoMode);
    // Redirect to admin panel hash
    window.location.hash = '#/admin';
  };

  const handleLogout = () => {
    sessionStorage.removeItem('luna_admin_session');
    setIsAuthenticated(false);
    setIsDemoMode(false);
    window.location.hash = '#/';
  };

  // Render correct page view
  if (currentRoute.startsWith('#/admin')) {
    return isAuthenticated ? (
      <AdminDashboard isDemoMode={isDemoMode} onLogout={handleLogout} />
    ) : (
      <AdminLogin onLoginSuccess={handleLoginSuccess} />
    );
  }

  // Default: Public Customer Menu
  return <MenuPage />;
}

export default App;
