import CTP from '../types/ctp';

interface ResponseData {
  access_token?: string;
  expires_in?: number;
  scope?: string;
  refresh_token?: string;
  token_type?: string;
}

async function refreshToken(expiredToken: string): Promise<string> {
  const url = `${CTP.AUTH_URL}/oauth/token?grant_type=refresh_token&refresh_token=${expiredToken}`;
  const data = new URLSearchParams();
  data.append('grant_type', 'refresh_token');
  data.append('refresh_token', expiredToken);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${CTP.ANON_CLIENT_ID}:${CTP.ANON_CLIENT_SECRET}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    });

    if (!response.ok) {
      throw new Error(`Error refreshing token: ${response.statusText}`);
    }

    const responseData: ResponseData = await response.json();
    if (responseData.access_token) {
      return responseData.access_token;
    }
    throw new Error('Failed to refresh token');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default refreshToken;
