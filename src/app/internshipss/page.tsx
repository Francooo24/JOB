'use client';
import React from "react";
import Link from "next/link";

const internships = [
  {
    title: "Software Engineering Intern",
    company: "Google",
    location: "Cebu City",
    type: "Remote",
    deadline: "April 30, 2025",
    link: "/apply/google-se-intern",
  },
  {
    title: "Marketing Intern",
    company: "Unilever",
    location: "Mandaue City",
    type: "On-Site",
    deadline: "May 5, 2025",
    link: "/apply/unilever-marketing-intern",
  },
  {
    title: "Data Analyst Intern",
    company: "Accenture",
    location: "Cebu Business Park",
    type: "Hybrid",
    deadline: "May 10, 2025",
    link: "/apply/accenture-da-intern",
  },
];

export default function UPCEbuInternships() {
  return (
    <main className="bg-white min-h-screen p-6">
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#7B1113] mb-2">
          University of the Philippines Cebu Internships
        </h1>
        <p className="text-[#00653A]">
          Browse available internship opportunities for UP Cebu students.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {internships.map((intern, idx) => (
          <div
            key={idx}
            className="bg-[#F9F6F6] p-6 rounded-xl shadow hover:shadow-lg transition border border-[#00653A]"
          >
            <h2 className="text-xl font-semibold text-[#7B1113] mb-1">
              {intern.title}
            </h2>
            <p className="text-gray-700 font-medium">{intern.company}</p>
            <p className="text-sm text-gray-600">{intern.location} • {intern.type}</p>
            <p className="text-sm text-gray-500 mt-1">
              Apply before <span className="font-medium">{intern.deadline}</span>
            </p>
            <Link
              href={intern.link}
              className="inline-block mt-4 bg-[#00653A] text-white px-4 py-2 rounded-lg hover:bg-[#005030]"
            >
              Apply Now
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
