"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaDownLong } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the menu toggle

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <div className="bg-background p-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link href="/">
            <Image
              src="/inspiruslogo.png"
              alt="inspirus-logo"
              className="h-16 sm:h-40 w-auto" // Adjusted height for responsiveness
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-gray-400 text-white text-xl">
            Home
          </Link>
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-gray-400 text-white text-xl"
            >
              Details
            </button>

            {/* Dropdown Content */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-background rounded-md shadow-lg py-2 z-20">
                <Link
                  href="https://drive.google.com/drive/folders/1xVXQ29cTUNttDZ6FbYxZdtkcUHGliLSj"
                  className="block px-4 py-2 text-white hover:text-gray-400"
                >
                  General Rules
                </Link>
                <Link
                  href="https://drive.google.com/drive/folders/1e_8cDB5daNcFf2TDgpssXVFjdX7gW4Vp"
                  className="block px-4 py-2 text-white hover:text-gray-400"
                >
                  Eligibility List
                </Link>
                <Link
                  href="https://drive.google.com/drive/folders/1iWn-Lls9Te6Oq-DSlVC9vyA6D7C-fx4w"
                  className="block px-4 py-2 text-white hover:text-gray-400"
                >
                  Schedule
                </Link>
              </div>
            )}
          </div>
          <Link href="/team" className="hover:text-gray-400 text-white text-xl">
            Team
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 bg-background p-4 rounded-md shadow-md">
          <Link
            href="/"
            className="hover:text-gray-400 text-white text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/team"
            className="hover:text-gray-400 text-white text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Team
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-gray-400 text-white text-xl text-left"
          >
            Details
          </button>

          {/* Dropdown Content for Mobile */}
          {isOpen && (
            <div className="flex flex-col space-y-2">
              <Link
                href="https://drive.google.com/drive/folders/1xVXQ29cTUNttDZ6FbYxZdtkcUHGliLSj"
                className="px-4 py-2 hover:text-gray-400 text-white text-xl"
                onClick={() => {
                  setIsOpen(false);
                  setIsMenuOpen(false);
                }}
              >
                General Rules
              </Link>
              <Link
                 href="https://drive.google.com/drive/folders/1e_8cDB5daNcFf2TDgpssXVFjdX7gW4Vp"
                className="px-4 py-2 hover:text-gray-400 text-white text-xl"
                onClick={() => {
                  setIsOpen(false);
                  setIsMenuOpen(false);
                }}
              >
                Eligibility List
              </Link>
              <Link
                href="https://drive.google.com/drive/folders/1iWn-Lls9Te6Oq-DSlVC9vyA6D7C-fx4w"
                className="px-4 py-2 hover:text-gray-400 text-white text-xl"
                onClick={() => {
                  setIsOpen(false);
                  setIsMenuOpen(false);
                }}
              >
                Schedule
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;
