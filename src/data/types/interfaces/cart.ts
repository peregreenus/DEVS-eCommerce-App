interface LastModifiedBy {
  isPlatformClient: boolean;
}

interface CreatedBy {
  isPlatformClient: boolean;
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
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy: LastModifiedBy;
  createdBy: CreatedBy;
  lineItems: string[];
  cartState: string;
  totalPrice: TotalPrice;
  shippingMode: string;
  shipping: string[];
  customLineItems: string[];
  discountCodes: string[];
  directDiscounts: string[];
  inventoryMode: string;
  taxMode: string;
  taxRoundingMode: string;
  taxCalculationMode: string;
  refusedGifts: string[];
  origin: string;
  itemShippingAddresses: string[];
}

export default Cart;
