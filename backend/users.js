const express = require('express');
const bcrypt = require('bcryptjs');
const { supabase } = require('./supabaseClient.mjs'); // Adjust the path as per your project structure
const { hashPassword } = require('../passwordUtils'); // Adjust the path as per your project structure
const router = express.Router();

// Route to handle user login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query user from Supabase by username
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .single();

    if (error) {
      console.error('Error querying user:', error.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Authentication successful
    res.json({ message: 'Login successful', role: user.role });

  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
