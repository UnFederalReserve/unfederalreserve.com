<template lang="pug">
  .TeamSmallThumbnail.thumbnail
    .thumbnail-image
      .image(:style="{ 'background-image': 'url(' + require(`images/${image}`) + ')' }")
    .thumbnail-description
      .wrap
        h4 {{ name }}
        p {{ title }}
      .thumbnail-social
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
  background: transparent
  border-radius: 5px
  padding: 20px
  +mt(.3s)
  &:hover
    +mt(.3s)
    background: rgba(0, 0, 0, 0.08)
  &-image
    width: 100%
    height: 230px
    flex-shrink: 0
    background: linear-gradient(180deg, #4FBDCE 0%, #018CC8 100%)
    border-radius: 5px
    margin-bottom: 20px
    @media screen and (max-width: 767px)
      height: 300px
    .image
      width: 100%
      height: 100%
      background-size: cover
      background-position: center bottom
      @media screen and (max-width: 767px)
        background-size: contain
  &-description
    display: flex
    flex-direction: row
    align-items: flex-start
    justify-content: space-between
    *
      color: $white
    h4
      margin-bottom: 12px
    p
      margin-bottom: 0
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
