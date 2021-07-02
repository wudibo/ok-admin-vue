import { createStore } from 'vuex';
import admin from './modules/admin';

export default createStore({
  modules: {
    admin: admin,
  },
  state: {},
  mutations: {},
  actions: {},
});
