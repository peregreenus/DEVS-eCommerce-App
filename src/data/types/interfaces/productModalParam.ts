export interface ProductModalParam {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  imagesUrl: string;
  isImage: boolean;
  leftVisible: boolean;
  rightVisible: boolean;
  slideLeft: () => void;
  slideRight: () => void;
  modalShow: () => void;
}
