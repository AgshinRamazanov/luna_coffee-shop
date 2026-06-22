import { useState, useEffect } from 'react';
import MenuPage from './components/MenuPage';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { supabase } from './supabase';

function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#/');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('luna_theme') === 'dark';
  });

  // Sync theme to document body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('luna_theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('luna_theme', 'light');
    }
  }, [isDarkMode]);

  // Track hash routing changes and session checks
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#/');
    };
    
    const checkSession = async () => {
      const sessionToken = sessionStorage.getItem('luna_admin_session');
      if (sessionToken === 'demo-session-token') {
        setIsAuthenticated(true);
        setIsDemoMode(true);
        return;
      }

      // Check for active Supabase Auth session
      const hasEnv = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY && supabase;
      if (hasEnv) {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (session) {
            setIsAuthenticated(true);
            setIsDemoMode(false);
            sessionStorage.setItem('luna_admin_session', session.access_token);
          }
        } catch (err) {
          console.error('Error restoring session:', err);
        }
      }
    };

    checkSession();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLoginSuccess = (authenticated, demoMode) => {
    setIsAuthenticated(authenticated);
    setIsDemoMode(demoMode);
    // Redirect to admin panel hash
    window.location.hash = '#/admin';
  };

  const handleLogout = async () => {
    sessionStorage.removeItem('luna_admin_session');
    const hasEnv = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY && supabase;
    if (hasEnv) {
      try {
        await supabase.auth.signOut();
      } catch (err) {
        console.error('Error signing out:', err);
      }
    }
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
  return <MenuPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
}

export default App;
