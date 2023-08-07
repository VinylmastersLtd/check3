// Import required modules
import React from 'react';
import { Layout } from 'nextra';
import Sidebar from '../components/Sidebar'; // Adjust the path according to your folder structure

// Create the custom layout component
const CustomLayout = ({ config, children }) => {
  return (
    <Layout config={config}>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: '1' }}>{children}</div>
      </div>
    </Layout>
  );
};

export default CustomLayout;
