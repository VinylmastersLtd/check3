import { Layout } from 'nextra';

export default function CustomLayout({ disableRightSidebar, children }) {
    return (
      <Layout>
        {!disableRightSidebar && <div className="sidebar-right">Right Sidebar Content</div>}
        <div className={`container ${disableRightSidebar ? 'full-width' : ''}`}>
          {children}
        </div>
      </Layout>
    );
  }