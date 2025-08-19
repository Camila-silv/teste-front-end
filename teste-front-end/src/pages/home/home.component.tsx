import { FunctionComponent } from 'react';

import {
  Banner,
  Categories,
  Carousel,
  Partners,
  Brands,
  Footer,
  Modal,
} from '../../components/index';

// Default theme
import '@splidejs/react-splide/css';

const Home: FunctionComponent = () => {
  return (
    <>
      <Banner />
      <main className="container">
        <section>
          <Categories />
          <Carousel>
            {
              <div>
                <ul className="filter-list">
                  <li>
                    <a href="/" title="celular" className="filter-list__item">
                      celular
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      title="acessórios"
                      className="filter-list__item"
                    >
                      acessórios
                    </a>
                  </li>
                  <li>
                    <a href="/" title="tablets" className="filter-list__item">
                      tablets
                    </a>
                  </li>
                  <li>
                    <a href="/" title="notebooks" className="filter-list__item">
                      notebooks
                    </a>
                  </li>
                  <li>
                    <a href="/" title="TVs" className="filter-list__item">
                      TVs
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Ver todos" className="filter-list__item">
                      Ver todos
                    </a>
                  </li>
                </ul>
              </div>
            }
          </Carousel>
          <Partners />
          <Carousel>{<span className="subtitle">Ver todos</span>}</Carousel>
          <Partners />
          <Brands />
          <Carousel>{<span className="subtitle">Ver todos</span>}</Carousel>
        </section>
      </main>
      <Footer />

      <Modal />
    </>
  );
};

export default Home;
