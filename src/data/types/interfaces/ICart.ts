export interface LineItem {
  id: string;
  productId: string;
  productKey: string;
  name: {
    en: string;
  };
  productType: {
    typeId: string;
    id: string;
    version: number;
  };
  productSlug: {
    en: string;
  };
  variant: {
    id: number;
    sku: string;
    key: string;
    prices: {
      id: string;
      value: {
        type: string;
        currencyCode: string;
        centAmount: number;
        fractionDigits: number;
      };
      discounted: {
        id: string;
        value: {
          type: string;
          currencyCode: string;
          centAmount: number;
          fractionDigits: number;
        };
      };
      key: string;
    }[];
    images: {
      url: string;
      label: string;
      dimensions: {
        w: number;
        h: number;
      };
    }[];
    attributes: {
      name: string;
      value: string;
    }[];
    assets: string[];
  };
  price: {
    id: string;
    value: {
      type: string;
      currencyCode: string;
      centAmount: number;
      fractionDigits: number;
    };
    key: string;
  };
  quantity: number;
  discountedPricePerQuantity: string[];
  perMethodTaxRate: string[];
  addedAt: string;
  lastModifiedAt: string;
  state: {
    quantity: number;
    state: {
      typeId: string;
      id: string;
    };
  }[];
  priceMode: string;
  lineItemMode: string;
  totalPrice: {
    type: string;
    currencyCode: string;
    centAmount: number;
    fractionDigits: number;
  };
  taxedPricePortions: string[];
}

interface TotalPrice {
  type: string;
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
}

export interface ICart {
  id: string;
  version: number;
  lineItems: LineItem[];
  totalPrice: TotalPrice;
  totalLineItemQuantity: number;
}
