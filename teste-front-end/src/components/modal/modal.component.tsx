import { FC, useState } from 'react';
import './modal.styles.scss';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';
import { useModal } from '../../hooks/useModal.hook';

type Variant = 'add' | 'remove';

const Modal: FC = () => {
  const { showModal, setShowModal, selectedProduct } = useModal();
  const [amount, setAmount] = useState(1);

  if (!showModal || !selectedProduct) return null;

  const handleAmount = (variant: Variant) => {
    setAmount(prev => {
      if (variant === 'remove') {
        if (prev <= 1) return prev;
        return prev - 1;
      }

      if (variant === 'add') {
        if (prev >= 10) return prev;
        return prev + 1;
      }

      return prev;
    });
  };

  const handleWindow = () => {
    setAmount(1)
    setShowModal(false)
  }

  return (
    <div className="modal-container modal-container--active">
      <div className="content content--active">
        <button
          className="close-btn"
          onClick={handleWindow}
          title="Fechar"
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
            {selectedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>

          <p>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>

          <a href="/" className="details-btn">
            Veja mais detalhes do produto <MdKeyboardArrowRight />
          </a>

          <div className="group-container">
            <form onSubmit={e => e.preventDefault()}>
              <button
                type="button"
                onClick={() => handleAmount('remove')}
                title="Diminuir"
              >
                <GrFormSubtract />
              </button>

              <input
                type="number"
                value={amount}
                readOnly
                aria-label="Quantidade"
              />

              <button
                type="button"
                onClick={() => handleAmount('add')}
                title="Aumentar"
              >
                <GrFormAdd />
              </button>
            </form>

            <button className="buy-btn" title="Comprar">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;