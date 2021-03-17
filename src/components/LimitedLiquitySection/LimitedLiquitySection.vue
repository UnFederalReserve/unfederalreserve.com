<template lang="pug">
.LimitedLiquitySection
  section.limited-liquity.limited-liquity-today
    .wrap
      BaseImage.polygons(
        :src="require('images/polygons.svg')",
        alt="polygons",
      )
      .illustration-wrap
        Bank.illustration.desktop
        BankMobile.illustration.mobile
        BaseImage.close(
          :src="require('images/close.svg')",
          alt="close",
        )
      .limited-liquity__text
        h2 Liquidity
          br
          | is Limited
        p Middle-market B2B lenders sometimes experience payment latency or
          |  acceleration, and either instance can incur a cost for the lender.
          |  Excess cash sits fallow, while a cash deficit forces an emergency draw
          |  on a line of credit. Because typical loan interest rates are calculated
          |  based on borrowing for weeks and not hours, lenders can incur unnecessary
          |  charges when processing such short-term loans.
  section.limited-liquity.limited-liquity-great
    .wrap
      .limited-liquity__text
        h2 Accessible Liquidity,
          br
          | Lower Costs
        p UnFederalReserve uses an Auction Rate Bond (ARB) platform that can be specifically
          |  tailored to meet clients' unique workflows. Middle-market bank and non-bank lenders
          |  can feel confident in both lending to vetted third-parties directly and placing
          |  excess capital into the marketplace.
      BaseImage.polygons(
        :src="require('images/polygons-2.svg')",
        alt="polygons",
      )
      .illustration-wrap
        BankNext.illustration.desktop
        BankNextMobile.illustration.mobile
        BaseImage.tick(
          :src="require('images/tick.svg')",
          alt="tick",
        )
</template>

<script>
import BaseImage from 'Components/Base//BaseImage';
import Bank from 'images/svg-icons/bank-1.svg';
import BankNext from 'images/svg-icons/bank-2.svg';
import BankMobile from 'images/svg-icons/bank-1-mobile.svg';
import BankNextMobile from 'images/svg-icons/bank-2-mobile.svg';

export default {
  name: 'LimitedLiquitySection',
  components: {
    BaseImage,
    Bank,
    BankNext,
    BankMobile,
    BankNextMobile,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
section
  width: 100%
  position: relative
  @media screen and (max-width: 767px)
    margin-top: 50px
  .wrap
    max-width: 1140px
    padding: 0 15px
    margin: 0 auto
    display: flex
    flex-direction: row
    justify-content: space-between
    @media screen and (max-width: 767px)
      flex-direction: column
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
      justify-content: flex-end
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
      h2
        margin-bottom: 20px
  &.limited-liquity-today
    .limited-liquity__text
      width: 100%
      max-width: 413px
      margin-top: 100px
      @media screen and (max-width: 1140px)
        margin-top: 0
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
    margin-top: 150px
    @media screen and (max-width: 767px)
      margin-top: 50px
    .illustration-wrap
      margin-right: 0
      max-width: 670px
      .illustration
        height: 100%
        max-height: 540px
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
      max-width: 413px
      margin-top: 130px
      @media screen and (max-width: 1140px)
        margin-top: 0
      @media screen and (max-width: 767px)
        max-width: 100%
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
      @media screen and (max-width: 767px)
        display: none
    &.mobile
      @media screen and (min-width: 768px)
        display: none
</style>
