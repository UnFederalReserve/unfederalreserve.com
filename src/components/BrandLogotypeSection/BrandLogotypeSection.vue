<template lang="pug">
  section.s-logotype
    .s-container
      h2.s-title Logotype
      p.logotype-title-descr The logo is the most important element of the brand's 
        | visual perception. Please ensure there is enough free 
        | space around the logo when using it.
      .logotype-wrap
        .logotype-bg
          .logotype-bg-item
            h4.logotype-bg-item__title Light Background
            .logotype-bg-item__small.logotype-bg-style.logotype-light
              BaseImage(
                :src="require('images/logotype-light-bg.svg')",
                alt="logo",
              )
            .logotype-bg-item__big.logotype-bg-style.logotype-light
              BaseImage(
                :src="require('images/logotype-big-light-bg.svg')",
                alt="logo",
              )
          .logotype-bg-item
            h4.logotype-bg-item__title Dark Background
            .logotype-bg-item__small.logotype-bg-style.logotype-dark
              BaseImage(
                :src="require('images/logotype-dark-bg.svg')",
                alt="logo",
              )
            .logotype-bg-item__big.logotype-bg-style.logotype-dark
              BaseImage(
                :src="require('images/logotype-big-dark-bg.svg')",
                alt="logo",
              )
        BrandLogotypeIncorrect

</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
import BrandLogotypeIncorrect from 'Components/BrandLogotypeSection/BrandLogotypeIncorrect';

export default {
  name: "BrandLogotypeSection",
  components: {
    BaseImage,
    BrandLogotypeIncorrect
  }
}
</script>

<style lang="sass" scoped>

.s-logotype
  padding: 85px 0 0
  @media screen and (max-width: 767px)
    padding-top: 83px

.s-title
  margin-bottom: 22px

.logotype-title-descr
  font-size: 16px
  line-height: 170%
  text-align: center
  letter-spacing: 0.01em
  color: #FFFFFF
  max-width: 642px
  width: 100%
  margin: 0 auto 81px
  @media screen and (max-width: 767px)
    margin-bottom: 58px

.logotype-wrap
  max-width: 923px
  width: 100%
  margin: 0 auto

.logotype-bg
  display: flex
  flex-wrap: wrap
  justify-content: space-between

.logotype-bg-item
  width: calc(50% - 16px)
  margin-bottom: 60px
  @media screen and (max-width: 767px)
    width: 100%
    margin-bottom: 37px
  &__title
    font-weight: 500
    font-size: 22px
    line-height: 170%
    text-align: center
    letter-spacing: 0.01em
    color: #748DE3
    margin-bottom: 25px
  &__small
    height: 140px
    margin-bottom: 23px
  &__big
    height: 337px
.logotype-bg-style
  border-radius: 50px
  display: flex
  align-items: center
  justify-content: center
  padding: 10px
  img
    max-width: 100%
  &.logotype-light
    background: #FFFFFF
  &.logotype-dark
    background: #060D5D

</style>