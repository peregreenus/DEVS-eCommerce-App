import { IProduct } from './product';

export interface ProductCardProps {
  product: IProduct;
  goToProduct: (id: string) => void;
}
