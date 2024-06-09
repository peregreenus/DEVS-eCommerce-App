import { Discount, Value } from './product';

interface PriceContainerProps {
  discounted?: Discount;
  value: Value;
  inCart: boolean;
  onClick: () => void;
}

export default PriceContainerProps;
