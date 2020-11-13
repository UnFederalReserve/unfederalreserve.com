import set from 'Utils/lodash.set';
import * as routerUtils from 'Utils/router';
import { SET_ALL } from './mutation-types';

export default {
  setRouteLoading({ commit }, routeLoading) {
    commit(SET_ALL, { routeLoading });
  },
  setRouter({ commit }, router) {
    commit(SET_ALL, { router });
  },
  checkRouteAfterLogout({ getters }) {
    // Redirect if this page required auth
    return new Promise((resolve) => {
      const { router } = getters;
      const { currentRoute } = router;
      const isRequiresAuth = routerUtils.hasInMeta(currentRoute, 'requiresAuth');
      const isRequiresAccreditation = routerUtils.hasInMeta(currentRoute, 'requiresAccreditation');
      const isSkipRedirectToRoute = routerUtils.hasInMeta(currentRoute, 'skipRedirectToRoute');
      if (!isRequiresAuth && !isRequiresAccreditation) return resolve();
      let redirectRoute = { name: 'sign-in' };
      // Try to find matched entry with onLogoutRedirect meta param
      const entryWithRedirect = currentRoute.matched.find(entry => entry.meta.onLogoutRedirect);
      // If it exist
      if (entryWithRedirect) {
        // Redirect to it
        redirectRoute = entryWithRedirect.meta.onLogoutRedirect;
        // Otherwise if not skip redirect to current route
      } else if (!isSkipRedirectToRoute) {
        // Set redirection in query params
        set(redirectRoute, 'query.redirect', currentRoute.path);
      }
      // Copy params
      redirectRoute.params = currentRoute.params;
      return router.replace(redirectRoute, resolve);
    });
  },
};
