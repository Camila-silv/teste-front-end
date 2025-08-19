import './carousel.styles.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ReactNode, FunctionComponent } from 'react';

import { useModal } from '../../hooks/useModal.hook';
import { useProducts } from '../../hooks/useProducts.hook';

import { Card } from '../index';

interface CarouselProps {
  children: ReactNode;
}

const Carousel: FunctionComponent<CarouselProps> = ({ children }) => {
  const { products } = useProducts();

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
                <Card product={product} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
