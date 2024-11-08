import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const SettingsIcon = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={onClick}
        className="p-4 bg-red-800 text-white rounded-full shadow-lg hover:opacity-80 transition-colors duration-300 focus:outline-none"
      >
        <FontAwesomeIcon icon={faCog} size="lg" />
      </button>
    </div>
  );
};

export default SettingsIcon;
