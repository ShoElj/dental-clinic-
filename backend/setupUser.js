import { hashPassword } from './passwordutils'; // Adjust path as per your project structure
import { supabase } from './supabaseClient.mjs'; // Adjust path as per your project structure

// Example of hashing passwords and inserting users
const setupUsers = async () => {
  try {
    // Hash passwords
    const hashedSuperAdminPassword = await hashPassword('Super001');
    const hashedDoctorPassword = await hashPassword('Doc002');
    const hashedDietitianPassword = await hashPassword('Diet003');
    const hashedAccountsPassword = await hashPassword('Acc004');

    // Insert users into Supabase
    const { data, error } = await supabase
      .from('users')
      .insert([
        { username: 'admin', password: hashedSuperAdminPassword, role: 'Super Admin' },
        { username: 'doctor01', password: hashedDoctorPassword, role: 'Doctor' },
        { username: 'dietitian01', password: hashedDietitianPassword, role: 'Dietitian' },
        { username: 'account01', password: hashedAccountsPassword, role: 'Accounts' }
      ]);

    if (error) {
      throw error;
    }

    console.log('Users inserted successfully:', data);

  } catch (error) {
    console.error('Error inserting users:', error.message);
  }
};

// Example usage
setupUsers();
