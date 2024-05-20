/* eslint-disable no-console */
export const bearerToken = { token: null };

export async function getToken() {
  const url = `${process.env.CTP_AUTH_URL}oauth/${process.env.CTP_PROJECT_KEY}/anonymous/token`;
  console.log(url);
  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');
  data.append('scope', `manage_project:${process.env.CTP_PROJECT_KEY}`);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${process.env.CTP_CLIENT_ID}:${process.env.CTP_CLIENT_SECRET}`)}`
      },
      body: data
    });

    const tokenData = await response.json();
    bearerToken.token = tokenData.access_token;
    console.log('received token:', bearerToken.token);
  } catch (error) {
    console.error('error receiving token:', error);
  }
}
