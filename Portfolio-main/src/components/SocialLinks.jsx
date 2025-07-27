import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaBriefcase,
  FaGithub,
  FaPhone,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="md:flex-row mt-2 text-white">
      <div className="flex gap-6 justify-center text-2xl mx-auto shadow-lg">
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/aakash-kumar-95b33230b/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/918279365076"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-400 transition-colors duration-300"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.naukri.com/naukri360"
          target="_blank"
          rel="noreferrer"
          className="hover:text-orange-400 transition-colors duration-300"
        >
          <FaBriefcase />
        </a>
        <a
          href="mailto:ak0462463@gmail.com"
          className="hover:text-pink-400 transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
        <a
          href="tel:+918279365076"
          className="hover:text-purple-400 transition-colors duration-300"
        >
          <FaPhone />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
