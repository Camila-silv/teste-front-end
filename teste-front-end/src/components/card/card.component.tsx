import { FunctionComponent, useContext } from 'react';

import './card.styles.scss';

import { useModal } from '../../hooks/useModal.hook';
import { useFavorites } from '../../hooks/useFavorites.hooks';
import { Product } from '../../context/ProductsContext';

import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

interface CardProps {
  product: Product;
}

const Card: FunctionComponent<CardProps> = ({ product }) => {
  const { setShowModal, setSelectedProduct } = useModal();
  const { favoritesList, setFavoritesList } = useFavorites();

  const handleModal = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    setSelectedProduct(product);
    setShowModal(true);
  };

 const handleFavorite = (e: React.MouseEvent, product: Product) => {
  e.preventDefault();

  if (favoritesList.some(fav => fav.productName === product.productName)) {
    setFavoritesList(favoritesList.filter(fav => fav.productName !== product.productName));
  } else {
    setFavoritesList([...favoritesList, product]);
  }
};

  return (
    <div className="product-card">
      <button
        className="favorite-btn"
        onClick={e => handleFavorite(e, product)}
      >
        {!favoritesList.some(fav => fav.productName === product.productName) ? (
          <IoHeartOutline />
        ) : (
          <IoHeartSharp />
        )}
      </button>
      <img
        src={product.photo}
        alt={product.productName}
        title={product.productName}
        loading="lazy"
        height="228"
        width="272"
      />
      <div className="content">
        <h3>{product.descriptionShort}</h3>
        <span className="old-price">
          {(product.price * 20).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <span className="current-price">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <span className="installment-price">
          ou 2x de{' '}
          {(product.price / 2).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}{' '}
          sem juros
        </span>
        <span className="label">Frete grátis</span>
        <div className="btn-container">
          <a
            href="/"
            title="Comprar"
            className="btn"
            onClick={e => handleModal(e, product)}
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
