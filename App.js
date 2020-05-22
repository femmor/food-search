import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from "./src/screens/SearchScreen"
import RestaurantScreen from "./src/screens/RestaurantScreen"

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Restaurant Search' }}
        />
        <Stack.Screen
          name="Restaurant"
          component={RestaurantScreen}
          options={{ title: 'Single Restaurant' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}