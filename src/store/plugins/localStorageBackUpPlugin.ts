import { Store } from "vuex";
import { Data } from "@/types";

export const localStorageBackUpPlugin = (store: Store<Data>) => {
  store.subscribe((mutation, state) => {
    localStorage.setItem("config", JSON.stringify(state));
  });
};

export const localStorageSetDate = (date: string) => {
  localStorage.setItem("dateLastGame", JSON.stringify(date));
};

export const localStorageGetDate = () => {
  return localStorage.getItem("dateLastGame");
};
