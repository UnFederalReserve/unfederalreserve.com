<template lang="pug">
  v-app
    BaseSpinner(:value="isAppLoading && !_isMounted" zIndex="999" full opaque)
    TheHeader
    v-main
      router-view
    TheFooter
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseSpinner from 'Components/Base/BaseSpinner';
import TheHeader from 'Components/TheHeader/TheHeader';
import TheFooter from 'Components/TheFooter/TheFooter';


export default {
  name: 'App',
  components: {
    BaseSpinner,
    TheHeader,
    TheFooter,
  },
  computed: {
    ...mapGetters('router', [
      'routeLoading',
    ]),
    isAppLoading() {
      return !this.__prerender && (this.routeLoading || this.logoutLoading);
    },
  },
  watch: {
    '$route.name': {
      handler: 'setBodyPageClass',
      immediate: true,
    },
  },
  mounted() {
    this.clearPreload();
    this.setRouter(this.$router);
    this.setViewDimensions();
    window.addEventListener('resize', this.setViewDimensions);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setViewDimensions);
  },
  methods: {
    ...mapActions('router', [
      'setRouter',
    ]),
    ...mapActions('view', [
      'setScreenWidth',
      'setScreenHeight',
      'setPortraitOrientation',
    ]),
    setViewDimensions() {
      this.setScreenWidth(document.documentElement.clientWidth);
      this.setScreenHeight(document.documentElement.clientHeight);
      this.setPortraitOrientation(this.isPortraitOrientation());
    },
    clearPreload() {
      const spinner = document.getElementById('preload-spinner');
      if (spinner) spinner.style.display = 'none';
    },
    isPortraitOrientation() {
      const orientation = window.matchMedia('(orientation: portrait)');
      return orientation.matches;
    },
    setBodyPageClass() {
      document.body.removeAttribute('class');
      document.body.classList.add(`body-page-${this.$route.name}`);
    },
  },
};
</script>

<style lang="sass">
@import 'styles/app.scss'
body,
.v-application
  background: linear-gradient(180deg, #1836A4 0%, #010450 79.58%, #010450 100%) !important
.body-page-404
  position: relative
  background: none !important
  .right-footer-rock
    display: none
  &::before
    content: ""
    position: absolute
    top: 0
    left: 0
    right: 0
    width: 100%
    height: 905px
    background: url('~images/404-top-bg.svg') no-repeat center top
    background-size: cover
  .v-application
    background: none !important
</style>
