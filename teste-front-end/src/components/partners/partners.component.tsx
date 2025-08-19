import './partners.styles.scss';

import { FunctionComponent } from 'react';

const Partners: FunctionComponent = () => {
  return (
    <div className="partners-container">
      <div className="partners-container__card">
        <h2>Parceiros</h2>
        <p>Lorem ipsum dolor sit <br/>amet, consectetur</p>
        <a href="" title="Confira nossos parceiros">
          Confira
        </a>
      </div>
      <div className="partners-container__card">
        <h2>Parceiros</h2>
        <p>Lorem ipsum dolor sit <br/>amet, consectetur</p>
        <a href="" title="Confira nossos parceiros">
          Confira
        </a>
      </div>
    </div>
  );
};

export default Partners;
