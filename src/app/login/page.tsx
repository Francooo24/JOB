"use client";
import Link from "next/link"; 
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        router.push("/"); // Redirect to the dashboard or other page upon successful login
      } else {
        alert("Error: " + JSON.stringify(data));
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="w-full from-gray-600 via-gray-500 to-gray-400 text-white shadow-xl fixed top-0 left-0 z-10">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8 py-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Image
              className="rounded-full shadow-xl transform transition-all hover:scale-110"
              src="/images/as.jpg"
              alt="Internship & Job Portal Logo"
              width={40}
              height={40}
              priority
            />
          </div>
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

      <main className="flex flex-col gap-8 pt-28 px-8 sm:px-16 py-12 rounded-t-3xl shadow-lg border-t-4 border-gray-600 max-w-screen-xl mx-auto items-center transition-all duration-500 ease-in-out transform hover:scale-105">
        {/* Login Title */}
        <h1 className="text-5xl font-extrabold text-center text-white tracking-wide pb-4">
          Login to Your Account
        </h1>
        <p className="text-center text-xl text-white mt-2">
          Please enter your credentials to continue your journey with us.
        </p>

        {/* Login Form */}
        <div className="w-full mt-8 p-6 rounded-lg shadow-xl border-4 border-gray-500 hover:shadow-2xl transform transition-all">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 text-white py-3 rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:border-yellow-600 transition duration-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-lg font-semibold text-white mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 text-white py-3 rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:border-yellow-600 transition duration-300"
                placeholder="Enter your password"
              />
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-600 to-gray-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 transition duration-300 transform hover:scale-105"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
        <p className="text-white">
          Don't have an account?{" "}
          <Link href="/signup" className="text-yellow-500 font-semibold hover:text-yellow-300 transition-colors">
            Sign Up
          </Link> 
        </p>

        </div>
      </main>
    </div>
  );
}
