function closestPolyfill(element, parentSelector) {
  let el = element;
  if (!document.documentElement.contains(el)) return null;
  do {
    if (el.matches(parentSelector)) return el;
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);
  return null;
}

export function getClosestElement(el, parentSelector) {
  return el.closest ? el.closest(parentSelector) : closestPolyfill(el, parentSelector);
}

export function isElementHasParent(el, parentSelector) {
  return Boolean(getClosestElement(el, parentSelector));
}

export function getElementWidthSpace(element) {
  if (!element) return 0;
  const {
    marginLeft,
    marginRight,
    borderLeftWidth,
    borderRightWidth } = element.currentStyle || window.getComputedStyle(element);
  return element.offsetWidth + parseFloat(marginLeft) + parseFloat(marginRight)
    + parseFloat(borderLeftWidth) + parseFloat(borderRightWidth);
}
