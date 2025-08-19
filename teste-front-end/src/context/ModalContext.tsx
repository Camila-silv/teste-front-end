import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ModalContextType {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  selectedProduct: Product | null;
  setSelectedProduct: Dispatch<SetStateAction<Product | null>>;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal, selectedProduct, setSelectedProduct }}>
      {children}
    </ModalContext.Provider>
  );
};
