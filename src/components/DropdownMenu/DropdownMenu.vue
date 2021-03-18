<template>
  <div
    :class="{ dropup: top }"
    class="dropdown"
    @mouseleave="mouseLeave"
    @mouseover="mouseOver"
    @mouseenter="mouseEnter"
    @click="toggleMenu"
  >
    <slot/>
    <transition :name="transition">
      <div
        v-show="value"
        ref="dropdown"
        :class="{ 'menu': true ,'dropdown-menu-right': right }"
        :style="styles"
        class="dropdown-menu show"
        @mouseleave="startTimer"
        @mouseenter="stopTimer"
        @click.stop
      >
        <slot name="dropdown"/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    value: Boolean,
    right: Boolean,
    hover: Boolean,
    hover_time: {
      type: Number,
      default: 100,
    },
    hover_timeout: {
      type: Number,
      default: 500,
    },
    styles: {
      type: Object,
      default() {
        return {};
      },
    },
    interactive: { // whether should stay open until clicked outside
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: '',
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      hovering: false,
      top: false,
    };
  },
  watch: {
    value(v) {
      if (v) {
        const vm = this;
        this.top = false;
        this.$nextTick(() => {
          const rect = vm.$refs.dropdown.getBoundingClientRect();
          const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
          this.top = (rect.bottom > windowHeight) && (rect.top >= rect.height);
        },
        );
      }
    },
    interactive: {
      handler(value) {
        if (typeof document === 'object') {
          // eslint-disable-next-line no-unused-expressions
          value ? document.body.addEventListener('click', this.closeMenu) : document.body.removeEventListener('click', this.closeMenu);
        }
      },
      immediate: true,
    },
  },
  destroyed() {
    document.body.removeEventListener('click', this.closeMenu);
  },
  methods: {
    mouseEnter() {
      this.stopTimer();
      if (this.hover && this.hover_time > 0 && !this.value) {
        this.hoverOpenTimer = setTimeout(() => {
          this.$emit('input', true);
          this.hovering = true;
          setTimeout(() => {
            this.hovering = false;
          }, this.hover_timeout);
        }, this.hover_time);
      }
      if (this.hover && !this.value && this.hover_time === 0) {
        this.hovering = true;
        setTimeout(() => {
          this.hovering = false;
        }, this.hover_timeout);
        this.$emit('input', true);
      }
    },
    mouseLeave() {
      if (!this.hoverTimer) {
        this.startTimer();
      }
      if (this.hover_time > 0 && this.hover) {
        clearTimeout(this.hoverOpenTimer);
      }
    },
    mouseOver() {
      this.stopTimer();
    },
    closeMenu($event) {
      if (!$event || !this.$el.contains($event.target)) {
        if (this.value && this.closeOnClickOutside) {
          this.$emit('input', false);
        }
      }
    },
    toggleMenu() {
      if (this.hovering) {
        return;
      }
      if (this.value && this.hover) {
        return;
      }
      this.$emit('input', !this.value);
    },
    stopTimer() {
      clearTimeout(this.hoverTimer);
      this.hoverTimer = null;
    },
    startTimer() {
      if (!this.interactive) {
        this.hoverTimer = setTimeout(this.closeMenu, this.hover_timeout);
      }
    },
  },
};
</script>
<style lang="sass" scoped>
.dropdown
  position: relative
  .menu
    position: absolute
</style>
