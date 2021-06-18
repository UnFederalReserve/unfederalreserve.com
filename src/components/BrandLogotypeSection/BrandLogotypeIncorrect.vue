<template lang="pug">
  .logotype-incorrect
    .logotype-incorrect__title Incorrect use
    .incorrect-items
      .incorrect-item
        .incorrect-item__logo
          .incorrect-item__icon
            BaseImage(
              :src="require('images/incorrect-icon.svg')",
              alt="logo",
            )
          BaseImage(
            :src="require('images/incorrect-logo-1.svg')",
            alt="logo",
          )
        .incorrect-item__descr Don’t use wordmark with out symbol
      .incorrect-item
        .incorrect-item__logo
          .incorrect-item__icon
            BaseImage(
              :src="require('images/incorrect-icon.svg')",
              alt="logo",
            )
          BaseImage(
            :src="require('images/incorrect-logo-2.svg')",
            alt="logo",
          )
        .incorrect-item__descr Do not use wrong colors
      .incorrect-item
        .incorrect-item__logo
          .incorrect-item__icon
            BaseImage(
              :src="require('images/incorrect-icon.svg')",
              alt="logo",
            )
          BaseImage(
            :src="require('images/incorrect-logo-3.svg')",
            alt="logo",
          )
        .incorrect-item__descr Do not outline symbol or wordmark
      .incorrect-item
        .incorrect-item__logo
          .incorrect-item__icon
            BaseImage(
              :src="require('images/incorrect-icon.svg')",
              alt="logo",
            )
          BaseImage(
            :src="require('images/incorrect-logo-4.svg')",
            alt="logo",
          )
        .incorrect-item__descr Do not stretch and squeeze logotype

</template>

<script>
import BaseImage from 'Components/Base/BaseImage';

export default {
  name: "BrandLogotypeIncorrect",
  components: {
    BaseImage
  }
}
</script>

<style lang="sass" scoped>

.logotype-incorrect
  @media screen and (max-width: 767px)
    margin-top: 26px
  &__title
    font-weight: 700
    font-size: 22px
    line-height: 170%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 36px
    @media screen and (max-width: 767px)
      margin-bottom: 60px

.incorrect-items
  display: flex
  flex-wrap: wrap
  justify-content: space-between

.incorrect-item
  width: calc(50% - 16px)
  margin-bottom: 54px
  @media screen and (max-width: 767px)
    width: 100%
  &__icon
    position: absolute
    z-index: 1
    top: -40px
    left: 0
    right: 0
    margin: 0 auto
    border-radius: 100%
    background: #FF5252
    width: 68px
    height: 68px
    display: flex
    align-items: center
    justify-content: center
  &__logo
    position: relative
    background: #FFFFFF
    border: 4px solid #FF5252
    border-radius: 50px
    padding: 27px 20px
    height: 140px
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 23px
    img
      max-width: 100%
  &__descr
    font-weight: 500
    font-size: 18px
    line-height: 27px
    text-align: center
    letter-spacing: 0.01em
    color: #748DE3

</style>