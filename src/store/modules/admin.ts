const state: any = {
  tags: [],
};

const getters = {
  tagsGetter(state: any, getters: any, rootState: any) {
    return state.tags;
  }
};

const mutations = {
  SET_TAGS: (state: any, key: any) => {
    state.tags = key;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
