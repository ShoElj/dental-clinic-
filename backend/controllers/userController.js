import { supabase } from "../supabase/supabaseClient.mjs";

// Create a new user
export const createUser = async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from("users")
    .insert([{ username, password: hashedPassword, role }])
    .select(); // Ensures the inserted row is returned

  if (error) return res.status(500).json({ error: error.message });
  if (!data || data.length === 0)
    return res.status(500).json({ error: "No data returned from insert" });

  res.status(201).json({ user: data[0] });
};

// Get all users
export const getAllUsers = async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ users: data });
};

// Get user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return res.status(404).json({ error: error.message });

  res.status(200).json({ user: data });
};

// Update a user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, role } = req.body;

  const updatedFields = {};
  if (username) updatedFields.username = username;
  if (password) updatedFields.password = await bcrypt.hash(password, 10);
  if (role) updatedFields.role = role;

  const { data, error } = await supabase
    .from("users")
    .update(updatedFields)
    .eq("id", id)
    .select(); // Ensures the updated row is returned

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ user: data[0] });
};

// Delete a user
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("users")
    .delete()
    .eq("id", id)
    .select(); // Ensures the deleted row is returned

  if (error) return res.status(500).json({ error: error.message });
  if (data.length === 0)
    return res.status(404).json({ error: "User not found" });

  res.status(200).json({ message: "User successfully deleted" });
};
