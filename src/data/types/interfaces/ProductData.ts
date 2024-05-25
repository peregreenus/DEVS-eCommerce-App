export interface ProductData {
  id: string;
  version: number;
  name: {
    us: string;
  };
  masterData: {
    current: {
      categories: [
        {
          id: string;
          typeId: string;
        }
      ];
      description: {
        en: string;
        ru: string;
      };
      masterVariant: {
        attributes: [];
        id: number;
        images: [
          {
            dimensions: {
              h: number;
              w: number;
            };
            url: string;
          }
        ];
        prices: [
          {
            value: {
              type: string;
              fractionDigits: number;
              centAmount: number;
              currencyCode: string;
            };
            id: string;
          }
        ];
        sku: string;
      };
      name: {
        en: string;
        ru: string;
      };
      slug: {
        en: string;
        ru: string;
      };
      variants: [];
      // searchKeywords: {};
    };
    hasStagedChanges: boolean;
    published: boolean;
    staged: {
      categories: [
        {
          id: string;
          typeId: string;
        }
      ];
      description: {
        en: string;
        ru: string;
      };
      masterVariant: {
        attributes: [];
        id: number;
        images: [
          {
            dimensions: {
              h: number;
              w: number;
            };
            url: string;
          }
        ];
        prices: [
          {
            value: {
              type: string;
              fractionDigits: number;
              centAmount: number;
              currencyCode: string;
            };
            id: string;
          }
        ];
        sku: string;
      };
      name: {
        en: string;
        ru: string;
      };
      slug: {
        en: string;
        ru: string;
      };
      variants: [];
      // searchKeywords: {};
    };
  };
  productType: {
    id: string;
    typeId: string;
  };
  taxCategory: {
    id: string;
    typeId: string;
  };
  createdAt: string;
  lastModifiedAt: string;
}
