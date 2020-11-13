<template lang="pug">
transition.BaseSpinner(name="fade")
  .spinner(
    :class="{ transparent, opaque: isOpaque, full: isFull }",
    v-show="isShow",
    ref="el",
    :style="{zIndex: zIndex}",
  )
    v-progress-circular(
      indeterminate,
      v-bind="{ ...$attrs, ...sizeProps }",
    )
</template>

<script>
import { VProgressCircular } from 'vuetify/lib';

export default {
  name: 'BaseSpinner',
  components: {
    VProgressCircular,
  },
  props: {
    value: Boolean,
    transparent: Boolean,
    timeout: {
      type: Number,
      default: 0,
    },
    zIndex: {
      type: [Number, String],
      default: 7,
    },
    opaque: Boolean,
    full: Boolean,
    background: {
      default: true,
      type: Boolean,
    },
    small: Boolean,
    medium: Boolean,
  },
  data() {
    return {
      isShow: this.value,
      isOpaque: this.opaque,
      isFull: this.full,
    };
  },
  computed: {
    sizeProps() {
      if (this.small) return { size: 18, width: 2 };
      if (this.medium) return { size: 22, width: 2 };
      return {};
    },
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.transparentHandler();
        this.isShow = true;
      } else {
        setTimeout(() => {
          this.isShow = false;
          setTimeout(this.resetOptions, 350);
        }, this.timeOut);
      }
    },
    transparent: 'transparentHandler',
    full(val) {
      if (val) this.isFull = true;
    },
    opaque(val) {
      if (val) this.isOpaque = true;
    },
  },
  mounted() {
    this.$refs.el.parentElement.style.position = 'relative';
    this.transparentHandler();
  },
  methods: {
    resetOptions() {
      this.transparentHandler();
      this.isOpaque = this.opaque;
      this.isFull = this.full;
    },
    transparentHandler() {
      if (this.transparent) {
        if (this.value) {
          this.setOpacity();
        } else {
          this.removeOpacity();
        }
      }
    },
    setOpacity() {
      if (this.background) {
        this.$refs.el.parentElement.style.opacity = '0.2';
      }
    },
    removeOpacity() {
      if (this.background) {
        this.$refs.el.parentElement.style.opacity = '';
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.spinner
  position: absolute
  width: 100%
  height: 100%
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  z-index: 9999
  display: flex
  align-items: center
  justify-content: center
  &:not(.transparent)
    background-color: rgba(#fff, .8)
  &.full
    position: fixed
  &.opaque
    background-color: #fff
.fade-enter-active,
.fade-leave-active
  transition: opacity .3s
.fade-enter,
.fade-leave-to
  opacity: 0 !important
</style>
