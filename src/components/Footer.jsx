import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
    return (
      <footer className="bg-[#964B00] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Company Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Ctrl Code Solutions</h2>
            <p className="text-sm">Delivering excellence since 2024</p>
          </div>
  
          {/* Navigation Links */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
  
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
            <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
            <FaXTwitter />
            </a>
            <a href="#" aria-label="Instagram">
            <RiInstagramFill />

            </a>
            <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
            </a>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="mt-6 text-center text-sm border-t border-white/20 pt-4">
          © {new Date().getFullYear()} Ctrl code Solutions. All Rights Reserved.
        </div>
      </footer>
    );
  }
  