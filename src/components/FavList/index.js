import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { DETAIL } from "../../modules/routes";
import { icons } from "../../utils/icons";


export default function FavList({ navigation, list,remove_fav }) {
 
  return (
    <View style={{ flex: 1 }}>
      <ScrollView  nestedScrollEnabled={true}>
        {list.length > 0 ?
          list.map((el) => (
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
              <TouchableOpacity onPress={() => remove_fav(el)}>
                <SvgXml
                  width="24"
                  height="24"
                  xml={icons.star}
                />
              </TouchableOpacity>
              <Text style={{ width: "33%", textAlign: "right" }}>
                {+el.metrics.market_data.price_usd.toFixed(2)} $
              </Text>
            </TouchableOpacity>
          ))
          : <Text style={styles.empty_text}>Empty</Text>
          }
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
  empty_text:{
      color:'#8b8b8b',
      fontWeight:'600',
      fontSize:22,
      textAlign:'center',
      marginTop:320
  }
});
