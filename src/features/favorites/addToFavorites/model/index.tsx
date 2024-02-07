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
      console.log("This product was already in your favorite!");
      return;
    }

    setFavoriteState(prevState => ({
      ...prevState,
      favorite: [...prevState.favorite, item],
    }));

    console.log("Product added to favorite!");
  };

  return <FavoriteContext.Provider value={{ ...favoriteState, addToFavorite }}>{children}</FavoriteContext.Provider>;
};

export const useFavorite = () => useContext(FavoriteContext);
