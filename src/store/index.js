import Vuex from "vuex";
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});

const store = new Vuex.Store({
    state: { // State
        isLoggedIn: false,
        username: null,
        role: null,
        access_token: null,
        refresh_token: null,
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
        update_refresh_token(state, refresh_token){
            state.refresh_token = refresh_token;
        }
    },
    actions: {
        setLoggedInUser({commit},payload){
            commit("update_isLoggedIn", payload.isLoggedIn);
            commit("update_username", payload.username);
            commit("update_user_role", payload.role);
            commit("update_access_token", payload.access_token);
            commit("update_refresh_token", payload.refresh_token);
        },
        clearUser({commit}){
            commit("update_isLoggedIn", false);
            commit("update_username", null);
            commit("update_user_role", null);
            commit("update_access_token", null);
            commit("update_refresh_token", null);
        },
        set_access_token({commit}, payload){
            commit("update_access_token", payload.access_token)
        }
    },
    getters:{
        getCurrentLoggedInUser: state => state.username,
        getMenuItem(state){
            let userDrawer = [
                { title: 'My Profile', route: '/profile' },
                { title: 'Message', route:'/message'},
            ]
            let anonymousDrawer = [
                { title: 'Login', route: '/login' },
                { title: 'Register', route: '/register'}
            ]
            if (state.isLoggedIn){
                return userDrawer
            }else{
                return anonymousDrawer;
            }
        }
    },
    modules: {},
    plugins: [vuexLocal.plugin]
})

export default store
