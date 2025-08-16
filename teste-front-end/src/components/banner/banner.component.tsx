import './banner.styles.scss';

import { FunctionComponent } from 'react';

const Banner: FunctionComponent = () => {
  return (
    <div className="banner-container px">
      <div className="container">
        <div>
          <h2>Venha conhecer nossas <br/> promoções</h2>
          <p>
            <span>50% Off</span> nos produtos
          </p>
          <a href="/" title="Ver produto">Ver produto</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
