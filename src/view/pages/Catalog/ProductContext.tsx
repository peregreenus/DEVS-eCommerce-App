/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
// ProductContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IProduct } from '../../../data/types/interfaces/product';

interface ProductContextProps {
  products: IProduct[] | null;
  setProducts: React.Dispatch<React.SetStateAction<IProduct[] | null>>;
}

interface ProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
