// components/Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>

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
