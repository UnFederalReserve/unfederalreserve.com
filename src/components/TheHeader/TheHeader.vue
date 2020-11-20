<template lang="pug">
  header.TheHeader.header
    .header-wrap
      router-link.header-logo(:to="{name: 'home'}")
        BaseImage(
          :src="require('images/logo.svg')",
          alt="logo",
        )
      TheHeaderMenu.header-menu(
        :menu="menu"
      )
</template>

<script>
import BaseImage from 'Components/Base//BaseImage';
import TheHeaderMenu from './TheHeaderMenu';

export default {
  name: 'TheHeader',
  components: { BaseImage, TheHeaderMenu },
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
          name: 'Tokenomics',
          hash: '#tokenomics',
        },
        {
          path: 'home',
          name: 'Roadmap',
          hash: '#roadmap',
        },
        {
          path: 'home',
          name: 'About Us',
          hash: '#about',
        },
        {
          path: 'home',
          name: 'Contacts',
          hash: '#get-in-touch',
        },
      ];
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
  &-wrap
    width: 100%
    max-width: 1140px
    padding-left: 15px
    padding-right: 15px
    padding-top: 30px
    margin: 0 auto
    display: flex
    flex-direction: row
    align-items: flex-start
    justify-content: space-between
  &-logo
    width: 187px
    height: 47px
    opacity: 1 !important
    margin-right: 30px
    img
      width: 100%
    @media screen and (max-width: 991px)
      width: 155px
      height: 100%
</style>
