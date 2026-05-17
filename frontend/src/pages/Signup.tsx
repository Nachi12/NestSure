// ============================================
// FILE: src/pages/Signup.tsx
// ============================================

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
} from "lucide-react";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import {
  loginWithGoogle,
  registerWithEmail,
} from "../services/auth.service";
import { saveAuthSession } from "../store/authStore";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const authResponse = await registerWithEmail(name, email, password);
      saveAuthSession(authResponse);
      navigate("/");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      const authResponse = await loginWithGoogle();
      saveAuthSession(authResponse);
      navigate("/");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Google signup failed. Please try again."
      );
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-[32px] shadow-2xl border border-gray-100 p-10"
      >
        {/* LOGO */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-primary text-lg">
            NS
          </div>

          <h1 className="text-4xl font-bold">
            <span className="text-primary">Nest</span>
            <span className="text-accent">Sure</span>
          </h1>
        </div>

        {/* TEXT */}
        <div className="text-center mt-8">
          <h2 className="text-4xl font-bold text-primary">
            Create Account
          </h2>

          <p className="mt-4 text-gray-600">
            Join NestSure and access trusted home services.
          </p>
        </div>

        {/* FORM */}
        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          {/* NAME */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 py-4 focus-within:border-accent transition-all">
              <User className="text-gray-400" size={20} />

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="flex-1 ml-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 py-4 focus-within:border-accent transition-all">
              <Mail className="text-gray-400" size={20} />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="flex-1 ml-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Password
            </label>

            <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 py-4 focus-within:border-accent transition-all">
              <Lock className="text-gray-400" size={20} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={6}
                required
                className="flex-1 ml-3 outline-none bg-transparent"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="text-gray-400" size={20} />
                ) : (
                  <Eye className="text-gray-400" size={20} />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            disabled={loading || googleLoading}
            className="w-full bg-primary hover:bg-[#08233d] disabled:cursor-not-allowed disabled:opacity-70 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-semibold uppercase text-gray-400">
              Or
            </span>
            <span className="h-px flex-1 bg-gray-200" />
          </div>

          <button
            type="button"
            onClick={handleGoogleSignup}
            disabled={loading || googleLoading}
            className="w-full border border-gray-200 hover:border-accent disabled:cursor-not-allowed disabled:opacity-70 text-primary py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
          >
            {googleLoading ? "Connecting..." : "Continue with Google"}
          </button>
        </form>

        {/* LOGIN */}
        <p className="mt-8 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-accent font-semibold cursor-pointer">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Signup;
