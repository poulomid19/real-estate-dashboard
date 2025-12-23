import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-white text-xl font-bold">InvestHub</h2>
          <p className="text-gray-400 text-sm">© 2025 All rights reserved</p>
        </div>

        <div className="flex gap-6">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#properties" className="hover:text-white transition">Properties</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

