// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 z-110 bg-dark border-r border-gray-700">
      <div className="p-6">
        <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
      </div>
      <nav className="mt-10">
        <Link
          className="flex items-center px-6 py-2 mt-4 text-white bg-red-800 rounded-md transition-colors duration-300 hover:bg-red-900"
          to="/"
        >
          <span className="mx-3">Home</span>
        </Link>
        <Link
          className="flex items-center px-6 py-2 mt-4 text-white rounded-md transition-colors duration-300 hover:bg-red-900"
          to="/profile"
        >
          <span className="mx-3">Profile</span>
        </Link>
        <Link
          className="flex items-center px-6 py-2 mt-4 text-white rounded-md transition-colors duration-300 hover:bg-red-900"
          to="/tasks"
        >
          <span className="mx-3">Tasks</span>
        </Link>
        <Link
          className="flex items-center px-6 py-2 mt-4 text-white rounded-md transition-colors duration-300 hover:bg-red-900"
          to="/messages"
        >
          <span className="mx-3">Messages</span>
        </Link>
        <Link
          className="flex items-center px-6 py-2 mt-4 text-white rounded-md transition-colors duration-300 hover:bg-red-900"
          to="/projects"
        >
          <span className="mx-3">Projects</span>
        </Link>
        <Link
          className="flex items-center px-6 py-2 mt-4 text-white rounded-md transition-colors duration-300 hover:bg-red-900"
          to="/files"
        >
          <span className="mx-3">Files</span>
        </Link>
        <Link
          className="flex items-center px-6 py-2 mt-4 text-white rounded-md transition-colors duration-300 hover:bg-red-900"
          to="/finance"
        >
          <span className="mx-3">Finance</span>
        </Link>
        <Link
          className="flex items-center px-6 py-2 mt-4 text-white rounded-md transition-colors duration-300 hover:bg-red-900"
          to="/support"
        >
          <span className="mx-3">Support</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
