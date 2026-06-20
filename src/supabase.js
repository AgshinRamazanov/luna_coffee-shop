import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabaseInstance = null;

// Only call createClient if URL is a valid string to prevent module load crash
if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')) {
  try {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  } catch (e) {
    console.error('Failed to create Supabase client:', e);
  }
} else {
  console.log('Running in client-only demo mode (no valid Supabase credentials).');
}

export const supabase = supabaseInstance;
