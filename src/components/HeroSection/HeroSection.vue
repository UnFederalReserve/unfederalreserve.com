<template lang="pug">
  section.HeroSection.hero
    .hero-content
      .hero-content__wrap
        h1 Middle Market DeFI
        p Here will be the text about what unfederal reserve is.
          |  Here will be the text about what unfederal reserve is.Here will be the tex
        v-btn(href="https://app.unfederalreserve.com/", target="_blank") Stake account
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
  background-position: top center
  background-size: cover
  width: 100%
  min-height: 1145px
  @media screen and (max-width: 1140px)
    background-position: bottom
    min-height: 900px
  @media screen and (max-width: 767px)
    min-height: 100%
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
      h1
        margin-bottom: 38px
      p
        margin-bottom: 40px
</style>
