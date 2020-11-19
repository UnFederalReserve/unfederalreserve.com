<template lang="pug">
  footer.TheFooter.footer
    .footer-content
      SocialLinks
      v-btn(
        outlined,
        small,
      ) Residual Token, Inc. Homepage
      p All rights reserved©2020
    BaseImage.right-footer-rock(
      :src="require('images/right-footer-rock.svg')",
      alt="right-footer-rock",
      force,
    )
    BaseImage.star(
      :src="require('images/star.svg')",
      alt="star",
      force,
    )
    BaseImage.rock(
      :src="require('images/rock.svg')",
      alt="rock",
      force,
    )
    BaseImage.chest(
      :src="require('images/chest.svg')",
      alt="chest",
      force,
    )
</template>

<script>
import BaseImage from 'Components/Base//BaseImage';
import SocialLinks from 'Components/SocialLinks/SocialLinks';

export default {
  name: 'TheFooter',
  components: { BaseImage, SocialLinks },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.footer
  width: 100%
  height: 316px
  background-image: url('~images/footer-bg.svg')
  background-repeat: no-repeat
  background-position: bottom left
  background-size: cover
  position: relative
  bottom: -1px
  &-content
    width: 100%
    height: 100%
    max-width: 1140px
    padding-left: 15px
    padding-right: 15px
    margin: 0 auto
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: center
    position: relative
    z-index: 2
    .v-btn
      margin-top: 15px
    p
      color: $white
      opacity: 0.5
      margin-top: 20px
      margin-bottom: 0
  .right-footer-rock
    position: absolute
    left: 0
    bottom: 0
  .star
    position: absolute
    right: 20px
    top: 20px
  .rock
    position: absolute
    right: 40px
    bottom: 100px
  .chest
    position: absolute
    right: 20%
    top: -10px
    @media screen and (max-width: 767px)
      display: none
</style>
