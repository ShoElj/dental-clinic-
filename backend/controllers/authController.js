// backend/controllers/authController.js
import bcrypt from "bcryptjs";
import { supabase } from "../supabase/supabaseClient.mjs";
import { hashPassword, verifyPassword } from "../utils/passwordUtils.js";

export const setupUsers = async (req, res) => {
  try {
    const hashedSuperAdminPassword = await bcrypt.hash("Super001", 10);
    const hashedDoctorPassword = await bcrypt.hash("Doc002", 10);
    const hashedDietitianPassword = await bcrypt.hash("Diet003", 10);
    const hashedAccountsPassword = await bcrypt.hash("Acc004", 10);

    const { data, error } = await supabase.from("users").insert([
      {
        username: "admin",
        password: hashedSuperAdminPassword,
        role: "Super Admin",
      },
      { username: "doctor01", password: hashedDoctorPassword, role: "Doctor" },
      {
        username: "dietitian01",
        password: hashedDietitianPassword,
        role: "Dietitian",
      },
      {
        username: "account01",
        password: hashedAccountsPassword,
        role: "Accounts",
      },
    ]);

    if (error) throw error;

    res.status(200).send("Users inserted successfully");
  } catch (error) {
    res.status(500).send(`Error inserting users: ${error.message}`);
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username);

    if (error) return res.status(500).json({ error: "Error querying user" });
    if (data.length === 0)
      return res
        .status(400)
        .json({ success: false, message: "User not found" });

    const user = data[0];
    const validPassword = await verifyPassword(password, user.password);

    if (!validPassword)
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });

    res.json({ success: true, role: user.role });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
