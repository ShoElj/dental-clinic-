import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import { supabase } from "../../services/supabaseClient.mjs";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/logo.png";

const Login = () => {
  // State for username, password, and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Make a POST request to the login endpoint
      const { data } = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      console.log("Login response:", data);
      // Handle successful login
      if (data.role) {
        const { role } = data;

        // // Navigate to different routes based on user role
        // switch (role) {
        //   case "Super Admin":
        //     navigate("/superadmin");
        //     break;
        //   case "Doctor":
        //     navigate("/doctor");
        //     break;
        //   case "Accounts":
        //     navigate("/accounts");
        //     break;
        //   case "Dietitian":
        //     navigate("/dietitian");
        //     break;
        //   default:
        //     // Handle unknown role or default redirection
        //     navigate("/");
        //     break;
        // }
        // Update context with user data
        login({ username, role });

        // Navigate to different routes based on user role
        navigate(`/${role.toLowerCase()}`);
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      // Set error message if login fails
      setError(
        "Login failed: " + (error.response?.data?.error || error.message)
      );
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
