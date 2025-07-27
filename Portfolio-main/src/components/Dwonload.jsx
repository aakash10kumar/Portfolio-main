import { FaDownload } from "react-icons/fa";
import React from "react";

function Download() {
  return (
    <div className="px-4 py-10 -mt-20 text-white">
      <div className="max-w-xl mx-auto text-center">
        <a
          href="/Aakash nodejs.pdf"
          download
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          <FaDownload className="text-lg" />
          Check Resume
        </a>
      </div>
    </div>
  );
}

export default Download;

