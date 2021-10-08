<template lang="pug">
  .review-item-wrap
    .review-item
      .review-item__left
        .review-item__img-wrap
          .review-item__img
            img(:src="require(`images/${data.img}`)")
      .review-item__right.content-height
        .review-item__text {{ data.text }}
        .review-item__group
          .review-item__name {{ data.name }}
          .review-item__descr {{ data.description }}
    .review-item.mobile
      .review-item__left
        .review-item__text {{ data.text }}
      .review-item__right.content-height
        .review-item__img-wrap
          .review-item__img
            img(:src="require(`images/${data.img}`)")
        .review-item__group
          .review-item__name {{ data.name }}
          .review-item__descr {{ data.description }}

</template>

<script>
import BaseCarousel from '@/components/Base/BaseCarousel';

export default {
  name: 'ReviewSection',
  components: {
    BaseCarousel,
  },
  props: {
    data: Object,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'

.review-item
  display: flex
  align-items: center
  @media screen and (max-width: 991px)
    display: none
  &.mobile
    display: none
    @media screen and (max-width: 991px)
      display: block
  &__group
    @media screen and (max-width: 991px)
      width: 100%
  &__left
    position: relative
    flex-shrink: 0
    margin-right: 35px
    @media screen and (max-width: 991px)
      margin-right: 0
      padding-top: 60px
    &::before
      content: ""
      position: absolute
      top: 0
      left: 0
      width: 45px
      height: 39px
      background: url('~images/quote.svg') no-repeat center top
      display: none
      @media screen and (max-width: 991px)
        display: block
  &__right
    position: relative
    padding-top: 60px
    @media screen and (max-width: 991px)
      display: flex
      align-items: center
      padding-top: 0
    &::before
      content: ""
      position: absolute
      top: 0
      left: 0
      width: 45px
      height: 39px
      background: url('~images/quote.svg') no-repeat center top
      @media screen and (max-width: 991px)
        display: none
  &__img-wrap
    position: relative
    display: flex
    align-items: center
    justify-content: center
    flex-shrink: 0
    width: 302px
    height: 302px
    @media screen and (max-width: 991px)
      width: 203px
      height: 201px
      margin-right: 20px
    @media screen and (max-width: 767px)
      width: 99px
      height: 99px
      margin-right: 12px
    &::after
      content: ""
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      width: 303px
      height: 301px
      background: url('~images/rv-elips.svg') no-repeat center top
      background-size: cover
      @media screen and (max-width: 991px)
        width: 203px
        height: 201px
      @media screen and (max-width: 767px)
        width: 99px
        height: 99px
    &::before
      content: ""
      position: absolute
      z-index: 1
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      width: 218px
      height: 217px
      background: url('~images/person-circle.svg') no-repeat center top
      background-size: cover
      @media screen and (max-width: 991px)
        width: 165px
        height: 164px
      @media screen and (max-width: 767px)
        width: 71px
        height: 70px
  &__img
    max-width: 178px
    width: 100%
    position: relative
    z-index: 1
    display: flex
    align-items: center
    justify-content: center
    overflow: hidden
    border-radius: 100%
    @media screen and (max-width: 991px)
      max-width: 140px
    @media screen and (max-width: 767px)
      max-width: 59px
      position: relative
      top: 1px
    img
      max-width: 100%
  &__text
    font-size: 22px
    line-height: 33px
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 36px
    font-style: italic
    @media screen and (max-width: 767px)
      margin-bottom: 16px
  &__name
    font-weight: 700
    font-size: 20px
    line-height: 170%
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 5px
  &__descr
    font-size: 14px
    line-height: 21px
    letter-spacing: 0.01em
    color: #90B1F3

</style>
