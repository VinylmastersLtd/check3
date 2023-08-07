// components/CustomLayout.js

import React from 'react';
import DefaultLayout from 'nextra-theme-docs/Layout';

const CustomLayout = ({ children, disableRightSidebar }) => {
  return (
    <DefaultLayout>
      <div className={`main-wrapper ${disableRightSidebar ? 'disable-right-sidebar' : ''}`}>
        {children}
      </div>
    </DefaultLayout>
  );
};

export default CustomLayout;
