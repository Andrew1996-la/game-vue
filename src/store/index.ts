import { createStore } from "vuex";
import { localStorageBackUpPlugin } from "@/store/plugins/localStorageBackUpPlugin";
import { Data } from "@/types";

export type Action = "+" | "-" | "*" | "/" | "**";

function getDefaultState(): Data {
  return {
    complexity: 1,
    time: 1,
    actions: [],
    userAnswers: {
      rightAnswers: 0,
      wrongAnswers: 0,
    },
  };
}

function getStateFromStorage(): Data | null {
  const storedValue = localStorage.getItem("config");
  return storedValue ? JSON.parse(storedValue) : null;
}

export default createStore<Data>({
  state: getStateFromStorage() || getDefaultState(),
  getters: {
    actionCount: (state) => state.actions.length,
  },
  mutations: {
    SET_COMPLEXITY: (state, payload) => {
      state.complexity = +payload;
    },
    SET_TIME: (state, payload) => {
      state.time = +payload;
    },
    CHOOSE_ACTIONS: (state, payload) => {
      state.actions = [...payload];
    },
    WRITE_ANSWERS: (state, payload) => {
      state.userAnswers.rightAnswers = payload.rightAnswerCount;
      state.userAnswers.wrongAnswers = payload.wrongAnswerCount;
    },
  },
  actions: {
    setComplexity: (context, payload) => {
      context.commit("SET_COMPLEXITY", payload);
    },
    setTime: (context, payload) => {
      context.commit("SET_TIME", payload);
    },
    chooseActions: (context, payload) => {
      context.commit("CHOOSE_ACTIONS", payload);
    },
    writeAnswers: (context, payload) => {
      context.commit("WRITE_ANSWERS", payload);
    },
  },
  plugins: [localStorageBackUpPlugin],
});
