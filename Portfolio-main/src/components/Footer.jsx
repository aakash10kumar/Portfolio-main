import React from "react";

function Footer() {
  return (
    <footer className="text-white py-6 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-xl">Aakash Kumar</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aakash Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

