import { FC, useContext } from 'react';
import './modal.styles.scss';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';
import { useModal } from '../../hooks/useModal.hook';

const Modal: FC = () => {
  const { showModal, setShowModal, selectedProduct } = useModal();

  if (!selectedProduct) return null;

  return (
    <div
      className={`modal-container ${showModal && `modal-container--active`}`}
    >
      <div className={`content ${showModal && `content--active`}`}>
        <button
          className="close-btn"
          onClick={() => setShowModal(false)}
          title="Botão fechar"
        >
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
              <button title="Botão adicionar item">
                <GrFormAdd />
              </button>
              <input
                type="number"
                min={1}
                max={10}
                aria-label="Quantidade de itens"
              />
              <button title="Botão remover item">
                <GrFormSubtract />
              </button>
            </form>
            <button title="Botão Comprar" className="buy-btn">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
