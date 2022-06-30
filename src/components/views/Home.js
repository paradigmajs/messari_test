import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import AssetsList from "../AssetsList";
import Header from "../header/Header";
import Screen from "../Screen";
import {
  add_favorites,
  get_list_favorites,
  remove_elem_favorites,
} from "../../utils/localstorage";

export default function Home({ navigation }) {
  const { get_assets } = useActions();
  const [page, setPage] = useState(1);
  const [listFav, setListFav] = useState([]);
  useEffect(() => {
    get_assets(page);
    get_list();
    const unsubscribe = navigation.addListener("focus", () => {
      get_assets(1,true);
      get_list();
    });
    return () => {
      unsubscribe;
    };
  }, [page]);

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
      header={<Header title="Assets" />}
      onRefresh={() => {
        get_assets(1, true);
        setPage(1);
        get_list();
      }}
      page={page}
      setPage={setPage}
    >
      <AssetsList
        navigation={navigation}
        remove_fav={remove_fav}
        add_fav={add_fav}
        listFav={listFav}
      />
    </Screen>
  );
}
