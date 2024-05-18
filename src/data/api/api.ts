/* eslint-disable no-console */
export const baseURLAuth: string = process.env.CTP_AUTH_URL as string;
export const baseURL: string = process.env.CTP_API_URL as string;
export const projectKey: string = process.env.CTP_PROJECT_KEY as string;
export const clientId: string = process.env.CTP_CLIENT_ID as string;
export const clientSecret: string = process.env.CTP_CLIENT_SECRET as string;
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
