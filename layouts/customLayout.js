// customLayout.js

import Sidebar from 'layouts/customLayout.js/to/components/Sidebar.js';

export default function CustomLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
