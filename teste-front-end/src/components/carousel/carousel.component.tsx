import './carousel.styles.scss';
import { ReactNode, FC, useRef } from 'react';

import { useProducts } from '../../hooks/useProducts.hook';
import { Card } from '../index';

interface CarouselProps {
  children: ReactNode;
}

const Carousel: FC<CarouselProps> = ({ children }) => {
  const { products } = useProducts();
  const carouselRef = useRef<HTMLDivElement>(null);

  const getItemWidth = () => {
    const container = carouselRef.current;
    if (!container) return 0;

    const firstItem = container.querySelector('.item') as HTMLElement;
    if (!firstItem) return 0;

    const style = window.getComputedStyle(container);
    const gap = parseInt(style.columnGap || style.gap || '0');

    return firstItem.offsetWidth + gap;
  };

  const scrollLeft = () => {
    const width = getItemWidth();

    carouselRef.current?.scrollBy({
      left: -width,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    const width = getItemWidth();

    carouselRef.current?.scrollBy({
      left: width,
      behavior: 'smooth',
    });
  };

  return (
    <section className="carousel-container">
      <div className="header">
        <h2>Produtos relacionados</h2>

        <div className="arrows-container">
          <button
            className="carousel-container_arrow carousel-container_arrow--prev"
            onClick={scrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="40"
              height="40"
              focusable="false"
            >
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
          <button
            className="carousel-container_arrow carousel-container_arrow--next"
            onClick={scrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="40"
              height="40"
              focusable="false"
            >
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
        </div>

        {children}
      </div>

      <div className="content">
        <div className="carousel" ref={carouselRef}>
          {products.map(product => (
            <div className="item" key={product.productName}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
