import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isUserConnected: false,
    username: localStorage.getItem("username"),
  },
  mutations: {
    isUserConnectedMutation(state, data) {
      state.isUserConnected = data;
    },
    updateUsername(state, newUsername) {
      state.username = newUsername;
    },
  },
  actions: {},
  modules: {},
});
