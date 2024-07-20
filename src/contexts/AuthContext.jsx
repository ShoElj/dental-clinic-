// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient'; // Importing supabase client for authentication

// Creating the context for authentication
const AuthContext = createContext();

// Provider component to wrap the app and manage authentication state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to store the current user
  const [role, setRole] = useState(null); // State to store the user's role

  // Effect to handle authentication state changes
  useEffect(() => {
    // Function to fetch the current session
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error getting session:', error);
      } else {
        const session = data.session;
        setUser(session?.user ?? null); // Setting the user state based on the session

        // If there's a user in the session, fetch their role
        if (session?.user) {
          fetchUserRole(session.user.id);
        }
      }
    };

    getSession();

    // Setting up a listener for authentication state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null); // Updating the user state on state change

      // Fetching the user's role on state change if there's a user
      if (session?.user) {
        fetchUserRole(session.user.id);
      }
    });

    // Cleanup function to unsubscribe from the listener on component unmount
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  // Function to fetch the user's role based on their ID
  const fetchUserRole = async (userId) => {
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', userId)
      .single();

    if (data) {
      setRole(data.role); // Setting the role state
      localStorage.setItem('role', data.role); // Storing the role in local storage
    }
  };

  // Function to handle sign in
  const signIn = async (email, password) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error; // Throwing error if sign in fails
    await fetchUserRole(user.id); // Fetching the user's role after sign in
  };

  // Function to handle sign out
  const signOut = async () => {
    await supabase.auth.signOut(); // Signing out the user
    setUser(null); // Resetting the user state
    setRole(null); // Resetting the role state
    localStorage.removeItem('role'); // Removing the role from local storage
  };

  // Providing the context to the app
  return (
    <AuthContext.Provider value={{ user, role, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the authentication context
export const useAuth = () => useContext(AuthContext);
