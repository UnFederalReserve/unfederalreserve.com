<script>
// one transparent pixel
const PLUG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

export default {
  name: 'BaseImage',
  inheritAttrs: false,
  props: {
    src: String,
    force: Boolean,
    skipPreload: Boolean,
    bg: Boolean,
    width: [Number, String],
    height: [Number, String],
    placeholder: Boolean,
    placeholderSrc: String,
    placeholderDisabled: Boolean,
    delay: {
      validator: value => value >= 0,
    },
    timeout: {
      validator: value => value >= 0,
    },
  },
  data() {
    return {
      isLoaded: this.force,
      isReadyToPreload: this.force,
      isDelayPassed: this.force,
    };
  },
  computed: {
    imgAspectRation() {
      if (this.width && this.height) {
        return this.height / this.width;
      }
      return null;
    },
    containerStyle() {
      const style = {};
      if (this.imgAspectRation) style.paddingTop = `${this.imgAspectRation * 100}%`;
      return style;
    },
    mainImgStyle() {
      const style = {};
      if (!this.isLoaded) style.opacity = 0;
      if (this.bg && this.isLoaded) {
        style.backgroundImage = `url(${this.src})`;
      }
      if (this.imgAspectRation) style.position = 'absolute';
      return style;
    },
    placeholderStyle() {
      const style = {};
      if (this.bg && this.placeholderSrc) style.backgroundImage = `url(${this.placeholderSrc})`;
      if (this.isLoaded) style.visibility = 'hidden';
      return style;
    },
    isDelayReady() {
      return !this.delay || this.isDelayPassed;
    },
    isPlaceholder() {
      return !this.placeholderDisabled && (this.placeholder || this.placeholderSrc);
    },
    readyImgSrc() {
      return (this.isLoaded) ? this.src : PLUG;
    },
  },
  watch: {
    isReadyToPreload: 'preloadImage',
    isDelayReady: 'preloadImage',
    src: 'init',
    force: 'init',
    $route: {
      immediate: true,
      handler(newRoute, oldRoute) {
        this.isFirstPage = !oldRoute;
      },
    },
  },
  created() {
    this.handleDelay();
    this.init();
  },
  methods: {
    init() {
      this.isReadyToPreload = this.force;
      this.isLoaded = this.force;
      this.isDelayPassed = this.force;
      this.handleTimeout();
    },
    onVisible() {
      this.isReadyToPreload = true;
    },
    preloadImage() {
      if (!this.isReadyToPreload || !this.isDelayReady) return;
      if (this.skipPreload) {
        this.isLoaded = true;
        return;
      }
      const img = new Image();
      img.src = this.src;
      img.addEventListener('load', () => {
        this.isLoaded = true;
      });
    },
    handleDelay() {
      if (!this.delay) return;
      if (this.isFirstPage) {
        setTimeout(() => {
          this.isDelayPassed = true;
        }, Number(this.delay));
      } else {
        this.isDelayPassed = true;
      }
    },
    handleTimeout() {
      clearTimeout(this.timeoutId);
      if (this.timeout && !this.isReadyToPreload) {
        this.timeoutId = setTimeout(() => {
          if (!this.isReadyToPreload) this.isReadyToPreload = true;
        }, Number(this.timeout));
      }
    },
  },
  render(h) {
    const imageTag = this.bg ? 'div' : 'img';
    const mainImageEl = h(imageTag, {
      staticClass: this.isPlaceholder ? 'base-image__main' : 'BaseImage base-image',
      style: this.mainImgStyle,
      attrs: {
        src: this.bg ? undefined : this.readyImgSrc,
        draggable: false,
        ...this.$attrs,
      },
      ref: 'img',
      key: this.src,
      directives: [
        {
          name: 'visibility',
          value: this.onVisible,
        },
      ],
    }, [this.$slots.default]);
    if (!this.isPlaceholder) return mainImageEl;
    const placeholderImgEl = h(imageTag, {
      staticClass: 'base-image__placeholder',
      style: this.placeholderStyle,
      attrs: {
        src: this.bg ? undefined : this.placeholderSrc,
      },
    });
    return h('div', {
      style: this.containerStyle,
      class: { 'placeholder-loading': !this.isLoaded },
      staticClass: 'BaseImage base-image base-image--placeholder',
    }, [placeholderImgEl, mainImageEl]);
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.base-image
  transition: opacity ease 0.4s
  background-size: cover
  position: relative
  &--placeholder
    overflow: hidden
  &__placeholder
    filter: blur(10px)
    transform: scale(1.1)
    height: 100%
    width: 100%
    position: absolute
    transition: visibility 0s ease 0.4s
    background-size: cover
    left: 0
    top: 0
  &__main
    width: 100%
    height: 100%
    transition: opacity ease 0.4s
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    top: 0
    left: 0
    position: relative
@keyframes loading
  100%
    transform: translateX(100%)
</style>
