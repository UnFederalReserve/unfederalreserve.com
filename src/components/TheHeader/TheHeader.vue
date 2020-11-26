<template lang="pug">
  header.TheHeader.header(ref="header")
    .general-wrap(height="77" :class="{'fixed': isFixed || togglerValue, 'black-header': isBlackHeader}")
      .header-wrap
        router-link.header-logo(:to="{name: 'home'}" @click.native="onLogoClick")
          logoLeft.svg-logo
          logo.site-logo
        TheHeaderMenu.header-menu(
          :menu="menu"
        )
        TheHeaderTogglerBtn(
          @click.native="togglerValue = !togglerValue",
          :value="togglerValue",
        )
    NavigationDrawerMenu(
      :value="togglerValue",
      :menu="menu",
      @closed-menu="togglerValue = false",
    )
</template>

<script>
import { scrollToElement } from 'Utils/view';
import BaseImage from 'Components/Base//BaseImage';
import NavigationDrawerMenu from 'Components/NavigationDrawerMenu/NavigationDrawerMenu';
import logo from 'images/svg-icons/logo.svg';
import logoLeft from 'images/svg-icons/left-logo.svg';

import TheHeaderMenu from './TheHeaderMenu';
import TheHeaderTogglerBtn from './TheHeaderTogglerBtn';

export default {
  name: 'TheHeader',
  components: {
    BaseImage,
    TheHeaderMenu,
    NavigationDrawerMenu,
    TheHeaderTogglerBtn,
    logo,
    logoLeft,
  },
  data() {
    return {
      scrollPosition: 0,
      isFixed: false,
      togglerValue: false,
    };
  },
  computed: {
    menu() {
      return [
        {
          path: 'home',
          name: 'Home',
        },
        {
          path: 'home',
          name: 'How it works',
          hash: '#how-it-works',
        },
        {
          path: 'home',
          name: 'Whitepaper',
          hash: '#whitepaper',
        },
        {
          path: 'home',
          name: 'Roadmap',
          hash: '#roadmap',
        },
        {
          path: 'team',
          name: 'About us',
        },
        {
          path: 'home',
          name: 'Contacts',
          hash: '#get-in-touch',
        },
      ];
    },
    isBlackHeader() {
      return Boolean(['home', 'terms'].includes(this.$route.name));
    },
  },
  watch: {
    scrollPosition: {
      handler: 'setIsFixed',
      immediate: true,
    },
    routerNameUpdating() {
      this.togglerValue = false;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.setScrollPosition);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.setScrollPosition);
  },
  methods: {
    setScrollPosition() {
      this.scrollPosition = window.pageYOffset;
    },
    setIsFixed() {
      this.isFixed = this.scrollPosition > 0;
    },
    onLogoClick() {
      this.togglerValue = false;
      scrollToElement(this.$refs.header);
    },
  },
};
</script>
<style lang="sass" scoped>
@import '~Styles/_variables'
.header
  width: 100%
  position: absolute
  top: 0
  z-index: 3
  left: 0
  .general-wrap
    width: 100%
    &.fixed
      position: fixed
      left: 0
      top: 0
      width: 100%
      z-index: 3
      background-color: #fff
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.05)
      +mt(.3s)
    &:not(.fixed)
      ::v-deep .header-menu
        a
          color: #EEF6FF !important
      .site-logo
        path
          fill: $white
    &.black-header
      &:not(.fixed)
        .site-logo
          path
            fill: #042751
        ::v-deep .header-menu
          a
            color: #042751 !important
            opacity: 0.5
            &:hover
              opacity: 1
  &-wrap
    width: 100%
    max-width: 1140px
    padding-left: 15px
    padding-right: 15px
    padding-top: 10px
    padding-bottom: 10px
    margin: 0 auto
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    position: relative
    background-color: transparent
    +mt(.3s)
    @media screen and (max-width: 767px)
      padding-top: 10px
    .header-menu
      @media screen and (max-width: 991px)
        display: none
  &-logo
    width: 187px
    height: 47px
    opacity: 1 !important
    margin-right: 30px
    display: flex
    flex-direction: row
    .svg-logo
      width: 40px
      margin-right: 10px
    .site-logo
      position: relative
      top: -3px
    img
      width: 100%
    @media screen and (max-width: 991px)
      width: 155px
      height: 100%
</style>
