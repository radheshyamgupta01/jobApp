import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-50 dark:bg-gray-800 shadow-xl border-b border-gray-300">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto p-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-xl font-semibold text-gray-900 dark:text-white"
          >
            Job App
          </a>
        </div>

        {/* Search and Filters */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } flex-grow md:flex md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-6`}
        >
          <input
            type="text"
            placeholder="Search by company"
            className="p-2 border rounded md:w-60 lg:w-80 outline-none"
          />
          <select className="p-2 border rounded md:w-40 lg:w-48 outline-none">
            <option value="">Filter by location</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
          </select>
          <select className="p-2 border rounded md:w-40 lg:w-48 outline-none">
            <option value="">Filter by contract</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>
        </nav>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-gray-700 dark:text-gray-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 16a4 4 0 00-8 0v1h8v-1z"
            />
          </svg>
          <span className="text-gray-900 dark:text-white">Username</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-6 h-6 text-gray-900 dark:text-white"
          >
            <path
              d={
                !isOpen
                  ? "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  : "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              }
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
