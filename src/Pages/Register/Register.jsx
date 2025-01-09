import { useState } from "react";
import { useRegisterUserMutation } from "../../redux/api/baseApi";
import {setCredentials } from '../../redux/features/authSlice';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Register = () => {
  const dispatch = useDispatch();
  const [ registerUser, { isLoading, error }] = useRegisterUserMutation(); // Get registerUser mutation hook
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Added role state
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        username,
        email,
        password,
        role
    }
    // console.log(username, email, password, role)
    try {
      const response = await registerUser(data).unwrap();
    
      console.log(response, 'response')
      
      // Dispatch action to set credentials in Redux store
      const user ={...response}
      dispatch(
        setCredentials(user)
      );
      navigate('/signin')

    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Register</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm text-gray-600">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="freelancer">Freelancer</option>
              <option value="client">Client</option>
              {/* <option value="user">User</option> */}
            </select>
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
