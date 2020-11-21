<template lang="pug">
  .TeamBigThumbnail.thumbnail(:class="{active}")
    .thumbnail-image
      .image(:style="{ 'background-image': 'url(' + require(`images/${image}`) + ')' }")
    .thumbnail-description
      h5 {{ title }}
      h3 {{ name }}
      p(v-html="description")
      .thumbnail-social
        a(href="#" target="_blank").link
          Facebook.svg-icon
        a(href="#" target="_blank").link
          Linkedin.svg-icon
</template>

<script>
import BaseImage from 'Components/Base//BaseImage';
import Linkedin from 'images/svg-icons/linkedin.svg';
import Facebook from 'images/svg-icons/facebook.svg';

export default {
  name: 'TeamBigThumbnail',
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
    description: String,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.thumbnail
  display: flex
  flex-direction: row
  background: transparent
  border-radius: 5px
  padding: 25px
  +mt(.3s)
  &:hover
    +mt(.3s)
    background: rgba(0, 0, 0, 0.08)
  &-image
    width: 100%
    max-width: 395px
    flex-shrink: 0
    background: linear-gradient(180deg, #4FBDCE 0%, #018CC8 100%)
    margin-right: 45px
    .image
      width: 100%
      height: 100%
      background-size: contain
      background-position: center
  &-description
    display: flex
    flex-direction: column
    align-items: flex-start
    *
      color: $white
    p
      opacity: 0.8
      margin-top: 20px
  &-social
    display: flex
    background: rgba(100, 133, 255, 0.25)
    border-radius: 5px
    padding: 5px
    flex-direction: row
    justify-content: center
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
