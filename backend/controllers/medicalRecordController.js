import { supabase } from "../supabase/supabaseClient.mjs";

// Create a new medical record
export const createMedicalRecord = async (req, res) => {
  const { patient_id, diagnosis, treatment, notes } = req.body;

  if (!patient_id || !diagnosis || !treatment) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { data, error } = await supabase
    .from("medical_records")
    .insert([{ patient_id, diagnosis, treatment, notes }])
    .select(); // Ensures the inserted row is returned

  if (error) return res.status(500).json({ error: error.message });
  if (!data || data.length === 0)
    return res.status(500).json({ error: "No data returned from insert" });

  res.status(201).json({ medicalRecord: data[0] });
};

// Get all medical records
export const getAllMedicalRecords = async (req, res) => {
  const { data, error } = await supabase.from("medical_records").select("*");

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ medicalRecords: data });
};

// Get medical record by ID
export const getMedicalRecordById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("medical_records")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return res.status(404).json({ error: error.message });

  res.status(200).json({ medicalRecord: data });
};

// Update a medical record
export const updateMedicalRecord = async (req, res) => {
  const { id } = req.params;
  const { diagnosis, treatment, notes } = req.body;

  const { data, error } = await supabase
    .from("medical_records")
    .update({ diagnosis, treatment, notes })
    .eq("id", id)
    .select(); // Ensures the updated row is returned

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ medicalRecord: data[0] });
};

// Delete a medical record
export const deleteMedicalRecord = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("medical_records")
    .delete()
    .eq("id", id)
    .select(); // Ensures the deleted row is returned

  if (error) return res.status(500).json({ error: error.message });
  if (data.length === 0)
    return res.status(404).json({ error: "Medical record not found" });

  res.status(200).json({ message: "Medical record successfully deleted" });
};
