<template lang="pug">
  header.TheHeader.header(ref="header")
    .general-wrap(height="77" :class="{'fixed': isFixed || togglerValue, 'black-header': isBlackHeader}")
      .header-wrap
        router-link.header-logo(:to="{name: 'home'}" @click.native="onLogoClick")
          logo.site-logo
        TheHeaderMenu.header-menu(
          :menu="menu"
        )
          template(v-slot:additionalItem)
            //- router-link(
            //-   :to="{name: 'home'}"
            //-   @click.native="onLogoClick"
            //- ) Home
        a.header-btn Get Started
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
          path: 'product',
          name: 'Lending',
        },
        {
          path: 'home',
          name: 'Education Center'
        },
        {
          path: 'team',
          name: 'About us',
        }
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
  z-index: 4
  left: 0
  .header-btn
    border: 2px solid #FFFFFF
    border-radius: 35px
    font-weight: 600
    font-size: 14px
    padding: 10px 21px 9px 21px
    line-height: 21px
    opacity: 1
    white-space: nowrap
    color: #FFFFFF
    margin-left: 37px
    @media screen and (max-width: 991px)
      display: none
    &:hover
      background-color: #fff
      border-color: #fff
      color: #3357CF
  .general-wrap
    width: 100%
    +mt(.3s)
    &.fixed
      position: fixed
      left: 0
      top: 0
      width: 100%
      z-index: 99
      background-color: #fff
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.05)
      @media screen and (max-width: 991px)
        box-shadow: none
      .header-wrap
        padding-top: 24px
        padding-bottom: 24px
        @media screen and (max-width: 991px)
          padding-top: 15px
          padding-bottom: 15px
      .header-btn
        color: #3357CF
        border-color: #3357CF
        &:hover
          box-shadow: 0px 0px 0px 5px rgba(91, 123, 255, 0.24)
          background: linear-gradient(180deg, #4382FF 0%, #2450DB 100%, #0433BF 100%)
          color: #fff
      .menu
        a
          &:hover
            color: #3357CF!important
            &::before
              background: #3357CF!important
    &:not(.fixed)
      ::v-deep .header-menu
        a
          color: $menu!important
          &:hover 
            color: #fff!important
      .site-logo
        path
          fill: $white
    &.black-header
      .header-btn
        color: #3357CF
        border-color: #3357CF
        &:hover
          box-shadow: 0px 0px 0px 5px rgb(91 123 255 / 24%)
          background: linear-gradient(180deg, #4382FF 0%, #2450DB 100%, #0433BF 100%)
          color: #fff
      &:not(.fixed)
        .site-logo
          path
            fill: #042751
        ::v-deep .header-menu
          a
            color: #042751 !important
            opacity: 0.5
            &::before
              background: #042751
            &:hover
              opacity: 1
  &-wrap
    width: 100%
    max-width: 1140px
    padding-left: 15px
    padding-right: 15px
    padding-top: 42px
    padding-bottom: 20px
    margin: 0 auto
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    position: relative
    background-color: transparent
    +mt(.3s)
    @media screen and (max-width: 1199px)
      padding-top: 28px
    @media screen and (max-width: 767px)
      padding-top: 30px
      padding-bottom: 10px
    .header-menu
      @media screen and (max-width: 991px)
        display: none
  &-logo
    width: 260px
    opacity: 1 !important
    margin-right: 30px
    display: flex
    flex-direction: row
    .svg-logo
      width: 40px
      margin-right: 10px
    .site-logo
      position: relative
      top: 0
    img
      width: 100%
    @media screen and (max-width: 991px)
      max-width: 250px
      width: 100%
      height: 100%

</style>
