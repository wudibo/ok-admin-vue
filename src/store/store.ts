import { createStore } from 'vuex';
import admin from './modules/admin';
import theme from './modules/theme';

export default createStore({
  modules: {
    admin: admin,
    theme: theme
  },
  state: {
    current: 5
  },
  mutations: {
    SET_CURRENT: (state: any, val: string) => {
      state.current += parseInt(val);
    }
  },
  actions: {}
});
