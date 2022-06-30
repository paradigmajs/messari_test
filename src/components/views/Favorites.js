import React, { useEffect, useState } from "react";
import {
  get_list_favorites,
  remove_elem_favorites,
} from "../../utils/localstorage";
import Header from "../header/Header";
import Screen from "../Screen";
import FavList from "../FavList";
export default function Favorites({ navigation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    get_list();
    const unsubscribe = navigation.addListener("focus", () => {
      
      get_list();
    });
    return () => {
      unsubscribe;
    };
  }, [navigation]);
  const get_list = async () => {
    setList(await get_list_favorites());
  };
  const remove_fav = async (el) => {
    await remove_elem_favorites(el.id);
    get_list();
  };
  return (
    <Screen onRefresh={get_list} header={<Header title="Favorites" />}>
      <FavList navigation={navigation} list={list} remove_fav={remove_fav} />
    </Screen>
  );
}
