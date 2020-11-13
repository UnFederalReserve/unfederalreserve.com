import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import view from './view';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    router,
    view,
  },
});

export default store;
