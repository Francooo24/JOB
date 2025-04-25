import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="w-full from-gray-600 via-gray-500 to-gray-400 text-white shadow-xl fixed top-0 left-0 z-10 animate-slide-in">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8 py-6">
          {/* Logo Section */}
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

          {/* Navigation Links */}
          <nav className="animate-fade-in delay-100">
            <ul className="flex space-x-12 text-lg font-medium uppercase tracking-wide">
              <li>
                <a href="/" className="hover:text-yellow-300 bg-black transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700">
                  Home
                </a>
              </li>

              <li>
                <a href="/resume" className="hover:text-yellow-300 bg-black transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700">
                  Resume
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-300 bg-black transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-yellow-300 bg-black transition-colors duration-300 px-5 py-2 rounded-lg hover:bg-gray-700">
                  Login
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col items-center gap-12 pt-36 px-8 sm:px-18 py-16 max-w-screen-xl mx-auto bg-cover bg-center">
        <div className="border p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
          <h1 className="text-6xl font-extrabold text-white border-4 border-blue-600 p-6 text-center sm:text-left">
            Our Story
          </h1>
        </div>

        {/* About Us Sections Styled Like Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
          <div className="border p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">Our Mission</h2>
            <p className="text-lg text-white text-center">
              Our mission is to create a seamless bridge between talented individuals and top-tier companies. 
              We are dedicated to empowering job seekers by providing the right tools, resources, and opportunities to excel in their careers.
            </p>
          </div>
          <div className="border p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">Our Core Values</h2>
            <ul className="list-disc pl-5 text-white text-lg">
              <li><strong>Integrity:</strong> Transparency and honesty in all actions.</li>
              <li><strong>Innovation:</strong> Constantly bringing fresh, creative solutions.</li>
              <li><strong>Empathy:</strong> Understanding and helping job seekers.</li>
              <li><strong>Community:</strong> Nurturing collaboration, growth, and support.</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {[
          { name: "Niño Franco Medina", role: "Co-Founder & CEO", img: "/images/22.jpg" },
          { name: "Hanz Prahinog", role: "Co-Founder & CTO", img: "/images/44.jpg" },
          { name: "Lyle Pelayo", role: "Chief Product Officer", img: "/images/11.jpg" }
        ].map((member, index) => (
          <div key={index} className="border p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <Image className="rounded-full w-40 h-40 mx-auto" src={member.img} alt={member.name} width={160} height={160} />
            <h3 className="text-2xl font-semibold text-white mt-5 text-center">{member.name}</h3>
            <p className="text-blue-400 text-center">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-screen-xl mx-auto flex justify-center gap-10">
          {["Contact Us", "Terms & Conditions", "Privacy Policy"].map((item, index) => (
            <a 
              key={index} 
              className="hover:underline" 
              href={`/${item.toLowerCase().replace(/\s+&\s+|\s+/g, "-")}`}
            >
              {item}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400 text-center mt-4">
          © 2025 Internship & Job Portal. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
