import router from "../router";

const AdalConfig = {
  config: {
    tenant: process.env.VUE_APP_ADAL_TENANT_ID,
    clientId: process.env.VUE_APP_ADAL_CLIENT_ID,
    redirectUri: process.env.VUE_APP_ADAL_REDIRECT_URI,
    cacheLocation: "localStorage"
  },
  requireAuthOnInitialize: true,
  router
};

export { AdalConfig };
