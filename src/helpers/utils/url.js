export function getFileNameByPath(path) {
  return path.split('\\').pop().split('/').pop();
}
export function getFileNameWOExtensionByPath(path) {
  return getFileNameByPath(path).split('.').shift();
}
export function getFileExtensionByPath(path) {
  return path.split('.').pop().toLowerCase();
}

export function getUrlParamsByObject(obj) {
  const params = [];
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined) params.push(`${key}=${value}`);
  });
  return params.length ? `?${params.join('&')}` : '';
}

export function getParsedUrlParamsBySearch(searchString) {
  if (!searchString) return {};
  let query = searchString;
  if (query.startsWith('?')) query = query.substring(1);
  const pairs = query.split('&');
  if (!pairs || !pairs.length) return {};
  const result = {};
  pairs.forEach((param) => {
    const pair = param.split('=');
    result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  });
  return result;
}

export function getSearchParamBySearch(paramName, searchString) {
  const params = getParsedUrlParamsBySearch(searchString);
  return params[paramName];
}

export function getLocationFullPath(location = window.location) {
  return location.href.replace(location.origin, '');
}
