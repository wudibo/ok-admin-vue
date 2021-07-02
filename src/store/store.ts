import { createStore } from 'vuex';
import admin from './modules/admin';

export default createStore({
  modules: {
    admin: admin,
  },
  state: {
    current: 5,
  },
  mutations: {
    SET_CURRENT: (state: any, val: string) => {
      state.current += parseInt(val);
    },
  },
  actions: {},
});
