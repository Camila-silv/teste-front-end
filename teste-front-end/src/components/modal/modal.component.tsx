import { FunctionComponent } from 'react';
import './modal.styles.scss';
import teste from '../../../public/teste.png';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';

const Modal: FunctionComponent = () => {
  return (
    <div className="modal-container">
      <div className="content">
        <button className="close-btn">
          <IoCloseOutline />
        </button>
        <div className="left">
          <img
            src={teste}
            alt=""
            title=""
            loading="lazy"
            height="203"
            width="169"
          />
        </div>
        <div className="right">
          <h3>Lorem ipsum dolor sit amet</h3>
          <span>R$ 1.499,90</span>
          <p>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <a href="/" title="Detalhes do produto" className="details-btn">
            Veja mais detalhes do produto <MdKeyboardArrowRight />
          </a>
          <div className="group-container">
            <form>
              <button>
                <GrFormAdd />
              </button>
              <input type="number" min={1} max={10} aria-label="Quantidade de itens" />
              <button>
                <GrFormSubtract />
              </button>
            </form>
            <a href="/" title="Comprar" className="buy-btn">
              Comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
