import React, { useState } from 'react';
import { supabase } from '../../services/supabaseClient';

const MedicalHistory = ({ create }) => {
  const [histories, setHistories] = useState([]);
  const [formData, setFormData] = useState({
    patient_id: '',
    condition: '',
    diagnosis_date: '',
    treatment_history: ''
  });

  const fetchHistories = async () => {
    const { data, error } = await supabase.from('medical_history').select('*');
    if (data) setHistories(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('medical_history').insert([formData]);
    if (data) {
      alert('Medical history created successfully!');
      setFormData({
        patient_id: '',
        condition: '',
        diagnosis_date: '',
        treatment_history: ''
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
        placeholder="Condition"
        value={formData.condition}
        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <input
        type="date"
        value={formData.diagnosis_date}
        onChange={(e) => setFormData({ ...formData, diagnosis_date: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Treatment History"
        value={formData.treatment_history}
        onChange={(e) => setFormData({ ...formData, treatment_history: e.target.value })}
        className="block w-full px-3 py-2 border rounded-md"
      />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">
        Create Medical History
      </button>
    </form>
  ) : (
    <div>
      <button onClick={fetchHistories} className="bg-primary text-white px-4 py-2 rounded-md mb-4">
        Fetch Medical Histories
      </button>
      <ul className="space-y-2">
        {histories.map(history => (
          <li key={history.id} className="border rounded-md p-2">{history.condition}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalHistory;
