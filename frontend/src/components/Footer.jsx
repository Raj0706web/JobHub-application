import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#F83002]">Job Hub</h2>
          <p className="mt-4 text-sm">
            Your No.1 job search platform to find and land your dream career.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#F83002]">Home</a></li>
            <li><a href="#" className="hover:text-[#F83002]">Browse Jobs</a></li>
            <li><a href="#" className="hover:text-[#F83002]">Upload Resume</a></li>
            <li><a href="#" className="hover:text-[#F83002]">Contact Us</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#F83002]">Frontend Developer</a></li>
            <li><a href="#" className="hover:text-[#F83002]">Backend Developer</a></li>
            <li><a href="#" className="hover:text-[#F83002]">Data Science</a></li>
            <li><a href="#" className="hover:text-[#F83002]">Full Stack</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#F83002]">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#F83002]">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#F83002]">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#F83002]">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Job Hub. All rights reserved.
      </div>
    </footer>
  );
};
