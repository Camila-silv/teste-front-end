import './carousel.styles.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ReactNode, FunctionComponent } from 'react';

import { useModal } from '../../hooks/useModal.hook';
import { useProducts } from '../../hooks/useProducts.hook';

import { Product } from "../../context/ProductsContext";

interface CarouselProps {
  children: ReactNode;
}

const Carousel: FunctionComponent<CarouselProps> = ({ children }) => {
  const { setShowModal, setSelectedProduct } = useModal();
  const { products } = useProducts();

  const handleModal = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="carousel-container ">
      <div className="header">
        <h2>Produtos relacionados</h2>

        {children}
      </div>

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
                    <a
                      href="/"
                      title="Comprar"
                      className="btn"
                      onClick={(e) => handleModal(e, product)}
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
