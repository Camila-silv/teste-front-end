import { FunctionComponent } from 'react';
import './brands.styles.scss';

import logo from '../../../public/logo.webp';

import { Splide, SplideSlide } from '@splidejs/react-splide';

const Brands: FunctionComponent = () => {
  return (
    <div className="brands-container">
      <h2>Navegue por marcas</h2>

      <Splide
        options={{
          gap: '18px',
          perPage: 5,
          arrows: false,
          pagination: false,
          breakpoints: {
            1200: {
              perPage: 3,
            },
            992: {
              perPage: 2,
            },
            600: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
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
        </SplideSlide>
        <SplideSlide>
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
        </SplideSlide>
        <SplideSlide>
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
        </SplideSlide>
        <SplideSlide>
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
        </SplideSlide>
        <SplideSlide>
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
        </SplideSlide>
        <SplideSlide>
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
        </SplideSlide>
        <SplideSlide>
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
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Brands;
