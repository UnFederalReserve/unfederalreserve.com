<template lang="pug">
  .rsn-item(:class="classes")
    .rsn-item__top
      .rsn-item__logo
        BaseImage.rsn-logo-1(
          :src="icon",
          alt="icon",
        )
      .rsn-item__name {{name}}
      .rsn-item__top-info
        strong APY %
        ul
          li Supply  -  Borrow
          li Cost of Loan  -  Rank
    .rsn-item__content
      .rsn-item__data.row-style(
        v-for="dataVal in data"
        :key="dataVal.id"
      )
        ul
          li {{dataVal.value1}}  -  {{dataVal.value2}}
          li {{dataVal.value3}}&nbsp;
            span - {{dataVal.value4}}
</template> 

<script>
import BaseImage from 'Components/Base/BaseImage';
export default {
  name: "LendingReasonItem",
  components: {
    BaseImage
  },
  props: {
    icon: String,
    name: String,
    data: Array,
    classes: String
  }
}
</script>

<style lang="sass" scoped>
.rsn-item
  flex: 1
  @media screen and (max-width: 991px)
    background: linear-gradient(180deg, #0D32A8 0%, #1A2B89 100%)
    border: 2px solid #4C71EE
    box-shadow: 0px 1px 28px rgba(67, 130, 255, 0.26)
    border-radius: 25px
    min-width: 210px
    .row-style
      background-color: transparent
  &.active
    @media screen and (max-width: 991px)
      display: block
  &.hide
    @media screen and (max-width: 991px)
      display: none
  &:last-child
    .rsn-item__data
      border-top-right-radius: 20px
      border-bottom-right-radius: 20px
  &:nth-child(2)
    background: linear-gradient(180deg, #0D32A8 0%, #1A2B89 100%)
    border: 2px solid #4C71EE
    box-shadow: 0px 1px 28px rgba(67, 130, 255, 0.26)
    border-radius: 25px
    .row-style
      background-color: transparent
    .rsn-item__data
      ul 
        li
          span
            color: #00ffc2
            font-weight: 800
  &__top
    height: 260px
    text-align: center
    padding: 0 10px
    padding-top: 37px
    @media screen and (max-width: 991px)
      height: 294px
  &__logo
    display: flex
    width: 33px
    height: 33px
    margin: 0 auto 26px
    @media screen and (max-width: 991px)
      margin-bottom: 13px
    img
      max-width: 100%
  &__name
    font-weight: 700
    font-size: 18px
    line-height: 170%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 15px
    @media screen and (max-width: 991px)
      margin-bottom: 82px
  &__top-info
    font-weight: 500
    font-size: 16px
    line-height: 170%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    strong
      font-weight: 700
    ul
      list-style-type: none
      margin: 0
      padding: 0
      li
        font-size: 13px
        line-height: 22px
  &__data
    font-weight: 500
    font-size: 16px
    line-height: 170%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    display: flex
    align-items: center
    justify-content: center
    padding: 10px
    &:last-child
      @media screen and (max-width: 991px)
        margin-bottom: 30px
    span
      color: #748de3
    ul
      list-style-type: none
      margin: 0
      padding: 0

.row-style
  background: rgba(0, 0, 0, 0.11)
  height: 93px
  margin-bottom: 20px
  @media screen and (max-width: 991px)
    height: 73px
    margin-bottom: 12px
  @media screen and (max-width: 374px)
    height: 97px
</style>