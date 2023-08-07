// components/Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Title for the sidebar */}
      <h2>My Sidebar Title</h2>

      {/* Button to toggle the sidebar */}
      <button onClick={toggleSidebar}>
        {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>

      {/* Conditionally render the sidebar based on the isSidebarOpen state */}
      {isSidebarOpen && (
        <div>
          {/* Your sidebar content goes here */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
