export interface ProductProjectionsData {
  id: string;
  version: number;
  productType: {
    typeId: string;
    id: string;
  };
  name: {
    en: string;
  };
  description: {
    en: string;
  };
  categories: [];
  slug: {
    en: string;
  };
  masterVariant: {
    id: 1;
    prices: [];
    images: [];
    attributes: [
      {
        name: string;
        value: {
          it: string;
          de: string;
          en: string;
        };
      }
    ];
  };
  variants: [];
  // eslint-disable-next-line @typescript-eslint/ban-types
  searchKeywords: {};
  hasStagedChanges: boolean;
  published: boolean;
  createdAt: string;
  lastModifiedAt: string;
}
