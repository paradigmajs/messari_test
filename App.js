import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Application from "./src/navigation/Application";
import { store } from "./src/redux/store";
import { StatusBar } from "react-native";
import SafeArea from "./src/components/SafeArea";

export default function App() {
  return (
    <Provider store={store}>
      <SafeArea style={{ flex: 1 }}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <NavigationContainer>
          <Application />
        </NavigationContainer>
      </SafeArea>
    </Provider>
  );
}

