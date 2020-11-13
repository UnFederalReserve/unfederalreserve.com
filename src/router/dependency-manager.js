import store from 'Store';
// import set from 'Utils/lodash.set';
import * as routerUtils from 'Utils/router';

let __promises = [];

/**
 * Dispatch action from meta store array
 */
export function resolveStoreDependencies(to, from, next) {
  const promises = [];
  to.matched.forEach((entry) => {
    if (
      // If store meta exist
      entry.meta.store
      // If previous route doesn't exist or url is changed
      && (!from.name || to.path !== from.path)
      // If this store meta didn't loaded in previous route
      // or route the same and it single for some instance (e.g. blog)
      && (
        !routerUtils.hasSameStoreMeta(from, entry.meta.store)
        // for meta updatesStoreData slug should to be changed
        || (routerUtils.hasInMeta(to, 'updateStoreData') && to.params.slug !== from.params.slug)
        || (from.name === to.name && from.name.includes('single'))
      )
    ) {
      entry.meta.store.forEach((action) => {
        const params = { ...to.params, query: to.query };
        params.slug = params.slug || entry.name;
        promises.push(store.dispatch(action, params));
      });
    }
  });
  const promiseAll = Promise.all(promises)
    .then((responses) => {
      responses.forEach((response) => {
        if (
          // it has slug, probably it cms page data
          response.slug
          // it has redirect_to param
          && response.redirect_to
          // it doesn't have skip cms redirect in route meta
          && !routerUtils.hasInMeta(to, 'skipCMSRedirectTo')
        ) {
          // then redirect
          routerUtils.smartRedirect(response.redirect_to, next, from);
        }
      });
      return responses;
    })
    .catch((e) => {
      const status = e.response && e.response.status;
      if (status === 404 && !window.__prerender) {
        // Log original url on 404 redirection
        // httpClientCMS.post('404', { url: window.location.origin + to.fullPath });
        next({ name: '404', replace: !from.name });
      }
      if (status >= 500 || e.message === 'Failed to fetch') {
        const name = status ? 'error-code' : 'error';
        if (from.name === name) next(new Error('cancel'));
        else next({ name, replace: !from.name, params: { code: status } });
        throw new Error('Error to fetch dependency');
      }
    });
  // If route has `skipRouteLoading` - Do transition w/o waiting for all dependency to be resolved
  // but not for prerender
  if (routerUtils.isSkipRouteLoading(to, from) && !window._prerender) {
    return Promise.resolve();
  }
  return promiseAll;
}

async function resolveRequiresComponents(to) {
  const route = to.matched[to.matched.length - 1];
  const requiresComponents = route && route.meta && route.meta.requiresComponents;
  if (!requiresComponents) return;
  requiresComponents.forEach(comp => __promises.push(comp()));
}

// resolve custom component hook beforeRouteReady
async function resolveBeforeRouteReady(to, from, next) {
  // Get first route, means page route
  const currentRoute = to.matched[0];
  // Get component for this route
  const pageComponent = currentRoute.components && currentRoute.components.default;
  // Check if this component has beforeRouteReady hook
  if (!pageComponent || typeof pageComponent.beforeRouteReady !== 'function') return;
  // Call hook with params and next attribute as resolve for promise
  const newRoute = await new Promise(resolveHook => (
    pageComponent.beforeRouteReady(to, from, resolveHook)
  ));
  // If new route called
  if (newRoute) {
    // Pass it to next
    next(newRoute);
    throw new Error(`redirect by beforeRouteReady hook in ${pageComponent.name} component`);
  }
}

export async function resolve(to, from, next) {
  __promises = [];
  try {
    await resolveStoreDependencies(to, from, next);
    await resolveRequiresComponents(to);
    await Promise.all(__promises).catch(() => { /* ignore errors */ });
    // Handle custom component hook beforeRouteReady
    await resolveBeforeRouteReady(to, from, next);
    next();
  } catch (e) {
    // Cancel transition
    // next(new Error('cancel')); it can show page with empty content if initial page is not allowed
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

// Do not restore scroll position by browsers back/forward buttons
window.history.scrollRestoration = 'manual';

export function scrollBehavior(to, from, savedPosition) {
  if (to.path === from.path || routerUtils.isSkipScrollTab(to, from)) {
    return null;
  }
  if (savedPosition) return savedPosition;
  // Do not try to scroll if hash is auth data
  if (to.hash && !to.hash.startsWith('#id_token')) {
    return { selector: to.hash };
  }
  return { x: 0, y: 0 };
}
