// backend/controllers/patientController.js
import { supabase } from "../supabase/supabaseClient.mjs";

export const createPatient = async (req, res) => {
  const { name, email, phone, address, medical_history } = req.body;

  if (!name) return res.status(400).json({ error: "Name is required" });

  const { data, error } = await supabase
    .from("patients")
    .insert([{ name, email, phone, address, medical_history }])
    .select();

  if (error) return res.status(500).json({ error: error.message });
  if (!data || data.length === 0)
    return res.status(500).json({ error: "No data returned from insert" });

  res.status(201).json({ patient: data[0] });
};

export const getAllPatients = async (req, res) => {
  const { data, error } = await supabase.from("patients").select("*");

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ patients: data });
};

export const getPatientById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("patients")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return res.status(404).json({ error: error.message });

  res.status(200).json({ patient: data });
};

export const updatePatient = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address, medical_history } = req.body;

  const { data, error } = await supabase
    .from("patients")
    .update({ name, email, phone, address, medical_history })
    .eq("id", id)
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ patient: data[0] });
};

export const deletePatient = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("patients")
    .delete()
    .eq("id", id)
    .select();

  if (error) return res.status(500).json({ error: error.message });
  if (data.length === 0)
    return res.status(404).json({ error: "Patient not found" });

  res.status(200).json({ message: "Patient successfully deleted" });
};
