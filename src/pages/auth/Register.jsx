import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) return;
    console.log("register", form);
  };
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:block bg-gradient-to-br from-secondary to-accent" />
      <div className="flex flex-col justify-center p-8 space-y-4 bg-white">
        <h1 className="text-2xl font-bold">Sign Up</h1>
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
          <label className="block">
            <span className="text-sm">Confirm Password</span>
            <input
              className="mt-1 w-full p-2 border rounded"
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="w-full py-2 bg-primary text-white rounded">
            Create Account
          </button>
        </form>
        <p className="text-sm">
          Already have an account? <Link className="text-primary" to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
