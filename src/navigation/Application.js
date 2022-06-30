import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Main from "./Main";
import Fav from "./Favorites";
import { icons } from "../utils/icons";
import { SvgXml } from "react-native-svg";
const isIOS = Platform.OS === "ios";
const Tab = createBottomTabNavigator();
export default function Application() {
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case "Favorite":
              return (
                <SvgXml
                  width="25"
                  height="24"
                  xml={color == "#4387F1" ? icons.assets_active : icons.assets}
                />
              );
            default:
              return (
                <SvgXml
                  width="25"
                  height="24"
                  xml={color == "#4387F1" ? icons.home_active : icons.home}
                />
              );
          }
        },
        headerShown: false,
        tabBarActiveTintColor: "#4387F1",
        tabBarInactiveTintColor: "#8B8B8B",
        tabBarShowLabel: true,
        tabBarStyle: [
          {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          },
        ],
        tabBarLabelStyle: {
          marginTop: -4,
        },
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name={"Assets"} component={Main} />
      <Tab.Screen name={"Favorite"} component={Fav} />
    </Tab.Navigator>
  );
}
