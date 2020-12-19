<template lang="pug">
  .TeamThumbnail.thumbnail(:class="{active}")
    .thumbnail-image
      BaseImage.chest(
        :src="require(`images/${image}`)",
        alt="howard",
      )
    .thumbnail-description
      h5 {{ name }}
      h6 {{ title }}
    .thumbnail-social
      .social-links
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
  name: 'TeamThumbnail',
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
  background: transparent
  border-radius: 10px
  height: 255px
  width: 100%
  max-width: 320px
  position: relative
  border: solid 1px #6494F4
  +mt(.3s)
  &-image
    border: 2px solid $white
    width: 140px
    height: 140px
    background: $periwinkle
    border-radius: 100px
    position: absolute
    top: -50px
    left: 88px
  &-description
    padding-top: 120px
    padding-left: 25px
    padding-right: 25px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    color: $white
    h5
      margin-bottom: 7px
    h6
      opacity: 0.6
  &:hover,
  &.active
    background: linear-gradient(89.34deg, #6494F4 1.42%, #476FEE 101.14%)
    border: solid 1px transparent
    +mt(.3s)
    cursor: pointer
  .social-links
    display: flex
    flex-direction: row
    justify-content: center
    margin-top: 15px
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
      height: 14px
    &:before
      content: ''
      position: absolute
      left: 0
      top: 0
      width: 30px
      height: 30px
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
