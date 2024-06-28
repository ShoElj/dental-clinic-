import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';

const ViewProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single();

      if (data) {
        setProfile(data);
      } else {
        alert(error.message);
      }
    };

    fetchProfile();
  }, [id]);

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {profile ? (
        <div>
          <h2 className="text-xl font-bold mb-4">{profile.full_name}</h2>
          <p>Date of Birth: {profile.date_of_birth}</p>
          <p>Address: {profile.address}</p>
          <p>Phone Number: {profile.phone_number}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewProfile;
