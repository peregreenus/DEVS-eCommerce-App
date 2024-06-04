export interface AppFilter {
  minPrice: number;
  maxPrice: number;
}

export interface SearchPriceFilter {
  price: AppFilter;
  setPrice: React.Dispatch<React.SetStateAction<AppFilter>>;
}
