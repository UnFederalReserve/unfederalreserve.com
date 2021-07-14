<template lang="pug">
  .leadership-item
    .leadership-item__img
      template(v-if="social")
        a(
          v-for="link in social"
          :key="link.name"
          :href="link.path" 
          class="leadership-item__social"
          target="_blank"
        )
          BaseImage.leadership-img-1(
            :src="require('images/linked-in.svg')",
            alt="leadership image",
          )
      .leadership-item__img-inner
        BaseImage.leadership-img-1(
          :src="require(`images/${image}`)",
          alt="leadership image",
        )
    .leadership-item__position {{title}}
    .leadership-item__name {{name}}
    .leadership-item__about(v-html="description")

</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
export default {
  name: "LeadershipItem",
  props: {
    name: String,
    title: String,
    social: Array,
    image: String,
    description: String
  },
  components: {
    BaseImage
  }
}
</script>

<style lang="sass" scoped>

.leadership-item
  background: linear-gradient(180deg, #0C1480 0%, #050B5B 100%)
  border-radius: 26px
  position: relative
  width: calc(50% - 30px)
  margin-bottom: 42px
  padding: 74px 40px 13px 40px
  @media screen and (max-width: 991px)
    width: 100%
    margin-bottom: 98px
  @media screen and (max-width: 374px)
    padding: 74px 20px 13px 20px
  &:last-child
    @media screen and (max-width: 991px)
      margin-bottom: 32px
  &__social
    position: absolute
    bottom: -10px
    right: -10px
    z-index: 2
    opacity: 1!important
    background: #0433BF
    width: 32px
    height: 32px
    display: flex
    align-items: center
    justify-content: center
    box-shadow: 0px 6.65387px 13.3077px rgba(31, 63, 174, 0.04), 0px 1.33077px 3.99232px rgba(31, 63, 174, 0.04), 0px 0px 0.665387px rgba(31, 63, 174, 0.04)
    border-radius: 8px
    &:hover
      opacity: 0.8!important
  &__img-inner
    border-radius: 20px
    overflow: hidden
    display: flex
    align-items: center
  &__img
    position: absolute
    margin: 0 auto
    left: 0
    right: 0
    top: -50px
    width: 100px
    height: 100px
  &__position
    text-align: center
    font-weight: 600
    font-size: 16px
    line-height: 170%
    letter-spacing: 0.01em
    margin-bottom: 8px
    color: #FFFFFF
  &__name
    font-weight: 700
    font-size: 30px
    line-height: 135%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 17px
  &__about
    font-weight: 500
    font-size: 14px
    line-height: 180%
    letter-spacing: 0.01em
    color: #FFFFFF
    p
      margin-bottom: 25px
</style>