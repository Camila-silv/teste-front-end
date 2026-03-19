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
    <div className="categories-container">
      <a href="/" title="Tecnologia">
        <div className="card active">
          <div>
            <Technology />
          </div>
          <h2 className='title'>Tecnologia</h2>
        </div>
      </a>

      <a href="/" title="Supermercado">
        <div className="card">
          <div>
            <Supermarke />
          </div>
          <h2 className='title'>Supermercado</h2>
        </div>
      </a>

      <a href="/" title="Bebidas">
        <div className="card">
          <div>
            <Drinks />
          </div>
          <h2 className='title'>Bebidas</h2>
        </div>
      </a>

      <a href="/" title="Ferramentas">
        <div className="card">
          <div>
            <Tools />
          </div>
          <h2 className='title'>Ferramentas</h2>
        </div>
      </a>

      <a href="/" title="Saúde">
        <div className="card">
          <div>
            <Health />
          </div>
          <h2 className='title'>Saúde</h2>
        </div>
      </a>

      <a href="/" title="Esportes e Fitness">
        <div className="card">
          <div>
            <Sports />
          </div>
          <h2 className='title'>Esportes e Fitness</h2>
        </div>
      </a>

      <a href="/" title="Moda">
        <div className="card">
          <div>
           <Fashion />
          </div>
          <h2 className='title'>Moda</h2>
        </div>
      </a>
    </div>
  );
};

export default Categories;
