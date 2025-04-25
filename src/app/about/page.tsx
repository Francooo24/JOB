import Image from "next/image";
import Link from "next/link";  // ADD THIS

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="w-full from-gray-600 via-gray-500 to-gray-400 text-white shadow-xl fixed top-0 left-0 z-10 animate-slide-in">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8 py-6">

          {/* Logo Section */}
          <div className="flex items-center space-x-4 animate-bounce-delay">
            <Link href="/" className="flex items-center">
              <Image
                className="rounded-full shadow-xl transform transition-all hover:scale-110"
                src="/images/as.jpg"
                alt="Internship & Job Portal Logo"
                width={40}
                height={40}
                priority
              />
            </Link>
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

      {/* Main Content and rest of your code */}
      
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-screen-xl mx-auto flex justify-center gap-10">
          {["Contact Us", "Terms & Conditions", "Privacy Policy"].map((item, index) => (
            <Link 
              key={index}
              className="hover:underline"
              href={`/${item.toLowerCase().replace(/\s+&\s+|\s+/g, "-")}`}
            >
              {item}
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-400 text-center mt-4">
          © 2025 Internship & Job Portal. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
