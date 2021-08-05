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
  background: linear-gradient(180deg, #345BD8 0%, #010450 100%) !important
</style>
