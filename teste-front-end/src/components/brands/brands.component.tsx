import { FC, useRef } from 'react';
import './brands.styles.scss';

import logo from '../../assets/logo.webp';

const Brands: FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const getItemWidth = () => {
    const container = carouselRef.current;
    if (!container) return 0;

    const firstItem = container.querySelector(
      '.brands-container__card'
    ) as HTMLElement;

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
    <section className="brands-container">
      <div className="header">
        <h2>Navegue por marcas</h2>

        <div className="controls">
          <button
            onClick={scrollLeft}
            className="brands-container__arrow brands-container__arrow--prev"
          >
            {' '}
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
          <button onClick={scrollRight} className="brands-container__arrow">
            {' '}
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
      </div>

      <div className="carousel" ref={carouselRef}>
        {[...Array(7)].map((_, index) => (
          <div className="item" key={index}>
            <div className="brands-container__card">
              <img
                src={logo}
                alt="Logo Econverse"
                title="Logo Econverse"
                height="35"
                width="117"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
