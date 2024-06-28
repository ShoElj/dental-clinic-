// Importing necessary libraries and services
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';

// ViewProfile component to display a user's profile
const ViewProfile = () => {
  // Extracting the id from the URL parameters
  const { id } = useParams();
  // State to hold the profile data
  const [profile, setProfile] = useState(null);

  // Effect to fetch the profile data when the component mounts or id changes
  useEffect(() => {
    // Function to fetch the profile data
    const fetchProfile = async () => {
      // Attempt to fetch the profile data from the 'profiles' table
      const { data, error } = await supabase
        .from('profiles')
        .select('*') // Selecting all columns
        .eq('id', id) // Filtering by the id parameter
        .single(); // Fetching a single record

      // If data is found, update the state with the fetched data
      if (data) {
        setProfile(data);
      } else {
        // If there's an error, alert the error message
        alert(error.message);
      }
    };

    // Call the fetchProfile function
    fetchProfile();
  }, [id]);

  // JSX to render the profile information or a loading message
  return (
    <div>
      {profile ? (
        <div>
          <h2>{profile.full_name}</h2>
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

// Exporting the ViewProfile component
export default ViewProfile;
