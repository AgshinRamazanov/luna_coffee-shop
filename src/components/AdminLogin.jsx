import { useState } from 'react';
import { supabase } from '../supabase';
import { KeyRound, Loader, AlertTriangle, ArrowLeft } from 'lucide-react';


export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Check if Supabase keys are configured
  const isSupabaseConfigured = !!(
    import.meta.env.VITE_SUPABASE_URL && 
    import.meta.env.VITE_SUPABASE_ANON_KEY &&
    supabase
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      // Check for admin credentials
      if (email.trim() === 'adminluna@gence.com' && password === 'lunaboss') {
        sessionStorage.setItem('luna_admin_session', 'demo-session-token');
        onLoginSuccess(true, true);
        return;
      }

      if (!isSupabaseConfigured) {
        setErrorMsg('Yanlış e-poçt və ya şifrə!');
      } else {
        // Active Supabase mode with secure Auth
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password: password,
        });

        if (error) {
          setErrorMsg('Giriş alınmadı. E-poçt və ya şifrə yanlışdır.');
          console.error('Sign-in error:', error.message);
          return;
        }

        if (data.user) {
          sessionStorage.setItem('luna_admin_session', data.session.access_token);
          onLoginSuccess(true, false); // (authenticated, isDemoMode)
        }
      }
    } catch (err) {
      console.error('Login error:', err);
      setErrorMsg('Serverlə bağlantı qurulmadı. Bir az sonra yenidən cəhd edin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-cream-light)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Back button */}
      <div style={{ padding: '1.5rem' }}>
        <a href="#/" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: '20px' }}>
          <ArrowLeft size={16} /> Menyuya Qayıt
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
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Admin Girişi</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--wood-medium)' }}>
              Kateqoriyaları, məhsulları və qiymətləri idarə etmək üçün giriş məlumatlarını daxil edin.
            </p>
          </div>



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
            <label className="form-label" htmlFor="admin-email">E-poçt ünvanı</label>
            <input
              type="email"
              id="admin-email"
              className="form-control"
              placeholder="admin@luna.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              autoFocus
            />
          </div>

          <div className="form-group" style={{ marginTop: '1rem' }}>
            <label className="form-label" htmlFor="admin-pass">Şifrə</label>
            <input
              type="password"
              id="admin-pass"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{ width: '100%', padding: '0.85rem', marginTop: '1.5rem' }}
          >
            {loading ? (
              <>
                <Loader className="animate-spin" size={18} style={{ animation: 'spin 1.5s linear infinite' }} /> Giriş yoxlanılır...
              </>
            ) : (
              'Daxil ol'
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
