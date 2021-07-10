<template lang="pug">
.LimitedLiquitySection
  section.limited-liquity.limited-liquity-today
    h2 Liquidity is Limited
    .wrap
      .illustration-wrap.absolute-left
        Bank.illustration.desktop
        BaseImage.illustration.mobile(
          :src="require('images/bank-mob-1.svg')",
          alt="illustration-2",
          force
        )
      .limited-liquity__text.wide
        p Middle-market B2B lenders sometimes experience payment latency 
          | or acceleration, and either instance can incur a cost for the lender.
        BaseInfoBox
          p Excess cash sits fallow, while a cash deficit forces an emergency draw on a line of credit.
        p Because typical loan interest rates are calculated based on borrowing for weeks 
          | and not hours, lenders can incur unnecessary charges when processing such short-term loans.
  section.limited-liquity.limited-liquity-great
    h2 Accessible Liquidity,
      br
      | Lower Costs
    .wrap
      .limited-liquity__text
        BaseInfoBox
          p 
            span unFederalReserve 
            | uses an Auction Rate Bond (ARB) platform that 
            | can be specifically tailored to meet clients' unique workflows.
        p Middle-market bank and non-bank lenders can feel confident in both 
          | lending to vetted third-parties directly and placing excess capital into the marketplace.
      .illustration-wrap.absolute-right
        BaseImage.illustration.desktop(
          :src="require('images/bank-2.svg')",
          alt="illustration-2",
          force
        )
        BaseImage.illustration.mobile(
          :src="require('images/bank-mob-2.svg')",
          alt="illustration-2",
          force
        )
</template>

<script>
import BaseImage from 'Components/Base//BaseImage';
import Bank from 'images/svg-icons/bank-1.svg';
import BankMobile from 'images/svg-icons/bank-1-mobile.svg';
import BankNextMobile from 'images/svg-icons/bank-2-mobile.svg';
import BaseInfoBox from 'Components/Base/BaseInfoBox';

export default {
  name: 'LimitedLiquitySection',
  components: {
    BaseImage,
    Bank,
    BankMobile,
    BankNextMobile,
    BaseInfoBox
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
section
  width: 100%
  position: relative
  h2
    font-weight: 700
    font-size: 42px
    line-height: 130%
    text-align: center
    padding: 0 15px
    letter-spacing: 0.01em
    color: #FFFFFF
    position: relative
    z-index: 1
    @media screen and (max-width: 767px)
      font-size: 32px  
  @media screen and (max-width: 767px)
    margin-top: 50px
  .wrap
    max-width: 1140px
    padding: 0 15px
    margin: 0 auto
    display: flex
    flex-direction: row
    justify-content: space-between
    position: relative
    @media screen and (max-width: 991px)
      flex-direction: column-reverse
      flex-wrap: wrap
      align-items: center
    .illustration-wrap
      padding-top: 30px
      width: 100%
      max-width: 640px
      flex-shrink: 0
      margin-right: 30px
      position: relative
      display: flex
      z-index: 1
      justify-content: flex-end
      &.absolute-left
        position: absolute
        bottom: -145px
        left: -112px
        max-width: 790px
        @media screen and (max-width: 991px)
          max-width: 400px
          position: relative
          bottom: 0
          left: 0
          margin-right: 0
      &.absolute-right
        position: absolute
        bottom: -212px
        right: -20px
        max-width: 790px
        @media screen and (max-width: 1199px)
          max-width: 640px
          bottom: -100px
        @media screen and (max-width: 991px)
          max-width: 400px
          position: relative
          bottom: 0
          right: 0
          margin-right: 0
      @media screen and (max-width: 1140px)
        max-width: 50%
        img
          width: 100%
      @media screen and (max-width: 767px)
        margin-right: 0
        max-width: 100%
        justify-content: center
        img
          width: 100%
  .limited-liquity
    &__text
      *
        color: $white
        font-weight: 500
        font-size: 18px
        line-height: 160%
        letter-spacing: 0.01em
      h2
        margin-bottom: 20px
  &.limited-liquity-today
    padding-top: 120px
    position: relative
    @media screen and (max-width: 991px)
      padding-top: 55px
    &::before
      content: ""
      position: absolute
      top: -860px
      left: 0
      right: 0
      width: 100%
      height: 2364px
      background: url("~images/wave-3.svg") no-repeat center
      background-size: cover
    .limited-liquity__text
      width: 100%
      max-width: 413px
      margin-top: 100px
      .info-box
        @media screen and (max-width: 991px)
          margin-left: 20px
          width: calc(100% - 20px)
      @media screen and (max-width: 991px)
        margin-top: 50px
      &.wide
        max-width: 100%
        padding-left: 50%
        @media screen and (max-width: 991px)
          padding-left: 0
      @media screen and (max-width: 767px)
        order: -1
        max-width: 100%
    .close
      position: absolute
      right: -190px
      width: 565px
      bottom: -70px
      @media screen and (max-width: 1140px)
        width: 200px !important
        left: 41%
        right: auto
        bottom: 0
      @media screen and (max-width: 767px)
        display: none
    .polygons
      position: absolute
      left: -15%
      top: -50%
      width: 1200px
      height: 1200px
      @media screen and (max-width: 1140px)
        display: none
  &.limited-liquity-great
    margin-top: 230px
    .wrap
      @media screen and (max-width: 991px)
        flex-direction: column
    @media screen and (max-width: 991px)
      margin-top: 100px
    .info-box
      @media screen and (max-width: 1199px)
        margin-left: 20px
        width: calc(100% - 20px)
    @media screen and (max-width: 767px)
      margin-top: 50px
    .illustration-wrap
      margin-right: 0
      max-width: 670px
      .illustration
        height: 100%
        max-width: 100%
      @media screen and (max-width: 1140px)
        max-width: 50%
        img
          width: 100%
      @media screen and (max-width: 767px)
        margin-right: 0
        max-width: 100%
        justify-content: center
        img
          width: 100%
    .limited-liquity__text
      width: 100%
      max-width: 445px
      margin-top: 130px
      @media screen and (max-width: 991px)
        max-width: 100%
        margin-top: 50px
    .tick
      position: absolute
      left: -70px
      width: 400px
      bottom: -30px
      @media screen and (max-width: 1140px)
        width: 200px !important
        left: auto
        right: 55%
        bottom: 0
      @media screen and (max-width: 767px)
        display: none
    .polygons
      position: absolute
      right: -15%
      top: -50%
      width: 1200px
      height: 1200px
      @media screen and (max-width: 1140px)
        display: none
  .illustration
    height: 100%
    &.desktop
      @media screen and (max-width: 991px)
        display: none
    &.mobile
      display: none
      @media screen and (max-width: 991px)
        display: flex
</style>
