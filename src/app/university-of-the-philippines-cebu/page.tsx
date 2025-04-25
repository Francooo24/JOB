'use client';
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-h-screen overflow-y-auto bg-white p-6">
      {/* Hero Section */}
      <section className="bg-[#F9F6F6] p-10 rounded-2xl shadow-md text-center mb-10 border border-[#7B1113]">
        <h1 className="text-4xl font-bold text-[#7B1113] mb-4">
          University of the Philippines Cebu
        </h1>
        <p className="text-lg text-[#00653A] mb-6">
          Find internships and job opportunities for UP Cebu students.
        </p>
        <div className="flex justify-center gap-4"></div>
      </section>

      {/* Categories Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Internships", href: "/internshipss" },
          { title: "Full-Time Jobs", href: "/fulltimess" },
          { title: "Part-Time Jobs", href: "/parttimess" },
          { title: "By Department", href: "/departmentsss" },
          { title: "Career Events", href: "/eventsss" },
          { title: "Career Resources", href: "/resourcesss" },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="bg-white p-6 rounded-2xl shadow border border-[#00653A] hover:shadow-lg transition block"
          >
            <h3 className="text-xl font-semibold text-[#7B1113] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">
              Explore opportunities in {item.title.toLowerCase()}.
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
