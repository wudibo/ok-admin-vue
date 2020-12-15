import {Store} from 'vuex'

interface IState {
    routes: Array<any>;
    addRoutes: Array<string | number>;
}

const state = {
    routes: [],
    addRoutes: [],
    selectedKeys: []
}

const getters = {
    routesGetter(state: { routes: any }, getters: any, rootState: any) {
        return state.routes
    },
    selectedKeysGetter(state: { selectedKeys: any }, getters: any, rootState: any) {
        return state.selectedKeys
    },
}

const mutations = {
    SET_ROUTES: (state: any, routes: any) => {
        state.routes = routes;
    },
    SET_SELECTEDKEYS: (state: any, key: any) => {
        state.selectedKeys = key;
    },
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
