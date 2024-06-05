interface Name {
  en: string;
}

interface Slug {
  en: string;
}

interface Parent {
  typeId: string;
  id: string;
}

export interface ICategory {
  [x: string]: any;
  id: string;
  version: number;
  name: Name;
  slug: Slug;
  parent: Parent;
  ancestors: string[];
  orderHint: string;
  createdAt: string;
  lastModifiedAt: string;
}

export interface CategoryFilter {
  categories: ICategory[];
  setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
}
