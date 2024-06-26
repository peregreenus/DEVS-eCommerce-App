import { AppState } from '../main-props';
import { IProduct } from './product';

export interface ProductCardProps {
  product: IProduct;
  goToProduct: (id: string) => void;
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}
