import React from "react";
import { GraduationCap } from "lucide-react";

function Education() {
  const educationData = [
    {
      degree: "MCA - IFTM University, Moradabad",
      duration: "2023 - 2025",
      grade: "7.8",
    },
    {
      degree: "B.Sc - MJPRU, Bareilly",
      duration: "2018 - 2021",
      grade: "62%",
    },
    {
      degree: "12th - MRP Inter College, Bijnor",
      duration: "2016 - 2018",
      grade: "64.8%",
    },
    {
      degree: "10th - MRP Inter College, Bijnor",
      duration: "2014 - 2016",
      grade: "78%",
    },
  ];

  return (
    <div
      className="text-white w-full  flex justify-center mt-10 py-12"
      id="education"
    >
      <div className="max-w-4xl mb-8 w-full">
        <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
        <div className="grid gap-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl  shadow-lg p-6 flex items-start gap-4 transform transition duration-300 hover:scale-105 hover:shadow-blue-500/50 hover:bg-gray-800"
            >
              <div className="mt-1">
                <GraduationCap className="text-blue-500" size={28} />
              </div>
              <div>
                <p className="text-lg font-semibold hover:text-blue-400 hover:underline cursor-pointer transition duration-200">
                  {item.degree}
                </p>
                <p className="text-md font-medium text-gray-300 hover:text-blue-400 transition duration-200">
                  {item.duration}
                </p>
                <p className="text-md font-medium text-gray-300 hover:text-blue-400 transition duration-200">
                  Grade: {item.grade}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
