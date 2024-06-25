import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://egpoejmtfzfpsistscdf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVncG9lam10ZnpmcHNpc3RzY2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzMDA0NDksImV4cCI6MjAzNDg3NjQ0OX0.Dho-3unq0gHadlXjH3fiWvb7DQDcxuaYaJ3ftsXh1hY';

export const supabase = createClient(supabaseUrl, supabaseKey);
