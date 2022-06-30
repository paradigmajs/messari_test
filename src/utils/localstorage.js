import AsyncStorage from "@react-native-async-storage/async-storage";

export const get_list_favorites = async () => {
  const list = await AsyncStorage.getItem("list_favorites");
  if (list !== null) return JSON.parse(list);
  else return [];
};

export const add_favorites = async (elem) => {
  let list = await get_list_favorites();
  await AsyncStorage.setItem("list_favorites", JSON.stringify([...list, elem]));
};

export const remove_elem_favorites = async (id) => {
  let list = await get_list_favorites();
  let new_list = list.filter((el) => el.id != id);
  await AsyncStorage.setItem("list_favorites", JSON.stringify(new_list));
};
