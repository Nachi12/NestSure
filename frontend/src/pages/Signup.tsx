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
import type { AuthResponse } from "../services/auth.service";
import { saveAuthSession } from "../store/authStore";

type AuthError = {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
};

const getAuthErrorMessage = (error: unknown, fallback: string) => {
  if (typeof error !== "object" || error === null) {
    return fallback;
  }

  const authError = error as AuthError;

  return authError.response?.data?.message || authError.message || fallback;
};

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
      saveAuthSession({
        user: authResponse.user,
        token: authResponse.token,
      });
      navigate("/");
    } catch (err: unknown) {
      setError(
        getAuthErrorMessage(err, "Signup failed. Please try again.")
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
      saveAuthSession({
        user: authResponse.user,
        token: authResponse.token,
      });
      navigate("/");
    } catch (err: unknown) {
      setError(
        getAuthErrorMessage(err, "Google signup failed. Please try again.")
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
          {/* CREATE ACCOUNT BUTTON */}
<button
  disabled={loading || googleLoading}
  className="
    group
    relative
    w-full
    overflow-hidden
    rounded-2xl
    bg-[#1FAF9A]
    hover:bg-[#169d8b]
    disabled:opacity-70
    disabled:cursor-not-allowed
    py-4
    px-6
    text-white
    font-semibold
    text-lg
    transition-all
    duration-300
    shadow-[0_15px_40px_rgba(31,175,154,0.25)]
    hover:shadow-[0_20px_50px_rgba(31,175,154,0.35)]
    hover:-translate-y-[2px]
  "
>

  {/* BUTTON GLOW */}
  <div
    className="
      absolute
      inset-0
      bg-white/10
      opacity-0
      group-hover:opacity-100
      transition-all
      duration-300
    "
  />

  <span className="relative z-10 flex items-center justify-center gap-3">

    {loading ? (
      <>
        <div
          className="
            w-5
            h-5
            border-2
            border-white/30
            border-t-white
            rounded-full
            animate-spin
          "
        />

        Creating Account...
      </>
    ) : (
      <>
        Create Account

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="
            w-5
            h-5
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </>
    )}

  </span>

</button>

{/* DIVIDER */}
<div className="relative flex items-center justify-center">

  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t border-gray-200"></div>
  </div>

  <div
    className="
      relative
      bg-white
      px-5
      text-xs
      font-semibold
      uppercase
      tracking-[0.25em]
      text-gray-400
    "
  >
    Or Continue With
  </div>

</div>

{/* GOOGLE BUTTON */}
<button
  type="button"
  onClick={handleGoogleSignup}
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
    hover:border-accent/40
    disabled:opacity-70
    disabled:cursor-not-allowed
    py-4
    px-6
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
      relative
      z-10
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
