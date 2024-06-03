interface Dimension {
  w: number;
  h: number;
}

interface Image {
  url: string;
  label: string;
  dimensions: Dimension;
}

interface PriceValue {
  type: string;
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
}

interface Discount {
  typeId: string;
  id: string;
}

interface Discounted {
  value: PriceValue;
  discount: Discount;
}

interface CustomerGroup {
  typeId: string;
  id: string;
}

interface Price {
  id: string;
  value: PriceValue;
  customerGroup: CustomerGroup;
  discounted: Discounted;
}

interface AttributeValue {
  type?: string;
  currencyCode?: string;
  centAmount?: number;
  fractionDigits?: number;
}

interface Attribute {
  name: string;
  value: string | number | AttributeValue;
}

interface Variant {
  id: number;
  sku: string;
  key: string;
  prices: Price[];
  images: Image[];
  attributes: Attribute[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  assets: any[];
}

interface Category {
  typeId: string;
  id: string;
}

interface LocalizedString {
  en: string;
  de?: string;
}

interface ProductType {
  typeId: string;
  id: string;
}

interface Product {
  id: string;
  version: number;
  productType: ProductType;
  name: LocalizedString;
  description: LocalizedString;
  categories: Category[];
  categoryOrderHints: [];
  slug: LocalizedString;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  masterVariant: Variant;
  variants: Variant[];
  searchKeywords: [];
  hasStagedChanges: boolean;
  published: boolean;
  key: string;
  taxCategory: Category;
  priceMode: string;
  createdAt: string;
  lastModifiedAt: string;
}

export interface IProductAll {
  limit: number;
  offset: number;
  count: number;
  total: number;
  results: Product[];
}
