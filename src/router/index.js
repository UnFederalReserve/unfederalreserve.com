import Vue from 'vue';
import Router from 'vue-router';
import store from 'Store';
// import analytics from 'Analytics'; ?????
import { isSkipRouteLoading } from 'Utils/router';
import routes from './routes';
import { scrollBehavior, resolve } from './dependency-manager';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior,
});

let pageLoadTimeoutAlertId;

function clearPageLoadTimeoutAlert() {
  clearTimeout(pageLoadTimeoutAlertId);
}

/**
 * Set timeout to alert to google log about too long page loading
 * @param to - to route
 * @param from - from route
 */
function setPageLoadTimeoutAlert() {
  const timeout = 10000;
  clearPageLoadTimeoutAlert();
  pageLoadTimeoutAlertId = setTimeout(() => {
    if (window.__prerender) console.error(`page resolving more than ${timeout}ms`); // eslint-disable-line
  }, timeout);
}

router.beforeEach((to, from, next) => {
  if (to.name !== from.name && !isSkipRouteLoading(to, from)) {
    store.dispatch('router/setRouteLoading', true);
    setPageLoadTimeoutAlert(to, from);
  }
  next();
});

router.beforeResolve((to, from, next) => {
  if (!isSkipRouteLoading(to, from)) {
    store.dispatch('router/setRouteLoading', true);
    setPageLoadTimeoutAlert(to, from);
  }
  resolve(to, from, next);
});

router.afterEach(() => {
  clearPageLoadTimeoutAlert();
  store.dispatch('router/setRouteLoading', false);
  // analytics.onPageResolved(to);
});

router.onError((e) => {
  clearPageLoadTimeoutAlert();
  if (e.message === 'cancel') {
    store.dispatch('router/setRouteLoading', false);
  }
});

export default router;
