export interface AppFilter {
  min: number;
  max: number;
}

export interface SearchPriceFilter {
  price: AppFilter;
  limit: AppFilter;
  setPrice: React.Dispatch<React.SetStateAction<AppFilter>>;
}
