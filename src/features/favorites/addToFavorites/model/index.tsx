// FavoriteContext

import React, { createContext, useContext, useState } from "react";
import { ProductDummyData } from "../../../../fake";

interface Product {
  id: string;
  productName: string;
  productPrice: number;
  productAddedDate?: string;
  productCategory: string;
}

interface FavoriteContextData {
  data: Product[];
  favorite: Product[];
  addToFavorite: (product: Product) => void;
  removeFromFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoriteContext = createContext<FavoriteContextData>({} as FavoriteContextData);

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteState, setFavoriteState] = useState<{ data: Product[]; favorite: Product[] }>({
    data: ProductDummyData,
    favorite: [],
  });

  const addToFavorite = (item: Product) => {
    const foundItem = favoriteState.favorite.find(e => e.id === item.id);

    if (foundItem) {
      removeFromFavorite(foundItem.id);
      console.log("This product was already in your favorite!");
      return;
    }

    setFavoriteState(prevState => ({
      ...prevState,
      favorite: [...prevState.favorite, item],
    }));

    console.log("Product added to favorite!");
  };

  const removeFromFavorite = (id: string) => {
    setFavoriteState(prevState => ({
      ...prevState,
      favorite: prevState.favorite.filter(item => item.id !== id),
    }));

    console.log("Product removed from favorite!");
  };

  const isFavorite = (id: string) => {
    return favoriteState.favorite.some(item => item.id === id);
  };

  return (
    <FavoriteContext.Provider value={{ ...favoriteState, isFavorite, addToFavorite, removeFromFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);
