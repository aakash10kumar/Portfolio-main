import React, { useState } from "react";

function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
 
      <div >
      
        {showModal && (
          <div
            className="fixed inset-0 bg-black  bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <img
              src="https://i.postimg.cc/RZ2hjQbC/IMG-20250502-195901.jpg"
              alt="Zoomed"
              className="w-96 h-96 rounded-full border-4 border-white object-cover transition-transform duration-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl"
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center max-w-5xl mx-auto px-6 py-16">
          {/* Image */}
          <div className="mb-6 md:mb-0 md:mr-10 cursor-pointer">
            <img
              src="https://i.postimg.cc/RZ2hjQbC/IMG-20250502-195901.jpg"
              alt="Aakash"
              className="w-80 h-80 rounded-full border-4 border-white object-cover hover:scale-105 transition-transform duration-300"
              onClick={() => setShowModal(true)}
            />
          </div>

          {/* Text Intro */}
          <div className="text-center md:text-left px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Hello, I'm <br />
              <span className="text-pink-400">Aakash Kumar</span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-gray-200 mb-3">
              I’m a <span className="text-blue-400"></span> {" "}
              <span className="text-cyan-400">MERN Stack</span> Developer.
            </p>

            <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed">
              Passionate about building scalable backend systems, intuitive frontend UIs,
              and delivering clean, maintainable code with the MERN stack.
            </p>
          </div>

        </div>
      </div>

      {/* Introduction Section */}

    </>
  );
}

export default Hero;
