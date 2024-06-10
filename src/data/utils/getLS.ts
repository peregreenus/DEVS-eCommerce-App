// eslint-disable-next-line import/prefer-default-export
interface LastModifiedBy {
  clientId: string;
  isPlatformClient: boolean;
  anonymousId: string;
}

interface CreatedBy {
  clientId: string;
  isPlatformClient: boolean;
  anonymousId: string;
}

interface TotalPrice {
  type: string;
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
}

interface Cart {
  type: string;
  id: string;
  version: number;
  versionModifiedAt: string;
  lastMessageSequenceNumber: number;
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy: LastModifiedBy;
  createdBy: CreatedBy;
  anonymousId: string;
  cartState: string;
  totalPrice: TotalPrice;
  shippingMode: string;
  inventoryMode: string;
  taxMode: string;
  taxRoundingMode: string;
  taxCalculationMode: string;
  deleteDaysAfterLastModification: number;
  origin: string;
}

export function getLSAnonToken() {
  return localStorage.getItem('bearerAnonToken');
}

export function getLSToken() {
  return localStorage.getItem('bearerToken');
}

export function getLSCustomer() {
  return localStorage.getItem('customer');
}

export function getLSCart() {
  return localStorage.getItem('cart');
}

export function getLSAnonymousId(): string {
  const cartAItem = localStorage.getItem('cartA');
  if (cartAItem) {
    try {
      const cartA: Cart = JSON.parse(cartAItem);
      const { anonymousId } = cartA;
      return anonymousId;
    } catch (error) {
      console.error('Error parsing cartA from localStorage:', error);
      return '';
    }
  }
  return '';
}

export function getLSVersionProfileCustomer() {
  return localStorage.getItem('versionProfileCustomer');
}
