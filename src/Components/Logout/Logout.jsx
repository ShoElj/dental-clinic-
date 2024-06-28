import React from 'react';
import { supabase } from '../../services/supabaseClient';

const Logout = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
    } else {
      alert('Successfully logged out');
      window.location.href = '/'; // Redirect to home or login page after logout
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
      Logout
    </button>
  );
};

export default Logout;
