/* eslint-disable no-console */
export const baseURLAuth: string = 'https://auth.us-central1.gcp.commercetools.com/';
export const baseURL: string = 'https://api.us-central1.gcp.commercetools.com/';
export const projectKey: string = 'devs-ecommerce-app-key-12435687';
export const clientId: string = 'O-WynbMF96PvFryYU0NYLM5R';
export const clientSecret: string = '9a_NIy80rtVZy1sUvscG0Ku6rryPet7Y';
export const eCommScopes: string = 'manage_project:devs-ecommerce-app-key-12435687';
export const bearerToken = { token: null };

export async function getToken() {
  const url = `${baseURLAuth}oauth/token`;
  console.log(url);
  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');
  data.append('scope', `manage_project:${projectKey}`);
  console.log(data);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`
      },
      body: data
    });

    const tokenData = await response.json();
    bearerToken.token = tokenData.access_token;
    console.log('received token:', bearerToken);
  } catch (error) {
    console.error('error receiving token:', error);
  }
}
