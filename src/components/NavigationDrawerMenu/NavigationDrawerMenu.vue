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
    .nav-drw-wrap
      ul
        li
          router-link(to="/") Home
        li
          router-link(to="/product") Lending
        li
          a(:href="linkDocs" target="_blank") Education Center
        li
          router-link(to="team") About Us
        li
          a(
            href="https://www.branditpromo.com/stores/unFederalReserve"
            target="_blank"
          ) Merch
        li
          a(
            href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6&chain=mainnet"
            target="_blank"
          ) Buy eRSDL
      a(
        class="btn-rounded btn-white"
        :href="linkLending"
        target="_blank"
      ) Get Started
</template>

<script>
import { VNavigationDrawer } from 'vuetify/lib';
import { scrollToTop } from 'Helpers/utils/view';
import BaseImage from 'Components/Base/BaseImage';
import CONFIG from 'Config';

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
      linkDocs: CONFIG.urls.docsMain,
      linkLending: CONFIG.urls.lendingMain,
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
  z-index: 9
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
        padding: 28px 0
        border-bottom: 1px solid rgba(114, 145, 244, 0.2)
        display: flex
        flex-direction: row
        a
          color: #84ADFE
          font-size: 24px
          font-weight: 500
          letter-spacing: 0.01em
          line-height: 100%
          position: relative
          opacity: 1
          &.router-link-active[aria-current]
            color: #3357CF
            &::before
              opacity: 1
              background: #3357CF
          &::before
            content: ""
            position: absolute
            background: #3357CF
            border-radius: 6px
            width: 27px
            height: 3px
            bottom: -8px
            opacity: 0
            transition: 0.3s
  &--open
    width: 414px !important
  ::v-deep .v-navigation-drawer__border
    display: none

.nav-drw-wrap
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100%
  .btn-white 
    border: 2px solid #3357CF
    width: calc(100% - 29px)
    display: flex
    align-items: center
    justify-content: center
    padding: 10px
</style>
