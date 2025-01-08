import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../redux/api/baseApi";
import { setCredential } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";



const SignIn = () => {
  const dispatch = useDispatch();
  const [loginUser, { isLoading, error }] = useLoginUserMutation(); // Get loginUser mutation hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
        const response = await res.json()
      // Dispatch action to set credentials in Redux store
      dispatch(
        setCredential({
          accessToken: response?.access,
          refreshToken: response?.refresh,
        })
      );
      navigate('/')
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Sign In</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Dont have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
