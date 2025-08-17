import './carousel.styles.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { ReactNode, FunctionComponent } from 'react';

import teste from '../../../public/teste.png';

interface CarouselProps {
  children: ReactNode;
}

const Carousel: FunctionComponent<CarouselProps> = ({ children }) => {
  return (
    <div className="carousel-container">
      <h2>Produtos relacionados</h2>

      {children}

      <div className="content">
        <Splide
          options={{
            gap: '18px',
            perPage: 4,
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
            <div className="carousel-container__card">
              <img
                src={teste}
                alt=""
                title=""
                loading="lazy"
                height="228"
                width="272"
              />
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span className="old-price">R$ 30,90</span>
                <span className="current-price">R$ 28,90</span>
                <span className="installment-price">
                  ou 2x de R$ 49,95 sem juros
                </span>
                <span className="label">Frete grátis</span>
                <a href="" title="Comprar" className="btn">
                  Comprar
                </a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="carousel-container__card">
              <img
                src={teste}
                alt=""
                title=""
                loading="lazy"
                height="228"
                width="272"
              />
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span className="old-price">R$ 30,90</span>
                <span className="current-price">R$ 28,90</span>
                <span className="installment-price">
                  ou 2x de R$ 49,95 sem juros
                </span>
                <span className="label">Frete grátis</span>
                <a href="" title="Comprar" className="btn">
                  Comprar
                </a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="carousel-container__card">
              <img
                src={teste}
                alt=""
                title=""
                loading="lazy"
                height="228"
                width="272"
              />
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span className="old-price">R$ 30,90</span>
                <span className="current-price">R$ 28,90</span>
                <span className="installment-price">
                  ou 2x de R$ 49,95 sem juros
                </span>
                <span className="label">Frete grátis</span>
                <a href="" title="Comprar" className="btn">
                  Comprar
                </a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="carousel-container__card">
              <img
                src={teste}
                alt=""
                title=""
                loading="lazy"
                height="228"
                width="272"
              />
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span className="old-price">R$ 30,90</span>
                <span className="current-price">R$ 28,90</span>
                <span className="installment-price">
                  ou 2x de R$ 49,95 sem juros
                </span>
                <span className="label">Frete grátis</span>
                <a href="" title="Comprar" className="btn">
                  Comprar
                </a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="carousel-container__card">
              <img
                src={teste}
                alt=""
                title=""
                loading="lazy"
                height="228"
                width="272"
              />
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span className="old-price">R$ 30,90</span>
                <span className="current-price">R$ 28,90</span>
                <span className="installment-price">
                  ou 2x de R$ 49,95 sem juros
                </span>
                <span className="label">Frete grátis</span>
                <a href="" title="Comprar" className="btn">
                  Comprar
                </a>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;
