import React from 'react';
import { DocsLayout } from 'nextra-theme-docs';

const CustomDocsLayout = (props) => {
  return <DocsLayout {...props} rightSidebar={false} />;
};

export default CustomDocsLayout;
