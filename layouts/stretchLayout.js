import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import DocsLayout from 'nextra-theme-docs/layout';

const CustomLayout = (props) => {
    return (
      <MDXProvider>
        <DocsLayout
          {...props}
          wrapperClassName="w-full" // Adjust the class name as needed
        />
      </MDXProvider>
    );
  };
  
  export default CustomLayout;