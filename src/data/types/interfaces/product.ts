interface Dimensions {
  w: number;
  h: number;
}

export interface Image {
  label: string | undefined;
  url: string;
  dimensions: Dimensions;
}

export interface Value {
  type: string;
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
}

export interface Discount {
  value: Value;
  discount: {
    typeId: string;
    id: string;
  };
}

interface Price {
  id: string;
  value: Value;
  country: string;
  discounted: Discount;
}

interface Attribute {
  name: string;
  value: number | string;
}

interface MasterVariant {
  id: number;
  prices: Price[];
  images: Image[];
  attributes: Attribute[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  assets: any[]; // Якщо у вас є інформація про типи в assets, змініть any на відповідний тип
}

interface Category {
  typeId: string;
  id: string;
}

interface LocalizedString {
  en: string;
  [key: string]: string; // Для підтримки інших мов
}

interface ProductType {
  typeId: string;
  id: string;
}

export interface IProductInfo {
  id: string;
  name: string;
  image: string;
  date: Date;
  productData: IProduct;
}

export interface IProduct {
  id: string;
  version: number;
  productType: ProductType;
  name: LocalizedString;
  description: LocalizedString;
  categories: Category[];
  categoryOrderHints: Record<string, unknown>; // Типізуємо як об'єкт з будь-якими ключами та значеннями
  slug: LocalizedString;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  masterVariant: MasterVariant;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variants: any[]; // Якщо у вас є інформація про типи в variants, змініть any на відповідний тип
  searchKeywords: Record<string, unknown>; // Типізуємо як об'єкт з будь-якими ключами та значеннями
  hasStagedChanges: boolean;
  published: boolean;
  priceMode: string;
  createdAt: string;
  lastModifiedAt: string;
}
