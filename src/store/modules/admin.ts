import {Store} from 'vuex'

interface IState {
    routes: Array<any>;
    addRoutes: Array<string | number>;
}

const state = {
    routes: [],
    addRoutes: []
}

const getters = {
    routesGetter(state: { routes: any }, getters: any, rootState: any) {
        return state.routes
    }
}

const mutations = {
    SET_ROUTES: (state: any, routes: any) => {
        state.routes = routes;
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
