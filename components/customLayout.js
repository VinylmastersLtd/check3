// customLayout.js

import Sidebar from 'components/Sidebar.js';

export default function CustomLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}