import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { screens } from "./Routes";
import ProductScreen from "../screens/product";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator>
      {screens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: false,
            tabBarItemStyle: { paddingBottom: 10 },
            tabBarStyle: { padding: 10, height: 70 },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Back" component={NavigationTab} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={ProductScreen} options={{ title: "" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
