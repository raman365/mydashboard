import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SettingsSidebar = ({ isVisible, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-dark border-l border-gray-700 transform transition-transform ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ transitionDuration: '0.3s' }}
    >
      <div className="relative h-full">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-2xl rounded-full"
          aria-label="Close sidebar"
        >
          <FontAwesomeIcon icon={faTimes} size="md" />
        </button>
        <div className="p-6 text-white"> 
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;