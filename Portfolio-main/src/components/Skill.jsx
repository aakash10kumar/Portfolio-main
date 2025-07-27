import React from "react";
import {
  FaNode,
  FaReact,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiJira,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";

function Skill() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNode className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <FaDatabase className="text-blue-400" /> },
        { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-400" /> },
      ],
    },
    {
      title: "Others",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "VSC", icon: <VscVscode className="text-blue-500" /> },
        { name: "Jira", icon: <SiJira className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-4xl bg-white p-2 rounded-full text-orange-500" /> },
        { name: "Windows", icon: <FaWindows className="text-4xl rounded-sm bg-white p-2 text-blue-900" /> },
        { name: "Linux", icon: <FaLinux className="text-4xl text-blue-900 bg-white p-2 rounded-sm" /> },
      ],
    },
  ];

  return (
    <div className="text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-pink-400">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-800 hover:border-pink-500 hover:shadow-pink-400/30 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center  text-center transform hover:scale-110 active:scale-105 transition duration-200 ease-in-out cursor-pointer group-hover:text-pink-400"
                  >
                    <div className="text-3xl mb-1 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
