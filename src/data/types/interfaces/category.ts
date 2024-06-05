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
