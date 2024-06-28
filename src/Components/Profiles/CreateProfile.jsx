import React, { useState } from 'react';
import { supabase } from '../../services/supabaseClient';

// CreateProfile component to handle user profile creation
const CreateProfile = () => {
  // State to hold the form data for creating a new profile
  const [formData, setFormData] = useState({
    user_id: '',
    full_name: '',
    date_of_birth: '',
    address: '',
    phone_number: ''
  });

  // Function to handle form submission for creating a new profile
  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Attempt to insert the form data into the 'profiles' table in the database
    const { data, error } = await supabase.from('profiles').insert([formData]);
    // If the insertion is successful
    if (data) {
      // Alert the user that the profile was created successfully
      alert('Profile created successfully!');
      // Reset the form data after successful submission
      setFormData({
        user_id: '',
        full_name: '',
        date_of_birth: '',
        address: '',
        phone_number: ''
      });
    }
  };

  // JSX for the form to create a new profile
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User ID"
        value={formData.user_id}
        onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Full Name"
        value={formData.full_name}
        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
      />
      <input
        type="date"
        value={formData.date_of_birth}
        onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone_number}
        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
      />
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default CreateProfile;
