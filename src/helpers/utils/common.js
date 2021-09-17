const formatOptions = {
  style: 'currency',
  currency: 'USD',
};

const pow = Math.pow,
  floor = Math.floor,
  abs = Math.abs,
  log = Math.log;
const abbrev = 'KMB';

const intlCurrency = Intl.NumberFormat('en-US', formatOptions);

export function formatToCurrency(number) {
  return intlCurrency.format(number);
}

function round(n, precision) {
  const prec = Math.pow(10, precision);
  return Math.round(n * prec) / prec;
}

export function beautifyNumber(n, isCurrency) {
  let base = floor(log(abs(n)) / log(1000));
  const suffix = abbrev[Math.min(2, base - 1)];
  base = abbrev.indexOf(suffix) + 1;
  const rounded = round(n / pow(1000, base), 2);

  return isCurrency
    ? suffix
      ? formatToCurrency(rounded) + suffix
      : formatToCurrency(n)
    : suffix
      ? rounded + suffix
      : n;
}

export function truncateText(text, amount = 150) {
  return text.substring(0, amount);
}

export function cleanTextFromHtml(text) {
  return text.replace(/<\/?[^>]+>/gi, '');
}

export function isNil(value) {
  return value === undefined || value === null;
}

export function isEmptyValue(value) {
  return isNil(value) || value === '';
}

export function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

export function isArray(value) {
  return Array.isArray(value);
}

export function isObject(value) {
  return typeof value === 'object' && value !== null && !isArray(value);
}

export function isNotEmptyObject(value) {
  return isObject(value) && Boolean(Object.keys(value).length);
}

export function isEqual(val1, val2) {
  return JSON.stringify(val1) === JSON.stringify(val2);
}

export function upperFirst(string) {
  if (!isString(string)) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function startCase(string) {
  if (!isString(string)) return string;
  return string
    .replace(/[-_]/g, ' ')
    .replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export function isObjectHasTruthlyValues(value) {
  return isObject(value) && Boolean(Object.values(value).some(v => v));
}

export function cloneDeep(value) {
  if (!isObject(value) && !isArray(value)) return value;
  return JSON.parse(JSON.stringify(value));
}

export function getLastArrayElement(arr) {
  if (isArray(arr) && !arr.length) throw new Error('getLastArrayElement expect array as argument');
  return arr[arr.length - 1];
}

export function getRandomArrayElements(arr, n = 1) {
  const num = n > arr.length ? arr.length : n;
  const shuffled = arr.slice(0).sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export function sortBy(arr, param) {
  arr.sort((a, b) => {
    if (a[param] < b[param]) return -1;
    if (a[param] > b[param]) return 1;
    return 0;
  });
  return arr;
}

/**
 * Deep clear object of empty values
 * @param value
 * @returns {*}
 */
export function clearObject(value) {
  if (!isObject(value)) return value;
  const obj = {};
  Object.entries(value).forEach(([key, val]) => {
    if (!isEmptyValue(val) && (!isObject(val) || isNotEmptyObject(val))) {
      obj[key] = isObject(val) ? clearObject(val) : val;
    }
  });
  return obj;
}

export function pickObject(obj, keys) {
  const newObj = {};
  keys.forEach((key) => {
    newObj[key] = obj[key];
  });
  return newObj;
}

export function pickObjectsInArray(arr, keys) {
  const newArr = [];
  arr.forEach(obj => newArr.push(
    pickObject(obj, keys),
  ));
  return newArr;
}
