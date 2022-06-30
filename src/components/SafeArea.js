import React from "react";
import { Platform, SafeAreaView } from "react-native";
import { SafeAreaView as NativeSafeArea } from "react-native-safe-area-context";
const isIOS = Platform.OS === "ios";
const SafeArea = ({ children }) => {
  if (isIOS) {
    return (
      <NativeSafeArea edges={4} style={{ flex: 1 }}>
        {children}
      </NativeSafeArea>
    );
  }
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
};
export default SafeArea;
