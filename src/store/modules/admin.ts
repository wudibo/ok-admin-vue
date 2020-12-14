import {Store} from 'vuex'

interface IState {
    routes: Array<any>;
    addRoutes: Array<string | number>;
}

const state = {
    routes: [5],
    addRoutes: []
}

const getters = {
    routesGetter(state: { routes: any }, getters: any, rootState: any) {
        return state.routes
    }
}

const mutations = {
    SET_ROUTES: (state: any, routes: any) => {
        console.log(...state.routes);
        // state.routes.target.push(routes)
        state.routes = [routes];//state.routes.push(routes);
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
