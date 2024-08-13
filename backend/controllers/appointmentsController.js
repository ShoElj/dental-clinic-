// backend/controllers/appointmentController.js
import { supabase } from "../supabase/supabaseClient.mjs";

// Create a new appointment
export const createAppointment = async (req, res) => {
  const { patient_id, doctor_id, appointment_date, status, notes } = req.body;

  if (!patient_id || !doctor_id || !appointment_date || !status) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { data, error } = await supabase
    .from("appointments")
    .insert([{ patient_id, doctor_id, appointment_date, status, notes }])
    .select(); // Ensures the inserted row is returned

  if (error) return res.status(500).json({ error: error.message });
  if (!data || data.length === 0)
    return res.status(500).json({ error: "No data returned from insert" });

  res.status(201).json({ appointment: data[0] });
};

// Get all appointments
export const getAllAppointments = async (req, res) => {
  const { data, error } = await supabase.from("appointments").select("*");

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ appointments: data });
};

// Get appointment by ID
export const getAppointmentById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return res.status(404).json({ error: error.message });

  res.status(200).json({ appointment: data });
};

// Update appointment record
export const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const { patient_id, doctor_id, appointment_date, status, notes } = req.body;

  const { data, error } = await supabase
    .from("appointments")
    .update({ patient_id, doctor_id, appointment_date, status, notes })
    .eq("id", id)
    .select(); // Ensures the updated row is returned

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ appointment: data[0] });
};

// Delete an appointment record
export const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("appointments")
    .delete()
    .eq("id", id)
    .select(); // Ensures the deleted row is returned

  if (error) return res.status(500).json({ error: error.message });
  if (data.length === 0)
    return res.status(404).json({ error: "Appointment not found" });

  res.status(200).json({ message: "Appointment successfully deleted" });
};
