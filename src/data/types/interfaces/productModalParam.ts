import { IProduct } from './product';

export interface ProductModalParam {
  modal: boolean;
  numImage: number;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  imagesUrl: string;
  isImage: boolean;
  leftVisible: boolean;
  rightVisible: boolean;
  product: IProduct;
  slideLeft: () => void;
  slideRight: () => void;
  modalShow: () => void;
}
