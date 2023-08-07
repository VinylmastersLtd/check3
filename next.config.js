const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = {
  // Other config options...
  themeConfig: {
    disableRightSidebar: true,
    // Other theme configurations...
  },
};

module.exports = withNextra()

