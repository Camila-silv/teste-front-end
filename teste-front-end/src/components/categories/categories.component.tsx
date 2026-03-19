import './categories.styles.scss';

import { FunctionComponent } from 'react';

import {
  Technology,
  Supermarke,
  Drinks,
  Tools,
  Health,
  Sports,
  Fashion,
} from '../../assets/icons/index';

const Categories: FunctionComponent = () => {
  return (
    <section className="categories-container">
      <a href="/" title="Tecnologia">
        <div className="card active">
          <div>
            <Technology />
          </div>
          <h3>Tecnologia</h3>
        </div>
      </a>

      <a href="/" title="Supermercado">
        <div className="card">
          <div>
            <Supermarke />
          </div>
          <h3>Supermercado</h3>
        </div>
      </a>

      <a href="/" title="Bebidas">
        <div className="card">
          <div>
            <Drinks />
          </div>
          <h3>Bebidas</h3>
        </div>
      </a>

      <a href="/" title="Ferramentas">
        <div className="card">
          <div>
            <Tools />
          </div>
          <h3>Ferramentas</h3>
        </div>
      </a>

      <a href="/" title="Saúde">
        <div className="card">
          <div>
            <Health />
          </div>
          <h3>Saúde</h3>
        </div>
      </a>

      <a href="/" title="Esportes e Fitness">
        <div className="card">
          <div>
            <Sports />
          </div>
          <h3>Esportes e Fitness</h3>
        </div>
      </a>

      <a href="/" title="Moda">
        <div className="card">
          <div>
           <Fashion />
          </div>
          <h3>Moda</h3>
        </div>
      </a>
    </section>
  );
};

export default Categories;
