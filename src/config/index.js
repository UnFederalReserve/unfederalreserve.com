const base = {
  urls: {
    frontend: process.env.FRONTEND_URL,
    hubspotForm: 'https://api.hsforms.com/submissions/v3/integration/submit',
    lendingMain: process.env.LENDING_MAIN_URL,
    docsMain: process.env.DOCS_MAIN_URL,
    marketApi: process.env.API_URL_MAINNET,
  },
  staticDataPath: process.env.WEBPACK_DEV_SERVER ? '/staticdata' : '/static',
  seo: {
    defaultTitle: 'unFederalReserve | Middle Market DeFi',
    defaultDesc: 'Middle Market DeFi',
    defaultImage: process.env.DEFAULT_SHARING_IMG,
  },
  maps: {
    apiKey: process.env.MAP_API_KEY,
    baseUrl: process.env.MAP_BASE_URL,
  },
  hubspotPortalId: process.env.HUBSPOT_PORTAL_ID,
  hubspotFormIds: {
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  mediaGCloudUrl: process.env.MEDIA_G_CLOUD_URL,
};

export default base;
