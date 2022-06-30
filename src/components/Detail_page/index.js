import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { icons } from "../../utils/icons";

export default function Detail_page({
  elem,
  asset,
  listFav,
  remove_fav,
  add_fav,
}) {
  const get_btn = (el) => {
    let a = listFav.find((item) => item.id === el.id);
    if (a) {
      return (
        <TouchableOpacity onPress={() => remove_fav(el)}>
          <SvgXml width="24" height="24" xml={icons.star} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => add_fav(el)}>
          <SvgXml width="24" height="24" xml={icons.empty_star} />
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={styles.name}>Name: {asset?.name}</Text>
      <Text style={styles.price}>
        Price: {+asset?.market_data?.price_usd.toFixed(2)} $
      </Text>
      <View style={styles.row}>
        <Text>Favorite: </Text>
        {listFav.length > 0 ? (
          get_btn(elem)
        ) : (
          <TouchableOpacity onPress={() => add_fav(elem)}>
            <SvgXml width="24" height="24" xml={icons.empty_star} />
          </TouchableOpacity>
        )}
      </View>

      <View>
        <Text style={[styles.name, { marginTop: 24 }]}>
          Open-high-low-close chart
        </Text>
        <Text
          style={[
            styles.name,
            { marginTop: 4, color: "#b8b8b8", fontSize: 12 },
          ]}
        >
          Last 24 hour
        </Text>

        <Text style={styles.label}>
          Open:
          <Text style={styles.label_text}>
            {+asset?.market_data?.ohlcv_last_24_hour.open.toFixed(2)}
          </Text>
        </Text>
        <Text style={styles.label}>
          High:{" "}
          <Text style={styles.label_text}>
            {+asset?.market_data?.ohlcv_last_24_hour.high.toFixed(2)}
          </Text>
        </Text>
        <Text style={styles.label}>
          Low:{" "}
          <Text style={styles.label_text}>
            {+asset?.market_data?.ohlcv_last_24_hour.low.toFixed(2)}
          </Text>
        </Text>
        <Text style={styles.label}>
          Close:{" "}
          <Text style={styles.label_text}>
            {+asset?.market_data?.ohlcv_last_24_hour.close.toFixed(2)}
          </Text>
        </Text>
        <Text style={styles.label}>
          Volume:{" "}
          <Text style={styles.label_text}>
            {+asset?.market_data?.ohlcv_last_24_hour.volume.toFixed(2)}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
  },
  label_text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#8b8b8b",
    marginLeft: 16,
  },
});
