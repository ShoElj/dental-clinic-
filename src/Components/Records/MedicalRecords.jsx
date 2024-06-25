import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabaseClient';

const MedicalRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    const { data, error } = await supabase
      .from('medical_records')
      .select('*');
    if (error) {
      console.error('Error fetching records:', error);
    } else {
      setRecords(data);
    }
  };

  return (
    <div>
      <h2>Medical Records</h2>
      <ul>
        {records.map(record => (
          <li key={record.id}>{record.patient_name}: {record.details}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalRecords;
