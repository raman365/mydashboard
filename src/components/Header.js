import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../mainlogo.png';

const Header = () => {
  return (
    <header className="bg-dark p-6 shadow-md">
      <div className="flex items-center justify-between animate__animated animate__fadeInUp animate-delay-300ms">
        <img
          src= {logo}
          alt="Logo"
          className="h-8 w-auto"
        />
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
