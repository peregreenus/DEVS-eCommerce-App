import { Discount, Value } from './product';

interface PriceContainerProps {
  discounted?: Discount;
  value: Value;
  onClick: () => void;
}

export default PriceContainerProps;
