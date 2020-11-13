export function scrollToTop(scrollDuration = 0, _container) {
  const container = _container || document.documentElement;
  const cosParameter = container.scrollTop / 2;
  let scrollCount = 0;
  let oldTimestamp = performance.now();

  function step(newTimestamp) {
    scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
    if (scrollCount >= Math.PI) container.scrollTo(0, 0);
    if (container.scrollTop === 0) return;
    container.scrollTo(0, Math.round(cosParameter + (cosParameter * Math.cos(scrollCount))));
    oldTimestamp = newTimestamp;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function getElementCoords(el) { // crossbrowser version
  const box = el.getBoundingClientRect();
  const { body } = document;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top = (box.top + scrollTop) - clientTop;
  const left = (box.left + scrollLeft) - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}


/**
 * Scroll to top of passed element
 * @param el - element to scroll top position
 * @param offsetTop - value add to top element position
 * @param container - container to scroll
 */
export function scrollToElement(el, offsetTop = 0, container) {
  // Get coordinates according to scroll window.
  const coords = getElementCoords(el);
  (container || window).scrollTo({
    top: coords.top + offsetTop,
    behavior: 'smooth',
  });
}

export function scrollToAnchor(hash, offsetTop) {
  if (!hash) return;
  const h = hash.startsWith('#') ? hash : `#${hash}`;
  try {
    const el = document.querySelector(h);
    if (el) {
      scrollToElement(el, offsetTop);
    }
  } catch (ignore) {} // eslint-disable-line
}

export function getScrollTop() {
  return window.pageYOffset || document.body.scrollTop;
}

export function getScrollLeft() {
  return window.pageXOffset || document.body.scrollLeft;
}
