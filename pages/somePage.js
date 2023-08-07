// pages/somePage.js

import DefaultLayout from '@theme/layouts/DefaultLayout'; // Import the Nextra DefaultLayout
import { SidebarLeft, SidebarRight } from '@theme/components'; // Import the Nextra Sidebar components

const SomePage = () => {
  return (
    <DefaultLayout
      hideRightSidebar={true} // Set hideRightSidebar to true to disable the right sidebar
    >
      <SidebarLeft />
      <main>
        {/* Add your content for the specific page here */}
        <h1>SomePage Content</h1>
        <p>This is the content of the specific page.</p>
      </main>
      <SidebarRight />
    </DefaultLayout>
  );
};

export default SomePage;
