import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { screens } from "./Routes/index";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigate: React.FC = ({}): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarItemStyle: { paddingBottom: 10 },
          tabBarStyle: { padding: 10, height: 70 },
        }}>
        {screens.map(screen => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={({}) => ({
              title: screen.name,
            })}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;

// export default function NavigationScreens () {
//   return (
//    <Stack.Navigator
//    screenOptions={{
//     headerTitle: "",
//     headerTransparent: true,
//     headerTintColor: "white",
//     headerLeftContainerStyle: { paddingLeft: 20 },
//     headerStyle: { backgroundColor: "transparent" },
//   }}
//   initialRouteName="MainContent"

//    >

//     <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false}}  />
//     <Stack.Screen name='MainContent' component={TabStack}  options={{ headerShown: false }} />

//     <Stack.Group name="CartStack" >

//     </Stack.Group>

//     <Stack.Screen name='Cart' component={Cart}/>

//    </Stack.Navigator>

//   )
// }
