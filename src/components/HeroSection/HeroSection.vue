<template lang="pug">
  section.HeroSection.hero
    .hero-content
      .hero-content__wrap
        h1 Be the Bank.
        h2 Fintech SaaS Solutions
        p unFederalReserve is a fintech SaaS company combining
          | software built on blockchain technology and 200 years
          | of consumer lending experience. ReserveLending is our live DeFI or P2P
          | lending and borrowing platform. Get the most from your crypto while
          | enjoying a safe and easy user experience by clicking the button below.
        p.bold-descr
          | Our banking products are designed for smaller U.S. Treasury
          | chartered banks and non-bank lenders in need of a DeFi strategy and
          | greater liquidity without sacrificing security or compliance. <br/>
          a(href="#") Click here to learn more
        div.btn-container
          BaseBtn(
            classes="btn-rounded btn-with-arrow btn-blue"
            text="Get Started"
            :link="link"
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
    BaseBtn,
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
  @media screen and (max-width: 1199px)
    background-position: left bottom
    background-image: url('~images/hero-section-mobile.svg')
  @media screen and (max-width: 767px)
    background-image: url('~images/hero-section-mobile-xs.svg')
    min-height: 1100px
  &-content
    width: 100%
    margin: 0 auto
    max-width: 1140px
    padding-left: 15px
    padding-right: 15px

    &__wrap
      padding-top: 170px
      max-width: 635px
      width: 100%
      @media screen and (max-width: 767px)
        padding-top: 112px
      h1
        font-weight: 700
        font-size: 55px
        line-height: 120%
        letter-spacing: 0.01em
        color: #2C2C2C
        @media screen and (max-width: 767px)
          font-size: 32px
      h2
        font-weight: 700
        font-size: 30px
        line-height: 130%
        letter-spacing: 0.01em
        color: #3377FF
        margin-bottom: 16px
      p
        margin-bottom: 25px
        max-width: 520px
        width: 100%
        font-size: 14px
        line-height: 170%
        letter-spacing: 0.01em
        color: #6C8AAE
        &.bold-descr
          max-width: 506px
          font-weight: 600
          margin-bottom: 32px
        a
          font-weight: 600
          font-size: 14px
          line-height: 170%
          letter-spacing: 0.01em
          color: #6C8AAE
          text-decoration: underline
          opacity: 1
          &:hover
            opacity: 0.8
            color: #6C8AAE
      .btn-container
        margin-bottom: 20px
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
</style>
