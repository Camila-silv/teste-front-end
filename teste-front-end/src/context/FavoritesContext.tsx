import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { Product } from './ProductsContext';

interface FavoritesProviderProps {
  children: ReactNode;
}

interface FavoritesContextType {
  favoritesList: Product[];
  setFavoritesList: Dispatch<SetStateAction<Product[]>>;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favoritesList, setFavoritesList] = useState<Product[]>([]);

  return (
    <FavoritesContext.Provider value={{ favoritesList, setFavoritesList }}>
      {children}
    </FavoritesContext.Provider>
  );
};
