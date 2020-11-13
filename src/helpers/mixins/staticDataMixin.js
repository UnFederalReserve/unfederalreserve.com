export default {
  beforeCreate() {
    this.__prerender = window.__prerender;
    this.__prerendered = window.__prerendered;
    this.__hydration = window.__hydration;
    const { staticData } = this.$options;
    if (staticData && typeof staticData === 'function') {
      Object.assign(this, staticData.apply(this));
    } else if (staticData && typeof staticData === 'object') {
      Object.assign(this, staticData);
    }
  },
};
