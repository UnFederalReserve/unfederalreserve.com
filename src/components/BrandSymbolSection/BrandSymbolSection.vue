<template lang="pug">
  section.s-symbol
    .s-container
      h2.s-title Symbol
      p.symbol-title-descr The symbol is used in cases where the logo 
        | with the wordmark does not fit or looks cluttered.
      .symbol-wrap
        .symbol-items
          .symbol-item
            .symbol-item__img.light
              BaseImage(
                :src="require('images/symbol-dark.svg')",
                alt="logo",
              )
            .symbol-item__label.dark
              .symbol-item__label-icon
                BaseImage(
                  :src="require('images/symbol-light.svg')",
                  alt="logo",
                )
              span ERSDL/USDT
          .symbol-item
            .symbol-item__img.dark
              BaseImage(
                :src="require('images/symbol-light.svg')",
                alt="logo",
              )
            .symbol-item__label.light
              .symbol-item__label-icon
                BaseImage(
                  :src="require('images/symbol-dark.svg')",
                  alt="logo",
                )
              span ERSDL/USDT
        .symbol-incorrect
          .symbol-incorrect__title Incorrect use
          .incorrect-items
            .incorrect-item
              .incorrect-item__top
                .incorrect-item__img
                  .incorrect-item__icon
                    BaseImage(
                      :src="require('images/incorrect-icon.svg')",
                      alt="logo",
                    )
                  BaseImage(
                    :src="require('images/symbol-rotate.svg')",
                    alt="logo",
                  )
              .incorrect-item__descr Do not rotate the symbol

</template>

<script>
import BaseImage from 'Components/Base/BaseImage';

export default {
  name: "BrandSymbolSection",
  components: {
    BaseImage
  }
}
</script>

<style lang="sass" scoped>

.s-symbol
  padding: 96px 0 45px

.s-title
  margin-bottom: 22px

.symbol-title-descr
  font-size: 16px
  line-height: 170%
  text-align: center
  letter-spacing: 0.01em
  color: #FFFFFF
  max-width: 510px
  width: 100%
  margin: 0 auto 60px
  @media screen and (max-width: 767px)
    margin-bottom: 45px

.symbol-items
  display: flex
  justify-content: center
  flex-wrap: wrap
  margin-bottom: 108px
  @media screen and (max-width: 767px)
    margin-bottom: 60px

.symbol-item
  margin: 0 15px
  display: flex
  flex-direction: column
  align-items: center
  @media screen and (max-width: 767px)
    margin-bottom: 30px
  &:last-child
    @media screen and (max-width: 767px)
      margin-bottom: 0
  &__img
    width: 255px
    height: 255px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 100%
    position: relative
    margin-bottom: 30px
    img
      position: relative
      z-index: 1
    &::before, 
    &::after
      content: ''
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      border-radius: 100%
    &::before
      width: 205px
      height: 205px
    &::after
      width: 160px
      height: 160px
    &.light
      background: rgba(255, 255, 255, 0.03)
      &::before
        background: rgba(255, 255, 255, 0.08)
      &::after
        background: #FFFFFF
    &.dark
      background: rgba(6, 13, 93, 0.1)
      &::before
        background: rgba(6, 13, 93, 0.34)
      &::after
        background: #060D5D
  &__label
    border-radius: 10px
    display: inline-flex
    align-items: center
    justify-content: center
    padding: 9px 20px
    font-weight: 700
    font-size: 14px
    line-height: 170%
    text-align: center
    letter-spacing: 0.01em
    &.dark
      background: #fff
      color: #002490
      .symbol-item__label-icon
        background: #060D5D
    &.light
      background: #060D5D
      color: #fff
      .symbol-item__label-icon
        background: #fff
  &__label-icon
    width: 23px
    height: 23px
    border-radius: 100%
    margin-right: 8px
    display: flex
    align-items: center
    justify-content: center
    padding: 5px
    img
      max-width: 100%

.symbol-incorrect
  text-align: center
  &__title
    font-weight: 700
    font-size: 22px
    line-height: 170%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 13px

.incorrect-items
  display: flex
  justify-content: center
  flex-wrap: wrap

.incorrect-item
  margin: 0 15px 30px
  &__top
    position: relative
    width: 255px
    height: 255px
    background: rgba(255, 255, 255, 0.03)
    border-radius: 100%
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 17px
    &::before
      content: ''
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      border-radius: 100%
      width: 205px
      height: 205px
      background: rgba(255, 255, 255, 0.08)
  &__img
    position: relative
    background: #FFFFFF
    border: 4px solid #FF5252
    border-radius: 100%
    width: 160px
    height: 160px
    display: flex
    align-items: center
    justify-content: center
  &__icon
    position: absolute
    width: 68px
    height: 68px
    background: #FF5252
    border-radius: 100%
    top: -12px
    left: -20px
    display: flex
    align-items: center
    justify-content: center
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