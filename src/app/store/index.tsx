// CombinedProvider.tsx

import React from "react";
import { CartProvider } from "../../features/cart/addToCart/model";
import { FavoriteProvider } from "../../features/favorites/addToFavorites/model";

export const CombinedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <CartProvider>
    <FavoriteProvider>{children}</FavoriteProvider>
  </CartProvider>
);
