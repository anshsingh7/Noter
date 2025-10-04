import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/userAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [useFaceAuth, setUseFaceAuth] = useState(false);
  const navigate = useNavigate();

  const { user, loading, error, loginUserData } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || (!useFaceAuth && !password)) {
      alert("Please fill all fields!");
      return;
    }

    try {
      // if using face, you can handle differently here
      await loginUserData({ email, password, useFaceAuth });
      // Navigation will happen automatically via useEffect
    } catch (err) {
      // error is already handled in context
    }
  };

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>

          {/* Password (hide if toggle ON) */}
          {!useFaceAuth && (
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
          )}

          {/* Toggle for Face Auth */}
          <div className="flex items-center gap-2">
            <input
              id="facePasswordToggle"
              type="checkbox"
              checked={useFaceAuth}
              onChange={() => setUseFaceAuth(!useFaceAuth)}
              className="w-4 h-4 cursor-pointer"
            />
            <label
              htmlFor="facePasswordToggle"
              className="text-sm text-gray-700 cursor-pointer"
            >
              Use Face as Password
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : useFaceAuth ? "Login with Face" : "Login"}
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
        )}

        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-500 font-medium hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
