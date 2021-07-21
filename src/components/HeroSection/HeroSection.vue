<template lang="pug">
  section.HeroSection.hero
    .hero-content
      .hero-content__wrap
        h1 Your Middle-Market DeFi Solution
        p unFederalReserve is a banking Saas company built on blockchain technology.&nbsp;
          | Our banking products are designed for smaller U.S.
          | Treasury chartered banks and non-bank lenders in need of greater
          | liquidity without sacrificing security or compliance.
        p.bold-descr
          strong Hit the button below and create or manage a stake account and purchase our token.
        div.btn-container
          BaseBtn(
            classes="btn-rounded btn-with-arrow btn-gradient"
            text="Get Started"
            :link="link"
            :withArrow="true"
          )
        div.hero-bottom-links
          | Our &nbsp;
          a(
            :href="require('docs/LitePaperRSDL.pdf')",
            target="_blank",
          ) litepaper
          | &nbsp; and &nbsp;
          a(
            :href="require('docs/Residual_Token_Whitepaper_091520_CONFIDE.pdf')",
            target="_blank",
          ) whitepaper
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
        font-size: 56px
        letter-spacing: 0.01em
        line-height: 130%
        color: #002490
        margin-bottom: 30px
        @media screen and (max-width: 767px)
          font-size: 32px
          margin-bottom: 24px

      p
        margin-bottom: 24px
        max-width: 520px
        width: 100%
        font-size: 16px
        line-height: 170%
        letter-spacing: 0.01em
        color: #021859
        &.bold-descr
          margin-bottom: 21px

        strong
          font-weight: 600
          font-size: 18px
          line-height: 170%
          letter-spacing: 0.01em
          color: #021859
          opacity: 0.8
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
