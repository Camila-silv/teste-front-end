import { createContext, ReactNode, useEffect, useState } from 'react';

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const API_URL =
    import.meta.env.MODE === 'development'
      ? '/api/produtos.json'
      : 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

  const fetchProducts = async () => {
    const response = await fetch(API_URL);
    const data: Product[] = await response.json().then(resp => resp.products);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
