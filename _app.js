// _app.js

import React from 'react';
import CustomLayout from 'layouts/custom-layout'; // Adjust the path if necessary

function MyApp({ Component, pageProps }) {
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}

export default MyApp;
