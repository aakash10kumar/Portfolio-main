import React from "react";

function Experience() {
  const experiences = [
    {
      company: "Ten (Internship)",
      role: "MERN Stack Developer Intern",
      duration: "July 2025 – Present",
      description:
        "Working on building full-stack features using MongoDB, Express, React, and Node.js. Implemented REST APIs and contributed to frontend UI using Tailwind CSS.",
    },
  ];

  return (
    <div id="experience" className="px-4 py-16  text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 hover:ring-2 hover:ring-blue-500"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-blue-400">
                {exp.company} | {exp.duration}
              </p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

