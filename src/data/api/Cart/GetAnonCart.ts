/* eslint-disable no-console */
import CTP from '../../types/ctp';
import { getLSAnonToken, getLSAnonymousId, getLSToken } from '../../utils/getLS';

// interface LastModifiedBy {
//   clientId: string;
//   isPlatformClient: boolean;
//   anonymousId: string;
// }

// interface CreatedBy {
//   clientId: string;
//   isPlatformClient: boolean;
//   anonymousId: string;
// }

// interface CartProps {
//   type: string;
//   id: string;
//   version: number;
//   versionModifiedAt: string;
//   lastMessageSequenceNumber: number;
//   createdAt: string;
//   lastModifiedAt: string;
//   lastModifiedBy: LastModifiedBy;
//   createdBy: CreatedBy;
//   anonymousId: string;
// }

async function getAnonCart() {
  const anonymousId = getLSAnonymousId();
  console.log('anonymousId');
  console.log(anonymousId);
  const token = getLSToken();
  const BEARER_TOKEN = token ? getLSToken() : getLSAnonToken();
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  };

  try {
    const url = `${CTP.API_URL}${CTP.PROJECT_KEY}/me/active-cart`;
    const response = await fetch(url, { method: 'GET', headers });
    const cartResponse = await response.json();
    console.log('cartResponse');
    console.log(cartResponse);

    return cartResponse;
  } catch (error) {
    return null;
  }
}

export default getAnonCart;
