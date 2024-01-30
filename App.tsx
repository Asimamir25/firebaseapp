import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeSecreen from "./HomeSecreen";
import Detail from "./Detail";
export type rootstackparamlist = {
  HomeSecreen: undefined; // undefined because you aren't passing any params to the home screen
  Detail: undefined;
};
export default function App() {
  const Stack = createStackNavigator<rootstackparamlist>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeSecreen" component={HomeSecreen} />

        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
