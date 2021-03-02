<template lang="pug">
  section.HeroSection.hero
    .hero-content
      .hero-content__wrap
        h1 Your Middle Market DeFI Solution
        p UnFederalReserve is a banking Saas company built on blockchain
          | technology. Our banking products are designed for smaller U.S.
          | Treasury chartered banks and non-bank lenders in need of
          | greater liquidity without sacrificing security or compliance.
          | Our software leverages the best of blockchain while keeping
          | the user’s typical banking experience in place.
        v-btn(href="https://app.unfederalreserve.com")
          | Stake
          span &nbsp;account
</template>

<script>

export default {
  name: 'HeroSection',
  components: {
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.hero
  background-image: url('~images/hero-section.svg')
  background-repeat: no-repeat
  background-position: center bottom
  background-size: cover
  width: 100%
  height: 1000px
  @media screen and (min-width: 2200px)
    height: 1100px
  @media screen and (min-width: 2700px)
    height: 1200px
  @media screen and (max-width: 900px)
    background-position: left bottom
    background-image: url('~images/hero-section-mobile.svg')
  @media screen and (max-width: 576px)
    height: 800px
  &-content
    width: 100%
    margin: 0 auto
    max-width: 1140px
    padding-left: 15px
    padding-right: 15px
    &__wrap
      padding-top: 220px
      max-width: 486px
      width: 100%
      @media screen and (max-width: 576px)
        padding-top: 150px
      h1
        margin-bottom: 38px
        @media screen and (max-width: 576px)
          max-width: 225px
      p
        margin-bottom: 40px
        @media screen and (max-width: 576px)
          max-width: 283px
      .v-btn
        @media screen and (max-width: 576px)
          min-width: 145px
          span
            display: none
</style>
