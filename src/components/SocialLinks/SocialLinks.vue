<template lang="pug">
  .SocialLinks.social-links
    a(href="https://www.youtube.com/channel/UCcKaHJ8SdyAGqoMrVrsKK_A" target="_blank").link
      Youtube.svg-icon
    a(href="https://discord.gg/TEJQ95PW9W" target="_blank").link
      GroupIcon.svg-icon
    a(href="https://www.linkedin.com/company/unfederalreserve" target="_blank").link
      Linkedin.svg-icon
    a(href="https://t.me/unfedres_staking" target="_blank").link
      Vector.svg-icon
    a(href="https://twitter.com/Unfederalreser1" target="_blank").link
      Twitt.svg-icon
    a(href="https://www.reddit.com/r/unFederalReserve" target="_blank").link
      Reddit.svg-icon
    a(href="https://www.coingecko.com/en/coins/unfederalreserve" target="_blank").link
      Geco.svg-icon
    a(href="https://coinmarketcap.com/currencies/unfederalreserve/" target="_blank").link
      cointMarket.svg-icon
    a(href="https://linktr.ee/unfederalreserve" target="_blank").link
      SocIcon.svg-icon
    a(href="https://defipulse.com/defi-lending" target="_blank").link
      Defi.svg-icon
</template>

<script>
import Linkedin from 'images/svg-icons/linkedin.svg';
import GroupIcon from 'images/svg-icons/group-icon.svg';
import Vector from 'images/svg-icons/vector.svg';
import Twitt from 'images/svg-icons/twitt.svg';
import Youtube from 'images/svg-icons/youtube.svg';
import Geco from 'images/svg-icons/geco.svg';
import Reddit from 'images/svg-icons/reddit.svg';
import cointMarket from 'images/svg-icons/coin-market.svg';
import SocIcon from 'images/svg-icons/soc-icon.svg';
import Defi from 'images/svg-icons/defi.svg';

export default {
  name: 'SocialLinks',
  components: {
    Linkedin,
    GroupIcon,
    Vector,
    Twitt,
    Youtube,
    Geco,
    Reddit,
    cointMarket,
    SocIcon,
    Defi,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.social-links
  display: flex
  flex-direction: row
  flex-wrap: wrap
  @media screen and (max-width: 767px)
    margin-top: 10px
.link
  width: 50px
  height: 50px
  opacity: 1 !important
  position: relative
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  @media screen and (max-width: 767px)
    width: 45px
    height: 45px
  &:before
    content: ''
    position: absolute
    left: 0
    top: 0
    width: 50px
    height: 50px
    z-index: 2
    background-repeat: no-repeat
    background-size: contain
    background-image: url('~images/hover-square-btn.svg')
    opacity: 0
    +mt(.2s)
  &:hover
    &:before
      opacity: 1
      +mt(.2s)
</style>
