interface IValue {
  type: string;
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
}

interface IDiscounted {
  value: IValue;
  discount: {
    typeId: string;
    id: string;
  };
}

interface PriceContainerProps {
  discounted?: IDiscounted;
  value: IValue;
  onClick: () => void;
}

export default PriceContainerProps;
