import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.localStorage
    })
  ],
  state: {
    //to Test Login
    currentUser: undefined,
    token: ""

  },
  mutations: {},
  actions: {
    pressLogin: ({ commit }, payload) => {
      commit("changeLoginPressedState", payload);
    },
    loginUser: ({ commit }, payload) => {
      commit("setUser", payload);
    }
  },
  modules: {}
});
