import { createClient } from "@supabase/supabase-js";

// Function to get environment variables
const getEnvVariable = (key, defaultValue) => {
  const value = import.meta.env[key] || defaultValue;
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

// Get Supabase URL and Key from environment variables
const supabaseUrl = getEnvVariable("VITE_SUPABASE_URL");
const supabaseKey = getEnvVariable("VITE_SUPABASE_ANON_KEY");

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to check Supabase connection
export const checkSupabaseConnection = async () => {
  try {
    // Query users_table to check connection
    let { data, error } = await supabase
      .from("users_table")
      .select("*")
      .limit(1);

    if (error) {
      console.error("Error connecting to Supabase:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Unexpected error:", error);
    return false;
  }
};
