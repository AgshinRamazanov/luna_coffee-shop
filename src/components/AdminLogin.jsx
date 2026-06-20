import React, { useState } from 'react';
import { supabase } from '../supabase';
import { KeyRound, Loader, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function AdminLogin({ onLoginSuccess }) {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Check if Supabase keys are configured
  const isSupabaseConfigured = !!(
    import.meta.env.VITE_SUPABASE_URL && 
    import.meta.env.VITE_SUPABASE_ANON_KEY &&
    supabase
  );

  // Computes SHA-256 hash of a string client-side
  const computeSHA256 = async (str) => {
    try {
      const msgBuffer = new TextEncoder().encode(str);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    } catch (e) {
      console.error('SHA-256 computation failed, using fallback hash:', e);
      // Fallback simple hash for compatibility
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return hash.toString(16);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      if (!isSupabaseConfigured) {
        // Fallback demo mode login (passcode: 'luna2026')
        if (password === 'luna2026') {
          sessionStorage.setItem('luna_admin_session', 'demo-session-token');
          onLoginSuccess(true, true); // (authenticated, isDemoMode)
        } else {
          setErrorMsg('Invalid passcode! (Hint: use "luna2026" for Demo Mode)');
        }
      } else {
        // Active Supabase mode
        const hash = await computeSHA256(password);
        
        // Invoke RPC verify function in Supabase
        const { data: isValid, error } = await supabase.rpc(
          'verify_admin_password', 
          { input_hash: hash }
        );

        if (error) throw error;

        if (isValid) {
          // Store token in session storage
          sessionStorage.setItem('luna_admin_session', hash);
          onLoginSuccess(true, false); // (authenticated, isDemoMode)
        } else {
          setErrorMsg('Incorrect admin password. Please try again.');
        }
      }
    } catch (err) {
      console.error('Login error:', err);
      setErrorMsg('Server connection failed. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-cream-light)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Back button */}
      <div style={{ padding: '1.5rem' }}>
        <a href="#/" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: '20px' }}>
          <ArrowLeft size={16} /> Back to Menu
        </a>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
        <form className="login-card" onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-cream-dark)',
              color: 'var(--wood-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <KeyRound size={28} />
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Admin Access</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--wood-medium)' }}>
              Enter password to manage categories, products, and prices.
            </p>
          </div>

          {!isSupabaseConfigured && (
            <div style={{
              backgroundColor: 'rgba(198, 139, 89, 0.08)',
              border: '1px solid var(--wood-light)',
              borderRadius: '8px',
              padding: '0.75rem',
              fontSize: '0.8rem',
              color: 'var(--wood-medium)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              textAlign: 'left'
            }}>
              <AlertTriangle size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Local Demo Mode:</strong> Since Supabase keys are not set yet, you can access the admin dashboard using the default passcode: <code>luna2026</code>.
              </div>
            </div>
          )}

          {errorMsg && (
            <div style={{
              backgroundColor: 'rgba(162, 72, 54, 0.08)',
              border: '1px solid var(--danger)',
              color: 'var(--danger)',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              textAlign: 'left'
            }}>
              {errorMsg}
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="admin-pass">Passcode</label>
            <input
              type="password"
              id="admin-pass"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{ width: '100%', padding: '0.85rem' }}
          >
            {loading ? (
              <>
                <Loader className="animate-spin" size={18} style={{ animation: 'spin 1.5s linear infinite' }} /> Checking passcode...
              </>
            ) : (
              'Access Panel'
            )}
          </button>
          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </form>
      </div>
    </div>
  );
}
