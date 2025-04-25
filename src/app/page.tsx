// File: pages/index.tsx

import Image from "next/image";
import Link from "next/link";

const schools = [
  "University of San Carlos",
  "Cebu Institute of Technology - University",
  "University of the Philippines Cebu",
  "Cebu Technological University",
  "Southwestern University PHINMA",
  "University of Cebu",
  "University of the Visayas",
  "Cebu Normal University",
  "Asian College of Technology",
  "Cebu Eastern College",
  "Salazar Colleges of Science and Institute of Technology",
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Header */}
      <header className="w-full from-gray-600 via-gray-500 to-gray-400 text-white shadow-xl fixed top-0 left-0 z-10 animate-slide-in">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8 py-6">
          <div className="flex items-center space-x-4 animate-bounce-delay">
            <a href="/" className="flex items-center">
              <Image
                className="rounded-full shadow-xl transform transition-all hover:scale-110"
                src="/images/as.jpg"
                alt="Internship & Job Portal Logo"
                width={40}
                height={40}
                priority
              />
            </a>
          </div>
          <nav className="animate-fade-in delay-100">
            <ul className="flex space-x-12 text-lg font-medium uppercase tracking-wide">
              {["Home","Resume", "About Us", "Login"].map((text, idx) => {
                const href = text === "Home" ? "/" : `/${text.toLowerCase().replace(" ", "")}`;
                return (
                  <li key={idx}>
                    <a
                      href={href}
                      className="hover:text-yellow-300 bg-black transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700"
                    >
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main
        className="flex flex-col items-center justify-center text-black gap-8 pt-32 px-6 sm:px-16 py-12 rounded-t-3xl shadow-lg animate-fade-in"
        style={{
          backgroundImage: 'url("/images/.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hero Text */}
        <h1 className="text-5xl font-extrabold text-center sm:text-left text-white text-black-900 animate-slide-up">
          Discover Your Ideal Internship or Job
        </h1>
        <p className="text-center sm:text-left text-xl text-black-600 mt-2 text-white max-w-3xl animate-slide-up delay-200">
          Explore exciting internship and job opportunities tailored to your skills and career goals. Find your dream role and kickstart your career journey today.
        </p>

        {/* Partner Schools */}
        <div className="w-full max-w-5xl bg-gradient-to-r from-gray-50 to-gray-200 p-8 rounded-xl shadow-2xl animate-fade-in mt-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center uppercase tracking-wide">
            Schools
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {schools.map((school, idx) => {
              const href = `/jobs/${encodeURIComponent(school.replace(/\s+/g, "-").toLowerCase())}`;
              return (
                <Link
                  key={idx}
                  href={href}
                  className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition duration-300 text-sm sm:text-base"
                >
                  {school}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Feature Highlights */}
        <section className="w-full max-w-6xl text-center mt-16 space-y-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-white">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-800">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl">Verified Listings</h3>
              <p className="mt-2 text-sm">All internships and job postings are vetted to ensure quality and legitimacy.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl">Career Tools</h3>
              <p className="mt-2 text-sm">Get access to resume builders, skill assessments, and application tips.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl">Opportunities</h3>
              <p className="mt-2 text-sm">Our system recommends opportunities based on your profile and interests.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16 w-full max-w-4xl text-white text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl text-black font-bold">What Students Say?</h2>
          <div className="space-y-4">
            <blockquote className="bg-gray-900 p-6 rounded-xl shadow-md">
              <p>“Thanks to this portal, I landed my first internship in less than two weeks. Highly recommended!”</p>
              <footer className="mt-2 text-sm text-gray-400">— Maria, USC Student</footer>
            </blockquote>
            <blockquote className="bg-gray-900 p-6 rounded-xl shadow-md">
              <p>“Easy to use and full of real opportunities. This site really helped me get ahead!”</p>
              <footer className="mt-2 text-sm text-gray-400">— James, CIT-U Student</footer>
            </blockquote>
          </div>
        </section>



        {/* Learn More Button */}
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-16 animate-fade-in">
          <a
            className="rounded-full bg-gray-200 text-gray-800 font-semibold px-8 py-4 hover:bg-gray-300 hover:shadow-lg transition duration-300 transform hover:scale-105"
            href="/about"
          >
            Learn More About Us
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-4 text-center px-4">
          <div className="flex flex-wrap justify-center gap-6">
            <a className="hover:underline transition-colors duration-300 hover:text-yellow-400" href="/contact">
              Contact Us
            </a>
            <a className="hover:underline transition-colors duration-300 hover:text-yellow-400" href="/terms">
              Terms & Conditions
            </a>
            <a className="hover:underline transition-colors duration-300 hover:text-yellow-400" href="/privacy">
              Privacy Policy
            </a>
          </div>
          <hr className="w-full max-w-xs my-2" />
        </div>
        <p className="text-center text-gray-400">© 2025 Internship & Job Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
