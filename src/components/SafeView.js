import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const isIOS = Platform.OS === "ios";
const SafeView = ({ children, style }) => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={[
        { paddingTop: isIOS ? top : StatusBar.currentHeight, flex: 1 },
        style,
      ]}
    >
      {children}
    </View>
  );
};
export default SafeView;
