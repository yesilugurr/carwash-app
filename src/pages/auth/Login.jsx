import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login", form);
  };
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:block bg-gradient-to-br from-primary to-secondary" />
      <div className="flex flex-col justify-center p-8 space-y-4 bg-white">
        <h1 className="text-2xl font-bold">Log In</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block">
            <span className="text-sm">Email</span>
            <input
              className="mt-1 w-full p-2 border rounded"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block">
            <span className="text-sm">Password</span>
            <input
              className="mt-1 w-full p-2 border rounded"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="w-full py-2 bg-primary text-white rounded">
            Log In
          </button>
        </form>
        <p className="text-sm">
          Don't have an account? <Link className="text-primary" to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
