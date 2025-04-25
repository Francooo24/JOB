"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    username: "",
    contact: "",
    address: "",
    gender: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("User registered successfully!");
        router.push("/login"); // ✅ Move this here
      } else {
        alert("Error: " + JSON.stringify(data));
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Navigation Header */}
      <header className="w-full bg-black text-white px-6 py-4 shadow-md fixed top-0 z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">YourLogo</div>
          {/* Navigation Links */}
          <nav className="animate-fade-in delay-100">
            <ul className="flex space-x-12 text-lg font-medium uppercase tracking-wide">
              <li>
              <Link href="/" className="hover:text-yellow-300 bg-black transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700">
                Home
              </Link>
              </li>

              <li>
              <Link href="/resume" className="hover:text-yellow-300 bg-black transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700">
                Resume
              </Link>
              </li>
              <li>
              <Link href="/about" className="hover:text-yellow-300 bg-black transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700">
                About Us
              </Link>
              </li>
              <li>
              <Link href="/login" className="hover:text-yellow-300 bg-black transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700">
                Login
              </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex flex-col gap-8 pt-32 px-8 sm:px-16 py-12 rounded-t-3xl shadow-lg border-t-4 border-gray-600 max-w-screen-xl mx-auto items-center">
        <h1 className="text-5xl font-extrabold text-center text-white">Create Your Account</h1>
        <form className="w-full space-y-6 p-6 border-4 border-gray-500 rounded-lg" onSubmit={handleSubmit}>
          {/* Form fields as before */}
          <div>
            <label htmlFor="first_name" className="block text-white">First Name</label>
            <input id="first_name" name="first_name" type="text" required value={formData.first_name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 bg-black text-white" />
          </div>

          <div>
            <label htmlFor="middle_name" className="block text-white">Middle Name</label>
            <input id="middle_name" name="middle_name" type="text" value={formData.middle_name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 bg-black text-white" />
          </div>

          <div>
            <label htmlFor="last_name" className="block text-white">Last Name</label>
            <input id="last_name" name="last_name" type="text" required value={formData.last_name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 bg-black text-white" />
          </div>

          <div>
            <label htmlFor="username" className="block text-white">Username</label>
            <input id="username" name="username" type="text" required value={formData.username} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 bg-black text-white" />
          </div>

          <div>
            <label htmlFor="contact" className="block text-white">Contact</label>
            <input id="contact" name="contact" type="text" value={formData.contact} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 bg-black text-white" />
          </div>

          <div>
            <label htmlFor="address" className="block text-white">Address</label>
            <input id="address" name="address" type="text" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 bg-black text-white" />
          </div>

          <div>
            <label htmlFor="gender" className="block text-white">Gender</label>
            <select id="gender" name="gender" required value={formData.gender} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 bg-black text-white">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block text-white">Email</label>
            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 bg-black text-white" />
          </div>

          <div>
            <label htmlFor="password" className="block text-white">Password</label>
            <input id="password" name="password" type="password" required value={formData.password} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 bg-black text-white" />
          </div>

          <div>
            <label htmlFor="confirm_password" className="block text-white">Confirm Password</label>
            <input id="confirm_password" name="confirm_password" type="password" required value={formData.confirm_password} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 bg-black text-white" />
          </div>

          <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 text-white text-lg font-semibold hover:scale-105 transition">
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
}
