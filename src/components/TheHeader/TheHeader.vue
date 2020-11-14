<template lang="pug">
  header.TheHeader.header
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
        },
        {
          path: 'home',
          name: 'Tokenomics',
        },
        {
          path: 'home',
          name: 'Roadmap',
        },
        {
          path: 'home',
          name: 'About Us',
        },
        {
          path: 'home',
          name: 'Contacts',
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
  max-width: 1170px
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
