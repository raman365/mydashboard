import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SettingsIcon from "./components/SettingsIcon";
import SettingsSidebar from "./components/SettingsSidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="flex h-screen bg-darker text-white">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-darker">
            <div className="container mx-auto px-6 py-8">
              <Routes>
                <Route path="*" element={<Dashboard />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<div>Profile Page</div>} />
                <Route path="/tasks" element={<div>Tasks Page</div>} />
                <Route path="/messages" element={<div>Messages Page</div>} />
                <Route path="/projects" element={<div>Projects Page</div>} />
                <Route path="/files" element={<div>Files Page</div>} />
                <Route path="/finance" element={<div>Finance Page</div>} />
                <Route path="/support" element={<div>Support Page</div>} />
              </Routes>
            </div>
          </main>
        </div>
        <SettingsIcon onClick={handleToggleSidebar} />
        <SettingsSidebar
          isVisible={isSidebarVisible}
          onClose={handleToggleSidebar}
        />
      </div>
    </Router>
  );
}

export default App;
