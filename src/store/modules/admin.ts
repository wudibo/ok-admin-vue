// import {IVuexRoutes} from '@/layout/index.d.ts';
interface IState {
  routes: Array<any>;
  addRoutes: Array<string | number>;
  selectedKeys: Array<string | number>;
  current: number,
}

const state: IState = {
  routes: [],
  addRoutes: [],
  selectedKeys: [],
  current: 20,
}

const getters = {
  routesGetter(state: IState, getters: any, rootState: any) {
    return state.routes
  },
  currentGetter(state: IState, getters: any, rootState: any) {
    return state.current
  },
  selectedKeysGetter(state: IState, getters: any, rootState: any) {
    return state.selectedKeys
  },
}

const mutations = {
  SET_ROUTES: (state: IState, routes: any) => {
    state.routes = routes;
  },
  SET_SELECTEDKEYS: (state: IState, key: any) => {
    state.selectedKeys = key;
  },
  SET_CURRENT: (state: IState, value: number) => {
    state.current += value;
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
