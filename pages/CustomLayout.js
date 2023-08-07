import { Layout } from 'nextra';
export default function CustomLayout({ disableSidebar, children }) {
    return (
      <Layout sidebar={disableSidebar ? null : undefined}>
        {children}
      </Layout>
    );
  }