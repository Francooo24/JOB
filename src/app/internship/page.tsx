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

export default function USCInternships() {
  return (
    <main className="bg-gray-50 min-h-screen p-6">
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          University of San Carlos Internships
        </h1>
        <p className="text-gray-600">
          Browse available internship opportunities for USC students.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {internships.map((intern, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-green-700 mb-1">
              {intern.title}
            </h2>
            <p className="text-gray-700 font-medium">{intern.company}</p>
            <p className="text-sm text-gray-500">{intern.location} • {intern.type}</p>
            <p className="text-sm text-gray-400 mt-1">
              Apply before <span className="font-medium">{intern.deadline}</span>
            </p>
            <Link
              href={intern.link}
              className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Apply Now
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
