import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HOME, DETAIL } from "../modules/routes";
import Home from "../components/views/Home";
import Detail from "../components/views/Detail";

const Stack = createStackNavigator();
export default function Main() {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
}
