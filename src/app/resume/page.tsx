import Image from "next/image";

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-gray-100 shadow fixed top-0 left-0 z-10">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              className="rounded shadow-lg transition-all hover:scale-105"
              src="/images/as.jpg"
              alt="Mynimo Logo"
              width={50}
              height={50}
              priority
            />
          </a>
          {/* Navigation Links */}
          <nav className="animate-fade-in delay-100">
            <ul className="flex space-x-12 text-lg font-medium uppercase tracking-wide">
              <li>
                <a href="/" className="hover:text-yellow-300 bg-white transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700">
                  Home
                </a>
              </li>

              <li>
                <a href="/resume" className="hover:text-yellow-300 bg-white transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700">
                  Resume
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-300 bg-white transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-yellow-300 bg-white transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>


      {/* Push content below the header */}
      <div className="pt-20"></div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center py-12 px-6 sm:px-16">
        {/* Upload Resume Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border">
          <h2 className="text-2xl font-semibold text-center mb-6">Upload Resume</h2>

          {/* Form Fields */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Email Address *</label>
              <input type="email" className="w-full p-3 border rounded-lg" placeholder="Enter your email" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password *</label>
              <input type="password" className="w-full p-3 border rounded-lg" placeholder="Enter password" required />
              <small className="text-gray-500">At least 10 characters with a mix of letters, numbers, and symbols.</small>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Confirm Password *</label>
              <input type="password" className="w-full p-3 border rounded-lg" placeholder="Confirm password" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Upload Resume (PDF/DOCX) *</label>
              <input type="file" accept=".pdf,.doc,.docx" className="w-full p-3 border rounded-lg" required />
            </div>

            {/* Submit Button */}
            <button className="mt-4 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 text-lg font-semibold">
              Next →
            </button>
          </form>
        </div>

        {/* Terms and Conditions */}
        <p className="text-gray-500 mt-6 text-center text-sm">
          By proceeding, you agree to our <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 w-full py-6 mt-12">
        <div className="max-w-screen-xl mx-auto text-center text-gray-600">
          <p>© 2025 Internship & Job Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
