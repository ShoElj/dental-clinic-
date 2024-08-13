import { supabase } from "../supabase/supabaseClient.mjs";

// Create a new billing record
export const createBillingRecord = async (req, res) => {
  const { patient_id, amount, description } = req.body;

  if (!patient_id || amount == null) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { data, error } = await supabase
    .from("billing")
    .insert([{ patient_id, amount, description }])
    .select(); // Ensures the inserted row is returned

  if (error) return res.status(500).json({ error: error.message });
  if (!data || data.length === 0)
    return res.status(500).json({ error: "No data returned from insert" });

  res.status(201).json({ billing: data[0] });
};

// Get all billing records
export const getAllBillingRecords = async (req, res) => {
  const { data, error } = await supabase.from("billing").select("*");

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ billingRecords: data });
};

// Get billing record by ID
export const getBillingRecordById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("billing")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return res.status(404).json({ error: error.message });

  res.status(200).json({ billing: data });
};

// Update a billing record
export const updateBillingRecord = async (req, res) => {
  const { id } = req.params;
  const { amount, description } = req.body;

  const { data, error } = await supabase
    .from("billing")
    .update({ amount, description })
    .eq("id", id)
    .select(); // Ensures the updated row is returned

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ billing: data[0] });
};

// Delete a billing record
export const deleteBillingRecord = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("billing")
    .delete()
    .eq("id", id)
    .select(); // Ensures the deleted row is returned

  if (error) return res.status(500).json({ error: error.message });
  if (data.length === 0)
    return res.status(404).json({ error: "Billing record not found" });

  res.status(200).json({ message: "Billing record successfully deleted" });
};
