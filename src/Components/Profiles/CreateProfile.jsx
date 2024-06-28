import React, { useState } from 'react';
import { supabase } from '../../services/supabaseClient';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    full_name: '',
    date_of_birth: '',
    address: '',
    phone_number: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('profiles').insert([formData]);
    if (data) {
      alert('Profile created successfully!');
      setFormData({
        user_id: '',
        full_name: '',
        date_of_birth: '',
        address: '',
        phone_number: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="User ID"
        value={formData.user_id}
        onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Full Name"
        value={formData.full_name}
        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <input
        type="date"
        value={formData.date_of_birth}
        onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone_number}
        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">
        Create Profile
      </button>
    </form>
  );
};

export default CreateProfile;
