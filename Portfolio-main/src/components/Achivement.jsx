import React from "react";
import { FaCertificate } from "react-icons/fa";

function Achievement() {
  return (
    <div className=" text-white py-12 px-4 sm:px-6" id="achievements">
      <div className="max-w-3xl mx-auto bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-400 mb-6 text-center">Achievements</h2>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out">
          {/* Title with Icon */}
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <FaCertificate className="text-yellow-400" />
            AINCAT 2025
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Successfully participated in{" "}
            <span className="text-indigo-400 font-medium">AINCAT 2025</span> – <br />
            <span className="italic">India’s Biggest Career Aptitude Test</span>, conducted by{" "}
            <span className="font-medium">Naukri Campus</span> and powered by{" "}
            <span className="font-medium">AICTE</span>.
          </p>

          <ul className="mt-4 text-sm text-gray-400 space-y-1">
            <li><strong>Certificate ID:</strong> 683a32a06c1aa41e163bcf12</li>
            <li><strong>Date:</strong> 30th May 2025</li>
            <li><strong>Rank:</strong> 4287 out of 400,000+ participants</li>
          </ul>

          {/* Certificate Link */}
          <a
            href="https://media.licdn.com/dms/image/v2/D4D22AQF38aeudm5ybw/feedshare-shrink_2048_1536/B4DZcoNQpwH4Ao-/0/1748726255993?e=1756339200&v=beta&t=5dpaBrD4yWGK0Mpf1qo195zPVFAD54l33EvW-NfMlZg"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-sm text-indigo-400 hover:underline hover:text-indigo-300 transition"
          >
            View Certificate →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Achievement;

