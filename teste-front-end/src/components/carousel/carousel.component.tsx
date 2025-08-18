import './carousel.styles.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ReactNode, FunctionComponent, useContext } from 'react';

import teste from '../../../public/teste.png';
import { useModal } from '../../hooks/useModal.hook';
import { ProductsContext } from '../../context/ProductsContext';
import { useProducts } from '../../hooks/useProducts.hook';

interface CarouselProps {
  children: ReactNode;
}

const Carousel: FunctionComponent<CarouselProps> = ({ children }) => {
  const { setShowModal } = useModal();
  const { products } = useProducts();

  const handleModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="carousel-container ">
      <h2>Produtos relacionados</h2>

      {children}

      <div className="content">
        <div className="container">
          <Splide
            options={{
              gap: '18px',
              perPage: 4,
              pagination: false,
              breakpoints: {
                1200: { perPage: 3 },
                992: { perPage: 2 },
                600: { perPage: 1 },
              },
            }}
          >
            {products.map(product => (
              <SplideSlide key={product.productName}>
                <div className="carousel-container__card">
                  <img
                    src={teste}
                    alt={product.productName}
                    title={product.productName}
                    loading="lazy"
                    height="228"
                    width="272"
                  />
                  <div className="content">
                    <p>{product.descriptionShort}</p>
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
                    <a
                      href="/"
                      title="Comprar"
                      className="btn"
                      onClick={handleModal}
                    >
                      Comprar
                    </a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
