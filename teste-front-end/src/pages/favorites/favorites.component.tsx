import { FC } from 'react';

import './favorites.styles.scss';
import { useFavorites } from '../../hooks/useFavorites.hooks';
import { Card, Modal } from '../../components';

const Favorites: FC = () => {
  const { favoritesList } = useFavorites();
  return (
    <>
      <div className="container">
        <div className="favorites-container">
          <h2>Favoritos</h2>

          {favoritesList.length === 0 ? (
            <p className="favorites-container__alert">Sem favoritos...</p>
          ) : (
            <div className="content">
              {favoritesList.map(favorite => (
                <Card product={favorite} key={favorite.productName} size='large'/>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
