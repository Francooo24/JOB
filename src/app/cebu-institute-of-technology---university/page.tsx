import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-h-screen overflow-y-auto bg-gray-50 p-6">
      {/* Hero Section */}
      <section className="bg-white p-10 rounded-2xl shadow-md text-center mb-10">
        <h1 className="text-4xl font-bold text-red-700 mb-4">
          Cebu Institute of Technology - University
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover internship and career opportunities for CIT-U students.
        </p>
        <div className="flex justify-center gap-4">

        </div>
      </section>

      {/* Categories Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Internships", href: "/internships" },
          { title: "Full-Time Jobs", href: "/fulltimes" },
          { title: "Part-Time Jobs", href: "/parttimes" },
          { title: "By Department", href: "/departments" },
          { title: "Career Events", href: "/events" },
          { title: "Career Resources", href: "/resources" },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition block"
          >
            <h3 className="text-xl font-semibold text-red-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500">
              Explore opportunities in {item.title.toLowerCase()}.
            </p>
          </Link>
        ))}
      </section>




    </main>
  );
}
