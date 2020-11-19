<template lang="pug">
  .SocialLinks.social-links
    a(href="https://www.linkedin.com/company/unfederalreserve" target="_blank").link
      Linkedin.svg-icon
    a(href="https://www.facebook.com/residualtoken" target="_blank").link
      Facebook.svg-icon
    a(href="https://discord.com/invite/A4MyW7g" target="_blank").link
      GroupIcon.svg-icon
    a(href="https://t.me/unfedres_staking" target="_blank").link
      Vector.svg-icon
    a(href="https://twitter.com/Unfederalreser1" target="_blank").link
      Twitt.svg-icon
</template>

<script>
import Linkedin from 'images/svg-icons/linkedin.svg';
import Facebook from 'images/svg-icons/facebook.svg';
import GroupIcon from 'images/svg-icons/group-icon.svg';
import Vector from 'images/svg-icons/vector.svg';
import Twitt from 'images/svg-icons/twitt.svg';

export default {
  name: 'SocialLinks',
  components: {
    Linkedin,
    Facebook,
    GroupIcon,
    Vector,
    Twitt,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.social-links
  display: flex
  flex-direction: row
.link
  width: 50px
  height: 50px
  opacity: 1 !important
  position: relative
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
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
    background-image: url('~images/hover-bubble-btn.svg')
    opacity: 0
    +mt(.2s)
  &:hover
    &:before
      opacity: 1
      +mt(.2s)
</style>
