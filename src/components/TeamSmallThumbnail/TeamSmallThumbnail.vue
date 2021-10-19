<template lang="pug">
  .TeamSmallThumbnail.thumbnail
    .thumbnail-image
      .image(:style="{ 'background-image': 'url(' + require(`images/${image}`) + ')' }")
    .thumbnail-description
      .wrap
        h4 {{ name }}
        p {{ title }}
      .thumbnail-social(v-if="social.length")
        a(
          v-for="link in social"
          :href="link.path"
          target="_blank"
        ).link
          Linkedin.svg-icon(v-show="link.name === 'linkedin'")
          Facebook.svg-icon(v-show="link.name === 'facebook'")
</template>

<script>
import BaseImage from 'Components/Base//BaseImage';
import Linkedin from 'images/svg-icons/linkedin.svg';
import Facebook from 'images/svg-icons/facebook.svg';

export default {
  name: 'TeamSmallThumbnail',
  components: {
    BaseImage,
    Linkedin,
    Facebook,
  },
  props: {
    name: String,
    title: String,
    social: Array,
    image: String,
    active: Boolean,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.thumbnail
  display: flex
  flex-direction: column
  border-radius: 20px
  padding: 20px
  background: #13237B
  +mt(.3s)
  &:hover
    +mt(.3s)
    background: rgba(0, 0, 0, 0.08)
  &-image
    width: calc(100% - 25px)
    max-width: 310px
    height: 300px
    flex-shrink: 0
    background: #2B3E99
    border-radius: 20px
    margin: -35px auto 28px
    overflow: hidden
    box-shadow: 0 1px 10px rgba(0,0,0,0.5)
    @media screen and (max-width: 580px)
      height: 275px
    .image
      width: 100%
      height: 100%
      background-size: cover
      background-position: top center
  &-description
    display: flex
    flex-direction: row
    align-items: flex-start
    justify-content: space-between
    *
      color: $white
    h4
      margin-bottom: 12px
      @media screen and (max-width: 580px)
        font-size: 22px
    p
      margin-bottom: 0
      line-height: 27px
      @media screen and (max-width: 580px)
        font-size: 16px
        line-height: 24px
  &-social
    display: flex
    background: rgba(100, 133, 255, 0.25)
    border-radius: 5px
    padding: 5px
    flex-direction: row
    justify-content: center
    align-items: center
    width: 65px
    height: 55px
    margin-left: 10px
    flex-shrink: 0
    .link
      width: 30px
      height: 30px
      opacity: 1 !important
      position: relative
      display: flex
      flex-direction: row
      justify-content: center
      align-items: center
      .svg-icon
        width: auto
        height: 18px
      &:hover
        opacity: 0.8 !important
</style>
