// components/customLayout.js

import React from 'react';
import Sidebar from 'components/sidebar.js';

const CustomLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default CustomLayout;
