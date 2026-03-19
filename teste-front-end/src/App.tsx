import { FC } from 'react';

import { ModalProvider } from './context/ModalContext';
import { ProductsProvider } from './context/ProductsContext';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { FavoritesProvider } from './context/FavoritesContext';

const App: FC = () => {
  return (
    <FavoritesProvider>
      <ProductsProvider>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </ProductsProvider>
    </FavoritesProvider>
  );
};

export default App;
