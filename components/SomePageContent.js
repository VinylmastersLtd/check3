// pages/somePage.js

import CustomLayout from '@/layouts/CustomLayout';
import SomePageContent from '@/components/SomePageContent'; // Replace this with your actual content component

const SomePage = () => {
  // Set showRightSidebar to false to disable the right sidebar on this page
  const showRightSidebar = false;

  return (
    <CustomLayout showRightSidebar={showRightSidebar}>
      <SomePageContent />
    </CustomLayout>
  );
};

export default SomePage;
