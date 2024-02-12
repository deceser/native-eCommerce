import CartScreen from "../../screens/cart";
import CartSVG from "../../shared/icons/cart";

import HomeScreen from "../../screens/home";

import FavoritesScreen from "../../screens/favorites";
import HeartSVG from "../../shared/icons/heart";

interface Screen {
  name: string;
  component: React.ComponentType<any>;
  tabIcon?: any;
}

export const screens: Screen[] = [
  {
    name: "Home",
    component: HomeScreen,
    tabIcon: <CartSVG stroke="none" width={22} height={22} fill="" />,
  },

  {
    name: "Favorite",
    component: FavoritesScreen,
    tabIcon: <HeartSVG stroke="black" width={22} height={22} fill="none" />,
  },

  {
    name: "Cart",
    component: CartScreen,
    tabIcon: <CartSVG stroke="" width={22} height={22} fill="" />,
  },
];
