import React, { useState } from 'react';
import { supabase } from '../../services/supabaseClient';

// MedicalRecords component to manage medical records
const MedicalRecords = ({ create }) => {
  // State to hold the list of medical records
  const [records, setRecords] = useState([]);
  // State to hold the form data for creating a new medical record
  const [formData, setFormData] = useState({
    patient_id: '',
    doctor_id: '',
    record_date: '',
    diagnosis: '',
    treatment_plan: ''
  });

  // Function to fetch medical records from the database
  const fetchRecords = async () => {
    const { data, error } = await supabase.from('medical_records').select('*');
    if (data) setRecords(data);
  };

  // Function to handle form submission for creating a new medical record
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('medical_records').insert([formData]);
    if (data) {
      alert('Medical record created successfully!');
      // Reset form data after successful submission
      setFormData({
        patient_id: '',
        doctor_id: '',
        record_date: '',
        diagnosis: '',
        treatment_plan: ''
      });
    }
  };

  // Conditional rendering based on the 'create' prop
  return create ? (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patient ID"
        value={formData.patient_id}
        onChange={(e) => setFormData({ ...formData, patient_id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Doctor ID"
        value={formData.doctor_id}
        onChange={(e) => setFormData({ ...formData, doctor_id: e.target.value })}
      />
      <input
        type="date"
        value={formData.record_date}
        onChange={(e) => setFormData({ ...formData, record_date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Diagnosis"
        value={formData.diagnosis}
        onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })}
      />
      <input
        type="text"
        placeholder="Treatment Plan"
        value={formData.treatment_plan}
        onChange={(e) => setFormData({ ...formData, treatment_plan: e.target.value })}
      />
      <button type="submit">Create Medical Record</button>
    </form>
  ) : (
    <div>
      <button onClick={fetchRecords}>Fetch Medical Records</button>
      <ul>
        {records.map(record => (
          <li key={record.id}>{record.diagnosis}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalRecords;
