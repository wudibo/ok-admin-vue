import {Store} from 'vuex'
import {IVuexRoutes} from '@/layout/index.d.ts';
interface IState {
    routes: Array<IVuexRoutes>;
    addRoutes: Array<string | number>;
    selectedKeys: Array<string | number>;
}

const state: IState = {
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
