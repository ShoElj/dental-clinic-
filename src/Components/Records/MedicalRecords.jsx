import React, { useState } from 'react';
import { supabase } from '../../services/supabaseClient';

const MedicalRecords = ({ create }) => {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    patient_id: '',
    doctor_id: '',
    record_date: '',
    diagnosis: '',
    treatment_plan: ''
  });

  const fetchRecords = async () => {
    const { data, error } = await supabase.from('medical_records').select('*');
    if (data) setRecords(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('medical_records').insert([formData]);
    if (data) {
      alert('Medical record created successfully!');
      setFormData({
        patient_id: '',
        doctor_id: '',
        record_date: '',
        diagnosis: '',
        treatment_plan: ''
      });
    }
  };

  return create ? (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Patient ID"
        value={formData.patient_id}
        onChange={(e) => setFormData({ ...formData, patient_id: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Doctor ID"
        value={formData.doctor_id}
        onChange={(e) => setFormData({ ...formData, doctor_id: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <input
        type="date"
        value={formData.record_date}
        onChange={(e) => setFormData({ ...formData, record_date: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Diagnosis"
        value={formData.diagnosis}
        onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Treatment Plan"
        value={formData.treatment_plan}
        onChange={(e) => setFormData({ ...formData, treatment_plan: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">
        Create Medical Record
      </button>
    </form>
  ) : (
    <div>
      <button onClick={fetchRecords} className="bg-primary text-white px-4 py-2 rounded-md mb-4">
        Fetch Medical Records
      </button>
      <ul className="space-y-2">
        {records.map(record => (
          <li key={record.id} className="border rounded-md p-2">{record.diagnosis}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalRecords;
