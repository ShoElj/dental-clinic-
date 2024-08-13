// backend/supabaseClient.mjs
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Access environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
// console.log('Supabase URL:', supabaseUrl);
// console.log('Supabase Key:', supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing environment variables for Supabase');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
