import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { screens } from "./Routes/index";

const Stack = createNativeStackNavigator();

const Navigate: React.FC = ({}): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={({}) =>
              ({
                title: "",
              } as NativeStackNavigationOptions)
            }
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
