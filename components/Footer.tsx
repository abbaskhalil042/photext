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
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-pink-400">Photext</h3>
            <p className="text-sm text-black mt-1">
              Transform your words into stunning AI-generated images
            </p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="text-black hover:text-pink-400 transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-black hover:text-pink-400 transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-black hover:text-pink-400 transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-black hover:text-pink-400 transition-colors duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-black hover:text-pink-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-black hover:text-pink-400 transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-black hover:text-pink-400 transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-black hover:text-pink-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

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
      </div>
    </footer>
  );
};

export default Footer;
