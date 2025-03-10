import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <a className="text-2xl font-bold text-cyan-700" href="/home">
            LOGO
          </a>
        </div>

        {/* Search Field (Always Visible) */}
        <div className="hidden md:flex items-center border rounded-full p-2 px-4 bg-gray-100">
          <input
            type="search"
            className="bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 w-40 md:w-60 lg:w-80"
            placeholder="Search..."
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/shop"
            className="text-cyan-700 hover:text-cyan-900 font-semibold"
          >
            Shop
          </a>
          <a
            href="/contact-us"
            className="text-cyan-700 hover:text-cyan-900 font-semibold"
          >
            Contact
          </a>
          <a
            href="/about-us"
            className="text-cyan-700 hover:text-cyan-900 font-semibold"
          >
            About
          </a>
          <a
            href="/all-blogs"
            className="text-cyan-700 hover:text-cyan-900 font-semibold"
          >
            Blogs
          </a>
        </nav>

        {/* Login / Register (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/login"
            className="text-cyan-700 hover:text-cyan-900 font-semibold"
          >
            Login
          </a>
          <a
            href="/register"
            className="text-cyan-700 hover:text-cyan-900 font-semibold"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg p-5 space-y-4">
          <input
            type="search"
            className="w-full p-2 border rounded-md"
            placeholder="Search..."
          />
          <nav className="flex flex-col space-y-2">
            <a
              href="/shop"
              className="text-cyan-700 hover:text-cyan-900 font-semibold"
            >
              Shop
            </a>
            <a
              href="/contact-us"
              className="text-cyan-700 hover:text-cyan-900 font-semibold"
            >
              Contact
            </a>
            <a
              href="/about-us"
              className="text-cyan-700 hover:text-cyan-900 font-semibold"
            >
              About
            </a>
            <a
              href="/all-blogs"
              className="text-cyan-700 hover:text-cyan-900 font-semibold"
            >
              Blogs
            </a>
          </nav>

          <div className="border-t pt-4">
            <a
              href="/login"
              className="text-cyan-700 hover:text-cyan-900 font-semibold block"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-cyan-700 hover:text-cyan-900 font-semibold block"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
