import Vuex from "vuex";

export default new Vuex.Store({
    state: { // State
        isLoggedIn: false,
        username: null,
        role: null,
        access_token: null,
    },
    mutations: { // Status
        update_isLoggedIn(state, isLoggedIn){
            state.isLoggedIn =  isLoggedIn;
        },
        update_username(state, username){
            state.username = username;
        },
        update_user_role(state, role){
            state.role = role;
        },
        update_access_token(state, access_token){
            state.access_token = access_token;
        },
    },
    actions: {
        setLoggedInUser({commit},payload){
            commit("update_isLoggedIn", payload.loggedIn);
            commit("update_username", payload.username);
            commit("update_user_role", payload.role);
            commit("update_access_token", payload.access_token);
        },
        clearUser({commit}){
            commit("update_isLoggedIn", false);
            commit("update_username", null);
            commit("update_user_role", null);
            commit("update_access_token", null);
        },
        set_access_token({commit}, payload){
            commit("update_access_token", payload.access_token)
        }
    },
    getters:{
        getCurrentLoggedInUser: state => state.username,
    },
    modules: {},
})