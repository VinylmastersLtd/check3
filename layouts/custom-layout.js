// layouts/custom-layout.js

import React from 'react';
import { Layout } from 'nextra';

const CustomLayout = ({ config, children }) => {
  return (
    <Layout config={config}>
      <div style={{ display: 'flex' }}>
        {/* No Sidebar component */}
        <div style={{ flex: '1' }}>{children}</div>
      </div>
    </Layout>
  );
};

export default CustomLayout;
