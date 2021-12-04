<template lang="pug">
  footer.TheFooter.footer
    template(v-if="currentRouteName != 'product' && currentRouteName != 'brand'")
      //- BaseImage.right-footer-rock(
      //-   :src="require('images/top-left-footer-rock.svg')",
      //-   alt="right-footer-rock",
      //-   force,
      //- )
    .footer-content
      .footer-content-inner
        router-link.footer-logo-link(:to="{name: 'home'}" @click.native="onLogoClick")
          logo.footer-logo
        .footer-content-row
          .footer-content-row__home.column
            h5 Main
            router-link(:to="{name: 'home'}" @click.native="onLogoClick") Home
            router-link(:to="{name: 'product'}") Lending
            router-link(:to="{name: 'home', hash: '#about'}") About Us
            a(
              href="https://unfederalreserve.medium.com/",
              target="_blank",
            ) Blog
          .footer-content-row__documents.column
            h5 Documents
            router-link(:to="{name: 'terms'}") Terms &#38; Conditions
            router-link(:to="{name: 'brand'}") Brand Assets
            a(:href="`${linkDocs}/docs/security/bug-bounty/`" target="_blank") Bug Bounty
            a(:href="linkDocs" target="_blank") Education Center
          .footer-content-row__home.column
            h5 Exchanges
            a(
              href="https://app.bancor.network/?from=0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C&to=0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
              target="_blank",
            ) Bancor
            a(
              href="https://www.bitmart.com/trade/en?symbol=eRSDL_ETH&layout=basic",
              target="_blank",
            ) BitMart
            a(
              href="https://trade.kucoin.com/trade/ERSDL-USDT?spm=kcWeb.B5markets.tradeList.1",
              target="_blank",
            ) KuCoin
            a(
              href="https://latoken.com/exchange/ERSDL_USDT",
              target="_blank",
            ) LATOKEN
            a(
              href="https://app.sushi.com/swap?inputCurrency=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&outputCurrency=0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
              target="_blank",
            ) Sushiswap
            a(
              href="https://app.uniswap.org/#/swap?inputCurrency=0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6",
              target="_blank",
            ) Uniswap
          .footer-content-row__more.column
            h5 More
            a(
              href="https://app.unfederalreserve.com/farms/eRSDL-ETH%20UNI-V2%20LP",
              target="_blank",
            ) LP Staking
            a(
              href="https://www.branditpromo.com/stores/unFederalReserve",
              target="_blank",
            ) Merch Store
            a(
              href="https://forum.unfederalreserve.com",
              target="_blank",
            ) Forum
        .footer-content-row.between
          .footer-content-row__contacts.column
              h5 We Want to Hear from You
              .link-group
                a(href="mailto:feedback@unfederalreserve.com") feedback@unfederalreserve.com
                a(href="mailto:info@unfederalreserve.com" class="email-info") info@unfederalreserve.com
                a(href="mailto:askhoward@unfederalreserve.com") Submit Town Hall Questions
              SocialLinks
          .all-rights
            p.mb-0 All rights reserved ©2021
</template>

<script>
import CONFIG from 'Config';
import BaseImage from 'Components/Base//BaseImage';
import SocialLinks from 'Components/SocialLinks/SocialLinks';
import logo from 'images/svg-icons/logo.svg';

export default {
  name: 'TheFooter',
  components: { BaseImage, SocialLinks, logo },
  data() {
    return {
      linkDocs: CONFIG.urls.docsMain,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    onLogoClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.footer
  width: 100%
  position: relative
  bottom: -1px
  z-index: 2
  padding-top: 200px
  &-content
    width: 100%
    height: 100%
    max-width: 1140px
    padding-left: 15px
    padding-right: 15px
    margin: 0 auto
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-end
    padding-bottom: 100px
    @media screen and (max-width: 767px)
      padding-bottom: 30px
    &-inner
      position: relative
      width: 100%
      z-index: 2
    .footer-logo
      position: relative
      z-index: 1
      &-link
        margin-bottom: 40px
        opacity: 1
        display: inline-block
        &:hover
          opacity: 0.8
      path
        fill: #fff
    @media screen and (max-width: 1170px)
      max-width: 100%
      align-items: center
    &:before
      content: ''
      position: absolute
      left: 0
      top: 0
      z-index: 1
      background-image: url('~images/footer-bg.svg')
      background-repeat: no-repeat
      background-position: bottom left
      background-size: cover
      width: 100%
      height: 100%
    &-row
      display: flex
      flex-wrap: wrap
      flex-direction: row
      width: 100%
      position: relative
      z-index: 3
      &.between
        justify-content: space-between
        align-items: flex-end
        @media screen and (max-width: 767px)
          display: block
      &.last-row
        margin-top: 65px
        justify-content: flex-start
        @media screen and (max-width: 767px)
          margin-top: 30px
        @media screen and (max-width: 695px)
          justify-content: center
      &__contacts
        width: 100%
        max-width: 500px
        margin-right: 50px
        .link-group
          display: flex
          flex-direction: column
          margin-bottom: 10px
        span
          font-size: 12px
          line-height: 170%
          letter-spacing: 0.01em
          color: #909AB6
        h5
          margin-bottom: 11px!important
        .email-info
          margin-top: 15px
        a
          color: #fff!important
          font-size: 14px!important
          &:hover
            text-decoration: underline
        &.column
          a
            margin-bottom: 0!important
        @media screen and (max-width: 767px)
          margin-right: 30px
        ::v-deep .social-links
          margin-left: -12px
      &__documents
        width: 100%
        max-width: fit-content
        margin-right: 80px
        margin-bottom: 20px
        @media screen and (max-width: 767px)
          margin-right: 65px
          margin-bottom: 33px
        @media screen and (max-width: 480px)
          margin-right: 0
      &__home
        width: 100%
        max-width: fit-content
        margin-right: 80px
        margin-bottom: 20px
        @media screen and (max-width: 767px)
          margin-right: 65px
          margin-bottom: 33px
      &__more
        width: 100%
        max-width: fit-content
        margin-bottom: 20px
        @media screen and (max-width: 767px)
          margin-right: 65px
          margin-bottom: 33px
      &__btn
        @media screen and (max-width: 695px)
          width: 100%
          text-align: center
          margin-top: 30px
    h5
      font-weight: 600
      font-size: 18px
      line-height: 170%
      letter-spacing: 0.01em
      color: $white
      margin-bottom: 20px
    .column
      display: flex
      flex-direction: column
      @media screen and (max-width: 695px)
        // align-items: center
      a
        margin-bottom: 10px
        font-size: 16px
        opacity: 1
        line-height: 24px
        letter-spacing: 0.01em
        color: #909AB6
        &:last-child
          margin-bottom: 0
    .all-rights
      position: relative
      z-index: 2
      margin-bottom: 10px
      @media screen and (max-width: 767px)
        margin-bottom: 0
        margin-top: 40px
      p
        color: $white
        font-size: 14px
        line-height: 170%
        text-align: right
        letter-spacing: 0.01em
        @media screen and (max-width: 767px)
          text-align: left
  .right-footer-rock
    position: absolute
    left: calc((100% - 1140px) / 2)
    top: -185px
    max-width: 300px
    z-index: 1
    @media screen and (max-width: 767px)
      left: -50px
      top: -100px
      max-width: 200px
</style>
