import CONFIG from 'Config';

export function hasSameInMatched(route1, route2) {
  return route1.matched.some(m1 => route2.matched.some(m2 => m1.name === m2.name));
}

export function hasInMeta(route, param) {
  if (!route) return false;
  return route.matched.some(r => r.meta[param]);
}

/**
 * Using for: not show spinner during page loading
 * @param to
 * @param from
 * @returns {boolean}
 */
export function isSkipRouteLoading(to, from) {
  return hasInMeta(to, 'skipRouteLoading') && to.matched[0] === from.matched[0];
}

export function isSkipScrollTab(to, from) {
  const hasMeta = to.meta.skipScrollTab || from.meta.skipScrollTab;
  const hasMetaTablet = (to.meta.skipScrollTabTablet || from.meta.skipScrollTabTablet)
    && document.documentElement.clientWidth <= CONFIG.breakpoints.md;
  return (hasMeta || hasMetaTablet) && hasSameInMatched(to, from);
}

export function hasSameStoreMeta(route, storeMeta) {
  return route.matched.some(entry => entry.meta.store === storeMeta);
}

/**
 * @param route - router to find in
 * @param param - name of meta param
 * @returns {boolean}
 */
export function isRequires(route, param) {
  const entry = route.matched.find(r => r.meta[param]);
  if (!entry) return false;
  const paramValue = entry.meta[param];
  // paramValue can be array or boolean
  // If not array, return value
  if (!Array.isArray(paramValue)) return Boolean(paramValue);
  // first element is prop name of route param
  // second is value to compare with
  return route.params[paramValue[0]] === paramValue[1];
}

/**
 * Redirect to router as spa or with reload page base on hostname redirect url
 * @param redirectTo {string} = url to redirect
 * @param next - next resolve function
 * @param from - from route
 */
export function smartRedirect(redirectTo, next, from = {}) {
  if (!redirectTo) return;
  const a = document.createElement('a');
  a.href = redirectTo;
  if (a.host === window.location.host) {
    const path = a.href.replace(a.origin, '');
    next({ path, replace: !from.name });
  } else {
    window.location.replace(redirectTo);
  }
}
