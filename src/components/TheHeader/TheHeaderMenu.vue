<template lang="pug">
  .TheHeaderMenu.menu
    slot(name="additionalItem")
    router-link(to="/") Home
    router-link(to="/product") Lending
    a(
      href="https://unfederalreserve.com/lending-plus"
      target="_blank"
    ) Lending Plus
    a(:href="linkDocs" target="_blank") Education Center
    router-link(to="team") About Us
    a(
      href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6&chain=mainnet"
      target="_blank"
    ) Buy eRSDL
</template>

<script>
import CONFIG from 'Config';

export default {
  name: 'TheHeaderMenu',
  props: {
    menu: Array,
  },
  data() {
    return {
      linkDocs: CONFIG.urls.docsMain,
    };
  },
};
</script>
<style lang="sass" scoped>
@import '~Styles/_variables'
.menu
  width: 100%
  max-width: 687px
  display: flex
  flex-direction: row
  justify-content: flex-end
  align-items: center
  @media screen and (max-width: 768px)
    display: none
  a
    margin: 0 14px
    color: $menu !important
    font-weight: 500 !important
    letter-spacing: 0.01em
    font-size: 16px!important
    opacity: 1!important
    position: relative
    &::before
      content: ''
      position: absolute
      bottom: -7px
      left: 0
      width: 27px
      height: 3px
      background: #FFFFFF
      border-radius: 6px
      opacity: 0
      transition: 0.3s
    @media screen and (max-width: 1199px)
      margin: 0 10px
      font-size: 15px!important
    @media screen and (max-width: 991px)
      margin: 0 5px
    &:hover
      color: #FFFFFF !important
      &::before
        opacity: 1
    &:last-child
      margin-right: 0
    &:first-child
      margin-left: 0
.general-wrap
  &.fixed
    .menu
      a
        &.router-link-active[aria-current]
          color: #3357CF!important
          &::before
            opacity: 1
            background: #3357cf
        &:hover
          color: #3357CF!important
          &::before
            background: #3357CF!important
  &.black-header
    &:not(.fixed)
      .header-menu.menu
        a
          &.router-link-active[aria-current]
            color: #3357CF!important
</style>
