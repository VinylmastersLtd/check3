// Import the necessary components and hooks

import DocsLayout from 'nextra-theme-docs/layout';
import styles from 'styles.module.css';


// Define a custom layout component
const CustomLayout = (props) => {
  const { config } = useDocusaurusContext();
  
  // Disable the right sidebar for the specific page
  let sidebarItems = [];
  if (props.sidebarItems && props.sidebarItems.sidebar) {
    sidebarItems = [
      ...props.sidebarItems.sidebar,
    ];
  }

  return (
    <DocsLayout
      {...props}
      sidebarItems={sidebarItems}
    />
  );
};



export default CustomLayout;