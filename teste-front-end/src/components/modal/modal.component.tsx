import { FunctionComponent, useContext } from 'react';
import './modal.styles.scss';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';
import { useModal } from '../../hooks/useModal.hook';


const Modal: FunctionComponent = () => {
  const { showModal, setShowModal, selectedProduct } = useModal();

  if (!selectedProduct) return null; 

  return (
    <div
      className={`modal-container ${showModal && `modal-container--active`}`}
    >
      <div className={`content ${showModal && `content--active`}`}>
        <button className="close-btn" onClick={() => setShowModal(false)}>
          <IoCloseOutline />
        </button>
        <div className="left">
          <img
            src={selectedProduct.photo}
            alt={selectedProduct.productName}
            title={selectedProduct.productName}
            loading="lazy"
            height="203"
            width="169"
          />
        </div>
        <div className="right">
          <h3>{selectedProduct.productName}</h3>
          <span>
            {' '}
            {selectedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
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
              <input
                type="number"
                min={1}
                max={10}
                aria-label="Quantidade de itens"
              />
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
