<template lang="pug">
  section.HeroSection.hero
    .hero-content
      .hero-content__wrap
        .cloud-items
          .cloud-item.cloud-supply
            .cloud-item__value $51,061,113.00
            .cloud-item__label Total Supply
          .cloud-item.cloud-apy
            .cloud-item__top-info Earn up to
            .cloud-item__value 34.63%
            .cloud-item__label USDC APY
        p.hero-content__text
          strong unFederalReserve&nbsp;
          | is a banking SaaS company
          | built on blockchain technology. Our banking products are designed
          | for smaller U.S. Treasury chartered banks and non-bank lenders in
          | need of greater liquidity without sacrificing security or compliance.
          | ReserveLending is our live DeFI or P2P lending and borrowing platform.
          | Get the most from your crypto while enjoying a safe and easy user
          | experience by clicking the button below
        div.btn-container
          BaseBtn(
            classes="btn-rounded btn-with-arrow btn-gradient"
            text="Get Started"
            :link="link"
          )
          BaseBtn(
            classes="btn-rounded btn-with-arrow btn-grey-border"
            text="LP Staking"
            link="https://app.unfederalreserve.com/farms/eRSDL-ETH%20UNI-V2%20LP"
          )
</template>


<script>

import DropdownMenu from 'Components/DropdownMenu/DropdownMenu';
import BaseBtn from 'Components/Base/BaseBtn';
import CONFIG from 'Config';

export default {
  name: 'HeroSection',
  components: {
    DropdownMenu,
    BaseBtn
  },
  data() {
    return {
      show: false,
      right: false,
      hover: false,
      interactive: false,
      transition: false,
      closeOnClickOutside: true,
      link: CONFIG.urls.lendingMain
    };
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
@import "~Styles/_color"
.hero
  background-image: url('~images/hero-section.svg')
  background-repeat: no-repeat
  background-position: center bottom
  background-size: cover
  width: 100%
  height: 920px
  @media screen and (min-width: 2200px)
    height: 1200px
  @media screen and (min-width: 2700px)
    height: 1500px
  @media screen and (max-width: 767px)
    min-height: 1100px
  &-content
    width: 100%
    margin: 0 auto
    max-width: 1140px
    padding-left: 15px
    padding-right: 15px

    &__text
      margin: 24px auto 24px
      width: 100%
      max-width: 663px
      font-size: 14px
      line-height: 170%
      letter-spacing: 0.01em
      color: #021859
      text-align: center
      margin-bottom: 53px
      &.bold-descr
        margin-bottom: 21px

      strong
        font-weight: 700
        font-size: 18px
        line-height: 170%
        letter-spacing: 0.01em
        color: $blue-23

    &__wrap
      padding-top: 110px
      width: 100%
      @media screen and (max-width: 767px)
        padding-top: 112px
      h1
        font-size: 56px
        letter-spacing: 0.01em
        line-height: 130%
        color: #002490
        margin-bottom: 30px
        @media screen and (max-width: 767px)
          font-size: 32px
          margin-bottom: 24px
      .btn-container
        margin-bottom: 20px
        display: flex
        flex-wrap: wrap
        justify-content: center
        align-items: center
        .btn-rounded
          margin: 0 7px 10px
      .hero-bottom-links
        display: flex
        color: black
        font-weight: 500
        font-size: 16px
        line-height: 160%
        letter-spacing: 0.01em
        color: #042751
        a
          color: #366CEF
          &:hover
            text-decoration: underline

.cloud-items
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: wrap
.cloud-item
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  background-size: contain
  background-repeat: no-repeat
  min-height: 215px
  width: 100%
  flex-shrink: 0
  margin: 0 20px
  @media screen and (max-width: 1199px)
    min-height: 150px
  &.cloud-supply
    background-image: url('~images/cloud-1.svg')
    max-width: 477px
    padding-top: 20px
    @media screen and (max-width: 1199px)
      max-width: 320px
  &.cloud-apy
    background-image: url('~images/cloud-2.svg')
    max-width: 463px
    @media screen and (max-width: 1199px)
      max-width: 320px
  &__value
    font-weight: 700
    font-size: 46px
    line-height: 130%
    letter-spacing: 0.01em
    color: $blue-21
    margin-bottom: 2px
    margin-top: 7px
    @media screen and (max-width: 1199px)
      font-size: 28px
  &__label
    font-weight: 600
    font-size: 18px
    line-height: 130%
    letter-spacing: 0.01em
    text-transform: uppercase
    color: $blue-22
  &__top-info
    font-weight: 600
    font-size: 14px
    line-height: 130%
    letter-spacing: 0.01em
    text-transform: uppercase
    color: $blue-21


</style>
