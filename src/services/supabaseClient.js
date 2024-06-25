import { createClient } from '@supabase/supabase-js';

// Import environment variables for Supabase URL and Key
// Ensure that the environment variables are correctly set in the .env.local file
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Check if the environment variables are defined
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase URL or Key. Please check your .env.local file.');
}

// Create a Supabase client using the environment variables
export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to check if the connection to Supabase is successful
export const checkSupabaseConnection = async () => {
  try {
    // Attempt to fetch data from a test table
    let { data, error } = await supabase.from('test_table').select('*').limit(1);
    
    // If there is an error, log it and return false
    if (error) {
      console.error('Error connecting to Supabase:', error);
      return false;
    }
    
    // If data is fetched successfully, return true
    return true;
  } catch (error) {
    // Catch any other errors and log them
    console.error('Unexpected error:', error);
    return false;
  }
};
