import { reactive } from 'vue';
const state: any = {
  layTags: [],
  layConfig: {
    sidebarInverted: true, // 侧边栏是否暗色主题
    headerInverted: false, // 顶部栏是否暗色主题
    collapsed: false // 是否收缩菜单
  }
};

const mutations = {
  SET_LAYTAGS: (state: any, key: any) => {
    state.layTags = key;
  },
  SET_LAYCONFIG: function <T>(state: any, config: { key: string; value: any }) {
    state.layConfig[config.key] = config.value;
  },
  SET_LAYCONFIGS: (state: any, config: any) => {
    state.layConfig = config;
  }
};

const actions = {};

const getters = {
  layTagsGetter: (state: any, getters: any, rootState: any) => {
    return state.layTags;
  },
  layConfigGetter: (state: any, getters: any, rootState: any) => {
    return state.layConfig;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
