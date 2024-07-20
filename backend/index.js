// backend/index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { hashPassword, verifyPassword } from './passwordutils.js';
import { supabase } from './supabaseClient.mjs';

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust the origin to your React app's address
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
}));

app.post('/setupUsers', async (req, res) => {
    try {
        const hashedSuperAdminPassword = await bcrypt.hash('Super001', 10);
        const hashedDoctorPassword = await bcrypt.hash('Doc002', 10);
        const hashedDietitianPassword = await bcrypt.hash('Diet003', 10);
        const hashedAccountsPassword = await bcrypt.hash('Acc004', 10);

        const { data, error } = await supabase.from('users').insert([
            { username: 'admin', password: hashedSuperAdminPassword, role: 'Super Admin' },
            { username: 'doctor01', password: hashedDoctorPassword, role: 'Doctor' },
            { username: 'dietitian01', password: hashedDietitianPassword, role: 'Dietitian' },
            { username: 'account01', password: hashedAccountsPassword, role: 'Accounts' },
        ]);

        if (error) throw error;

        res.status(200).send('Users inserted successfully');
    } catch (error) {
        res.status(500).send(`Error inserting users: ${error.message}`);
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        console.log('Received login request for username:', username);

        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('username', username);

        if (error) {
            console.error('Error querying user:', error.message);
            return res.status(500).json({ error: 'Error querying user' });
        }

        if (data.length === 0) {
            console.log('User not found for username:', username);
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        const user = data[0];
        console.log('Found user:', user);

        const validPassword = await verifyPassword(password, user.password);

        if (!validPassword) {
            console.log('Invalid password for username:', username);
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        console.log('User logged in successfully:', username);
        res.json({ success: true, role: user.role });

    } catch (err) {
        console.error('Internal server error:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
