// ============================================
// FILE: src/pages/Login.tsx
// ============================================

import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { loginWithEmail, loginWithGoogle } from "../services/auth.service";
import { saveAuthSession, saveSessionAuth } from "../store/authStore";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const completeLogin = (
    authResponse: Awaited<ReturnType<typeof loginWithEmail>>,
  ) => {
    if (rememberMe) {
      saveAuthSession(authResponse);
    } else {
      saveSessionAuth(authResponse);
    }

    navigate("/");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const authResponse = await loginWithEmail(email, password);
      completeLogin(authResponse);
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      const authResponse = await loginWithGoogle();
      completeLogin(authResponse);
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Google login failed. Please try again.",
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
          <h2 className="text-4xl font-bold text-primary">Welcome Back</h2>

          <p className="mt-4 text-gray-600">
            Login to continue booking trusted services.
          </p>
        </div>

        {/* FORM */}
        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
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
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              Remember me
            </label>

            <button type="button" className="text-accent font-semibold">
              Forgot Password?
            </button>
          </div>

          {error && (
            <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            disabled={loading || googleLoading}
            className="w-full bg-[#08233d] hover:bg-[#092f52] disabled:cursor-not-allowed disabled:opacity-70 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
          >
            {loading ? "Logging in..." : "Login"}
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
            onClick={handleGoogleLogin}
            disabled={loading || googleLoading}
            className="
              group
              relative
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-gray-200
              bg-white
              hover:bg-gray-50
              disabled:opacity-70
              disabled:cursor-not-allowed
              transition-all
              duration-300
              shadow-sm
              hover:shadow-lg
                 "
          >
            <div
              className="
      flex
      items-center
      justify-center
      gap-4
      py-4
      px-6
    "
            >
              {/* GOOGLE ICON */}
              <div
                className="
        w-10
        h-10
        rounded-full
        bg-white
        border
        border-gray-100
        flex
        items-center
        justify-center
        shadow-sm
      "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-5 h-5"
                >
                  <path
                    fill="#FFC107"
                    d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
                  />

                  <path
                    fill="#FF3D00"
                    d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                  />

                  <path
                    fill="#4CAF50"
                    d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
                  />

                  <path
                    fill="#1976D2"
                    d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.4 5.5-6.5 6.9l6.2 5.2C39.7 36.1 44 30.7 44 24c0-1.3-.1-2.7-.4-3.5z"
                  />
                </svg>
              </div>

              {/* TEXT */}
              <span
                className="
        text-[16px]
        font-semibold
        tracking-wide
        text-primary
      "
              >
                {googleLoading
                  ? "Connecting to Google..."
                  : "Continue with Google"}
              </span>
            </div>
          </button>
        </form>

        {/* SIGNUP */}
        <p className="mt-8 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-accent font-semibold cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
