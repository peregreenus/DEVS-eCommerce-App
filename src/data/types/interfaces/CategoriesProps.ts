import { ICategory } from './category';

interface CategoriesProps {
  categories: ICategory[];
  setCategoryId: React.Dispatch<React.SetStateAction<string>>;
  categoryId: string;
}
export default CategoriesProps;
