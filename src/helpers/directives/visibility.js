import { isObject } from 'Utils/common';

const getIsVisibleLegacy = (el) => {
  const { top, bottom } = el.getBoundingClientRect();
  const windowH = window.innerHeight;
  return (
    (top > 0 && top < windowH)
    || (bottom > 0 && bottom < windowH)
  );
};

const dispatchEvent = (el) => {
  const e = new Event('visible');
  e.visible = true;
  el.dispatchEvent(e);
};

const callFunction = (binding) => {
  if (typeof binding.value === 'function') binding.value();
};

const handleAttribute = (el, { modifiers, value }) => {
  if (modifiers.attr && value) {
    if (!isObject(value)) {
      throw new Error('Value for directive v-visibility with modifier attr should be object');
    }
    Object.entries(value).forEach(([attrName, attrValue]) => {
      el.setAttribute(attrName, attrValue);
    });
  }
};

const onVisible = (el, binding) => {
  dispatchEvent(el);
  callFunction(binding);
  handleAttribute(el, binding);
};

export default {
  inserted(el, binding) {
    if ('IntersectionObserver' in window) {
      const onIntersection = (entries, observer) => {
        entries.forEach((entry) => {
          // Are we in viewport?
          if (entry.intersectionRatio > 0) {
            onVisible(entry.target, binding);
            observer.disconnect();
          }
        });
      };
      const observer = new IntersectionObserver(onIntersection, {
        // Expand viewport 50 px bottom to load image early
        rootMargin: '0px 0px',
        // request percent of image in viewport to load it
        threshold: 0.01,
      });
      observer.observe(el);
    } else {
      // polyfill if browser doesn't support IntersectionObserver
      const onViewportChange = () => {
        if (getIsVisibleLegacy(el)) {
          onVisible(el, binding);
          window.removeEventListener('scroll', onViewportChange);
          window.removeEventListener('resize', onViewportChange);
        }
      };
      window.addEventListener('scroll', onViewportChange);
      window.addEventListener('resize', onViewportChange);
      onViewportChange();
    }
  },
};
