import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("Algo deu errado...");
  }

  return context;
};
