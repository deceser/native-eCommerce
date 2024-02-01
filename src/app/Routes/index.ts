import CartScreend from "../../screens/cart";
import HomeScreen from "../../screens/home";

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
    name: "Cart",
    component: CartScreend,
  },
];
