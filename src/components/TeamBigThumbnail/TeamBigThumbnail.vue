<template lang="pug">
  .TeamBigThumbnail.thumbnail(:class="{active}" @click="active = !active")
    .thumbnail-image
      .image(:style="{ 'background-image': 'url(' + require(`images/${image}`) + ')' }")
    .thumbnail-description
      .wrap
        .thumbnail-mobile-image
          .image(:style="{ 'background-image': 'url(' + require(`images/${image}`) + ')' }")
        .titles
          h5 {{ title }}
          h3 {{ name }}
          .thumbnail-social
            a(
              v-for="link in social"
              :href="link.path"
              :key="link.name"
              target="_blank"
            ).link
              Linkedin.svg-icon(v-show="link.name === 'linkedin'")
              Facebook.svg-icon(v-show="link.name === 'facebook'")
      p(v-html="description")
      .thumbnail-social
        a(
          v-for="link in social"
          :href="link.path"
          :key="link.name"
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
    description: String,
  },
  data() {
    return {
      active: false,
    };
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
  @media screen and (max-width: 767px)
    padding: 18px
    height: 150px
    overflow: hidden
    &.active
      height: auto
  &:hover
    +mt(.3s)
    background: rgba(0, 0, 0, 0.08)
  &-image
    width: 100%
    max-width: 395px
    flex-shrink: 0
    background: linear-gradient(180deg, #4FBDCE 0%, #018CC8 100%)
    margin-right: 45px
    border-radius: 5px
    @media screen and (max-width: 767px)
      display: none
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
      margin-bottom: 0
      ::v-deep p
        &:last-child
          margin-bottom: 0
    .thumbnail-mobile-image
      background: linear-gradient(180deg, #4FBDCE 0%, #018CC8 100%)
      width: 100px
      height: 115px
      margin-right: 10px
      border-radius: 5px
      @media screen and (min-width: 768px)
        display: none
      .image
        width: 100%
        height: 100%
        background-size: contain
        background-position: left center
    .wrap
      display: flex
      flex-direction: row
      align-items: center
      justify-content: flex-start
      .titles
        display: flex
        flex-direction: column
        align-items: flex-start
        @media screen and (max-width: 767px)
          h5
            font-size: 14px
          h3
            font-size: 24px
            line-height: 32px
            margin-bottom: 15px
            @media screen and (max-width: 576px)
              font-size: 20px
            @media screen and (max-width: 340px)
              font-size: 18px
        .thumbnail-social
          @media screen and (min-width: 768px)
            display: none
          @media screen and (max-width: 767px)
            display: flex
  &-social
    display: flex
    background: rgba(100, 133, 255, 0.25)
    border-radius: 5px
    padding: 5px
    flex-direction: row
    justify-content: center
    @media screen and (max-width: 767px)
      display: none
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
