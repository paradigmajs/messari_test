import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { icons } from "../../utils/icons";
import { SvgXml } from "react-native-svg";

export default function Header({ navigation, title }) {
  return (
    <View style={styles.background}>
      {navigation ? (
        <TouchableOpacity
          style={{ width: 44 }}
          onPress={() => navigation.goBack()}
        >
          <SvgXml width="16" height="16" xml={icons.go_back} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 44 }} />
      )}

      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 44 }} />
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    height: 50,
    padding: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    zIndex: 1,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },
});
