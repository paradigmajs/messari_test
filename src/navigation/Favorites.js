import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HOME, DETAIL, FAVORITES } from "../modules/routes";

import Detail from "../components/views/Detail";
import Favorites from "../components/views/Favorites";

const Stack = createStackNavigator();
export default function Fav() {
  return (
    <Stack.Navigator
      initialRouteName={FAVORITES}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={FAVORITES} component={Favorites} />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
}
