import { Discount, IProduct, Value } from './product';

interface PriceContainerProps {
  product: IProduct;
  discounted?: Discount;
  htmlContent: string;
  value: Value;
  inCart: boolean;
  onClick: () => void;
}

export default PriceContainerProps;
