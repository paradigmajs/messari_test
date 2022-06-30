import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import {
  add_favorites,
  get_list_favorites,
  remove_elem_favorites,
} from "../../utils/localstorage";
import Detail_page from "../Detail_page";
import Header from "../header/Header";
import Screen from "../Screen";

export default function Detail({ navigation, route }) {
  const { id, name } = route.params.data;
  const { get_one_asset } = useActions();
  const asset = useSelector((state) => state.asset);
  const [listFav, setListFav] = useState([]);
  useEffect(() => {
    get_list();
    get_one_asset(id);
  }, [id]);

  const get_list = async () => {
    setListFav(await get_list_favorites());
  };

  const remove_fav = async (el) => {
    await remove_elem_favorites(el.id);
    get_list();
  };
  const add_fav = async (el) => {
    await add_favorites(el);
    get_list();
  };
  return (
    <Screen
      header={<Header title={name} navigation={navigation} />}
      onRefresh={() => get_one_asset(id)}
    >
      <Detail_page
        elem={route.params.data}
        asset={asset}
        listFav={listFav}
        remove_fav={remove_fav}
        add_fav={add_fav}
      />
    </Screen>
  );
}
