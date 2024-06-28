// src/services/supabaseClient.mjs
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv'
// Access environment variables using import.meta.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// Check if environment variables are properly defined
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing environment variables for Supabase');
}

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
