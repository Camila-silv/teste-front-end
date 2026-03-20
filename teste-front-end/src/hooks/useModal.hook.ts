import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

export const useModal = () => {
  const context = useContext(ModalContext);

  if (context === null) {
    throw new Error('useModal deve ser usado dentro de ModalProvider');
  }

  return context;
};