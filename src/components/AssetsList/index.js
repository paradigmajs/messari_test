import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useSelector } from "react-redux";
import { DETAIL } from "../../modules/routes";
import { icons } from "../../utils/icons";

export default function AssetsList({
  navigation,
  listFav,
  remove_fav,
  add_fav,
}) {
  const messari = useSelector((state) => state.messari);

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
    <View style={{ flex: 1 }}>
      <ScrollView nestedScrollEnabled={true}>
        {messari.length > 0 &&
          messari.map((el) => (
            <TouchableOpacity
              key={el.id}
              style={styles.box}
              onPress={() => {
                navigation.navigate(DETAIL, {
                  data: el,
                });
              }}
            >
              <Text style={{ width: "33%" }}>{el.name}</Text>

              {listFav.length > 0 ? (
                get_btn(el)
              ) : (
                <TouchableOpacity onPress={() => add_fav(el)}>
                  <SvgXml width="24" height="24" xml={icons.empty_star} />
                </TouchableOpacity>
              )}

              <Text style={{ width: "33%", textAlign: "right" }}>
                {+el.metrics.market_data.price_usd.toFixed(2)} $
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    borderRadius: 12,
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
    marginHorizontal: 16,
    paddingHorizontal: 8,
    paddingVertical: 24,
    marginBottom: 24,
  },
});
