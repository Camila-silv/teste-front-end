import './categories.styles.scss';

import { FunctionComponent } from 'react';

import technology from '../../../public/icons/categories/technology.svg';
import supermarke from '../../../public/icons/categories/supermarket.svg';
import drinks from '../../../public/icons/categories/drinks.svg';
import tools from '../../../public/icons/categories/tools.svg';
import health from '../../../public/icons/categories/health.svg';
import sports from '../../../public/icons/categories/sports.svg';
import fashion from '../../../public/icons/categories/fashion.svg';

const Categories: FunctionComponent = () => {
  return (
    <div className="categories-container">
      <a href="/" title="Tecnologia">
        <div className="card active">
          <div>
            <img
              src={technology}
              alt="Icone Tecnologia"
              title="Icone Tecnologia"
              height=""
              width=""
              loading="lazy"
            />
          </div>
          <h3>Tecnologia</h3>
        </div>
      </a>

      <a href="/" title="Supermercado">
        <div className="card">
          <div>
            <img
              src={supermarke}
              alt="Icone Supermercado"
              title="Icone Supermercado"
              height=""
              width=""
              loading="lazy"
            />
          </div>
          <h3>Supermercado</h3>
        </div>
      </a>

      <a href="/" title="Bebidas">
        <div className="card">
          <div>
            <img
              src={drinks}
              alt="Icone Bebidas"
              title="Icone Bebidas"
              height=""
              width=""
              loading="lazy"
            />
          </div>
          <h3>Bebidas</h3>
        </div>
      </a>

      <a href="/" title="Ferramentas">
        <div className="card">
          <div>
            <img
              src={tools}
              alt="Icone Ferramentas"
              title="Icone Ferramentas"
              height=""
              width=""
              loading="lazy"
            />
          </div>
          <h3>Ferramentas</h3>
        </div>
      </a>

      <a href="/" title="Saúde">
        <div className="card">
          <div>
            <img
              src={health}
              alt="Icone Saúde"
              title="Icone Saúde"
              height=""
              width=""
              loading="lazy"
            />
          </div>
          <h3>Saúde</h3>
        </div>
      </a>

      <a href="/" title="Esportes e Fitness">
        <div className="card">
          <div>
            <img
              src={sports}
              alt="Icone Esportes e Fitness"
              title="Icone Esportes e Fitness"
              height=""
              width=""
              loading="lazy"
            />
          </div>
          <h3>Esportes e Fitness</h3>
        </div>
      </a>

      <a href="/" title="Moda">
        <div className="card">
          <div>
            <img
              src={fashion}
              alt="Icone Moda"
              title="Icone Moda"
              height=""
              width=""
              loading="lazy"
            />
          </div>
          <h3>Moda</h3>
        </div>
      </a>
    </div>
  );
};

export default Categories;
