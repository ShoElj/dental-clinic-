import React, { useState } from 'react';
import { supabase } from '../../services/supabaseClient';

const CreateRecord = () => {
  const [formData, setFormData] = useState({
    patient_id: '',
    doctor_id: '',
    record_date: '',
    diagnosis: '',
    treatment_plan: ''
  });

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
    } else {
      alert(error.message);
    }
  };

  return (
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
  );
};

export default CreateRecord;
