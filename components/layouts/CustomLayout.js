// layouts/CustomLayout.js

import SidebarLeft from '@/components/SidebarLeft';
import SidebarRight from '@/components/SidebarRight';

const CustomLayout = ({ children, showRightSidebar }) => {
  return (
    <div>
      <SidebarLeft />
      {showRightSidebar && <SidebarRight />}
      <main>{children}</main>
    </div>
  );
};

export default CustomLayout;
