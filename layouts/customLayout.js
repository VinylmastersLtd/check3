// customLayout.js

import Sidebar from 'path/to/sidebar';

export default function CustomLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
