import { Static } from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = new Vuex.Store({
  state: {
    // State
    // role: customer, seller
    isLoggedIn: false,
    username: null,
    firstname: null,
    lastname: null,
    role: null,
    balance: 0,
    access_token: null,
    refresh_token: null,
  },
  mutations: {
    // Status
    update_isLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    update_username(state, username) {
      state.username = username;
    },
    update_user_balance(state, balance) {
      state.balance = balance;
    },
    update_userid(state, userid) {
      state.userid = userid;
    },
    update_user_role(state, role) {
      state.role = role;
    },
    update_access_token(state, access_token) {
      state.access_token = access_token;
    },
    update_refresh_token(state, refresh_token) {
      state.refresh_token = refresh_token;
    },
    update_firstname(state, firstname) {
      state.firstname = firstname;
    },
    update_lastname(state, lastname) {
      state.lastname = lastname;
    },
  },
  actions: {
    setLoggedInUser({ commit }, payload) {
      console.log("----");
      console.log(payload);
      console.log("----");
      commit("update_isLoggedIn", payload.isLoggedIn);
      commit("update_username", payload.username);
      commit("update_firstname", payload.firstname);
      commit("update_lastname", payload.lastname);
      commit("update_user_balance", payload.balance);
      commit("update_user_role", payload.role);
      commit("update_userid", payload.userid);
      commit("update_access_token", payload.access_token);
      commit("update_refresh_token", payload.refresh_token);
    },

    clearUser({ commit }) {
      commit("update_isLoggedIn", false);
      commit("update_username", null);
      commit("update_user_balance", 0);
      commit("update_user_role", null);
      commit("update_userid", null);
      commit("update_access_token", null);
      commit("update_refresh_token", null);
    },

    set_access_token({ commit }, payload) {
      commit("update_access_token", payload.access_token);
    },

    update_user_balance({ commit }, payload) {
      commit("update_user_balance", payload.new_balance);
    },
  },
  getters: {
    getCurrentLoggedInUser: (state) => {
      let current_user = {
        isLoggedIn: state.isLoggedIn,
        username: state.username,
        role: state.role,
        username: state.firstname,
        role: state.lastname,
        balance: state.balance,
        access_token: state.access_token,
        refresh_token: state.refresh_token,
      };
      return current_user;
    },
    getMenuItem(state) {
      let userDrawer = [
        { title: "My Profile", route: "/profile" },
        { title: "Message", route: `/messages?sender_id=${state.username}` },
      ];
      let anonymousDrawer = [
        { title: "Login", route: "/login" },
        { title: "Register", route: "/register" },
      ];
      if (state.isLoggedIn) {
        return userDrawer;
      } else {
        return anonymousDrawer;
      }
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});

export default store;
