// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// Import check version script (can reload site or redirect to home page)
// import './checkVersion';
// Import sleep mode detector
// import dreamCatcher from './services/dream-catcher';
import vuetify from './tree-shaking/vuetify';

import App from './App';
import router from './router';
import store from './store';

// Setup services
// Refresh page when pc in sleep mode more than 10 min
// dreamCatcher(() => window.location.reload(), 6e5);
import './helpers/directives';
import './helpers/mixins/global';
// Connect plugins
Vue.config.productionTip = false;
const app = new Vue({
  vuetify,
  router,
  store,
  components: { App },
  template: '<App/>',
});
if (window.__hydration) {
  router.onReady(() => {
    app.$mount('#app');
  });
} else {
  app.$mount('#app');
}
