import { ICategory } from './category';

export default interface CategoriesProps {
  categories: ICategory[];
  setCategoryId: React.Dispatch<React.SetStateAction<string>>;
  categoryId: string;
  // eslint-disable-next-line semi
}
