// components/customLayout.js

import React from 'react';
import Sidebar from '/Sidebar.js';

const CustomLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default CustomLayout;
