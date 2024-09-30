import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#FDF4E3] to-pink-200 text-black rounded-t-2xl">
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-black">
        <p>&copy; {new Date().getFullYear()} Photext. All rights reserved.</p>
        <p className="mt-2">
          <a
            href="#"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            Privacy Policy
          </a>{" "}
          |
          <a
            href="#"
            className="hover:text-pink-400 transition-colors duration-300 ml-2"
          >
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
