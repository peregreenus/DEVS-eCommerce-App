// eslint-disable-next-line import/no-extraneous-dependencies
// import dotenv from 'dotenv';

// dotenv.config();

// const CTP = {
//   PROJECT_KEY: process.env.PROJECT_KEY,
//   CLIENT_ID: process.env.CLIENT_ID,
//   CLIENT_SECRET: process.env.CLIENT_SECRET,
//   ANON_CLIENT_ID: process.env.ANON_CLIENT_ID,
//   ANON_CLIENT_SECRET: process.env.ANON_CLIENT_SECRET,
//   AUTH_URL: process.env.AUTH_URL,
//   API_URL: process.env.API_URL
// };

enum CTP {
  PROJECT_KEY = 'devs-ecommerce-app-key-12435687',
  CLIENT_ID = 'O-WynbMF96PvFryYU0NYLM5R',
  CLIENT_SECRET = '9a_NIy80rtVZy1sUvscG0Ku6rryPet7Y',
  ANON_CLIENT_ID = 'PU2mZRCRIOceYDSGmQCmcfbF',
  ANON_CLIENT_SECRET = '40HWnVRWdkOgS2P3VwrSAj_6YNNRQY3W',
  // ANON_CLIENT_ID = 'vPV0ODXdobttEQAPSAVuaa4Q',
  // ANON_CLIENT_SECRET = 'vdhQd2D4jZpLHXaW2P6dac9kbWMwmVMR',
  AUTH_URL = 'https://auth.us-central1.gcp.commercetools.com/',
  API_URL = 'https://api.us-central1.gcp.commercetools.com/'
}

export default CTP;
