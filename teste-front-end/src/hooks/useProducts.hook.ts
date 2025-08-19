import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("Algo deu errado...");
  }

  return context;
};
