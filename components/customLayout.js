// customLayout.js

import Sidebar from 'components/Sidebar.js';

export default function customLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}