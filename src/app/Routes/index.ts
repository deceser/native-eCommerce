import CartScreen from "../../screens/cart";
import HomeScreen from "../../screens/home";
import FavoritesScreen from "../../screens/favorites";

interface Screen {
  name: string;
  component: React.ComponentType<any>;
}

export const screens: Screen[] = [
  {
    name: "Home",
    component: HomeScreen,
  },

  {
    name: "Favorites",
    component: FavoritesScreen,
  },

  {
    name: "Cart",
    component: CartScreen,
  },
];
