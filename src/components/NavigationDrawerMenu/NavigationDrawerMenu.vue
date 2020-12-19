<template lang="pug">
  v-navigation-drawer(
    v-if="isRenderDrawerMenu"
    :value="value",
    v-bind="$attrs",
    v-on="$listeners",
    fixed,
    right,
    temporary,
    :expand-on-hover="true"
    light,
    ref="drawer"
  )
    ul
      li(
        v-for="(item, i) in menu",
        :key="i",
      )
        router-link.small-link(
          :to="{name: item.path, hash: item.hash}"
        ) {{ item.name }}
</template>

<script>
import { VNavigationDrawer } from 'vuetify/lib';
import { scrollToTop } from 'Helpers/utils/view';
import BaseImage from 'Components/Base/BaseImage';

export default {
  name: 'NavigationDrawerMenu',
  components: {
    VNavigationDrawer,
    BaseImage,
  },
  props: {
    value: Boolean,
    menu: Array,
  },
  data() {
    return {
      isRenderDrawerMenu: false,
    };
  },
  computed: {
    isOpenMenu() {
      return this.$refs.drawer ? this.$refs.drawer.showOverlay : this.value;
    },
  },
  watch: {
    value(value) {
      if (value) {
        this.isRenderDrawerMenu = true;
      }
    },
    isOpenMenu() {
      const { body } = document;
      if (this.isOpenMenu) {
        body.classList.add('is-mobile-menu-open');
      } else {
        body.classList.remove('is-mobile-menu-open');
        this.$emit('closed-menu');
        if (this.$refs.drawer && this.$refs.drawer.$el.children[0]) scrollToTop(0, this.$refs.drawer.$el.children[0]);
      }
    },
  },
  mounted() {
    // set timeout to render drawer menu
    setTimeout(() => {
      this.isRenderDrawerMenu = true;
    }, 2000);
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.v-navigation-drawer
  padding-top: 64px !important
  height: 100% !important
  overflow: hidden
  pointer-events: none
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.07)
  z-index: 1
  ::v-deep .v-navigation-drawer__content
    width: 100%
    -webkit-overflow-scrolling: touch
    pointer-events: auto
    padding-left: 25px
    padding-top: 5px
    padding-bottom: 25px
    ul
      list-style-type: none
      padding-left: 0
      li
        padding: 17px 0
        border-bottom: 1px solid $periwinkle
        display: flex
        flex-direction: row
        a
          color: $primary
          &:hover
            opacity: 0.9
  &--open
    width: 235px !important
  ::v-deep .v-navigation-drawer__border
    display: none
</style>
