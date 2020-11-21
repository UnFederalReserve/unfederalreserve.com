<template lang="pug">
.LimitedLiquitySection
  section.limited-liquity.limited-liquity-today
    .wrap
      BaseImage.polygons(
        :src="require('images/polygons.svg')",
        alt="polygons",
        force,
      )
      .illustration-wrap
        BaseImage.illustration(
          :src="require('images/bank-1.svg')",
          alt="illustration-2",
          force,
        )
        BaseImage.close(
          :src="require('images/close.svg')",
          alt="close",
          force,
        )
      .limited-liquity__text
        h2 Limited Liquity Today
        p Payment latency or acceleration is a double-edged sword for middle-market B2B
          |  lenders.  Excess cash sits fallow, and cash deficits force emergency draws
          |  on lines of credit whose terms assume borrowing for weeks, not hours.
  section.limited-liquity.limited-liquity-great
    .wrap
      .limited-liquity__text
        h2 Limited Liquity Today
        p Payment latency or acceleration is a double-edged sword for middle-market B2B
          |  lenders.  Excess cash sits fallow, and cash deficits force emergency draws
          |  on lines of credit whose terms assume borrowing for weeks, not hours.
      BaseImage.polygons(
        :src="require('images/polygons-2.svg')",
        alt="polygons",
        force,
      )
      .illustration-wrap
        BaseImage.illustration(
          :src="require('images/bank-2.svg')",
          alt="illustration-2",
          force,
        )
        BaseImage.tick(
          :src="require('images/tick.svg')",
          alt="tick",
          force,
        )
</template>

<script>
import BaseImage from 'Components/Base//BaseImage';

export default {
  name: 'LimitedLiquitySection',
  components: {
    BaseImage,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
section
  width: 100%
  position: relative
  .wrap
    max-width: 1140px
    padding: 0 15px
    margin: 0 auto
    display: flex
    flex-direction: row
    @media screen and (max-width: 767px)
      flex-direction: column
      flex-wrap: wrap
      align-items: center
    .illustration-wrap
      width: 100%
      max-width: 750px
      flex-shrink: 0
      margin-right: 30px
      position: relative
      @media screen and (max-width: 1140px)
        max-width: 50%
        img
          width: 100%
      @media screen and (max-width: 767px)
        margin-right: 0
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
      max-width: 388px
      margin-top: 100px
      @media screen and (max-width: 1140px)
        margin-top: 0
      @media screen and (max-width: 767px)
        order: -1
        max-width: 100%
    .close
      position: absolute
      right: -145px
      width: 400px
      bottom: 0
      @media screen and (max-width: 1140px)
        width: 200px !important
        left: 38%
        right: auto
      @media screen and (max-width: 767px)
        width: 150px !important
        right: auto
        left: 38%
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
      margin-top: 0
    .illustration-wrap
      margin-right: 0
      max-width: 670px
      @media screen and (max-width: 1140px)
        max-width: 50%
        img
          width: 100%
      @media screen and (max-width: 767px)
        margin-right: 0
        img
          width: 100%
    .limited-liquity__text
      width: 100%
      max-width: 388px
      margin-top: 130px
      @media screen and (max-width: 1140px)
        margin-top: 0
      @media screen and (max-width: 767px)
        max-width: 100%
    .tick
      position: absolute
      left: -100px
      width: 400px
      bottom: -20px
      @media screen and (max-width: 1140px)
        width: 200px !important
        left: auto
        right: 55%
      @media screen and (max-width: 767px)
        width: 150px !important
        right: auto
        left: 0%
        bottom: 0px
    .polygons
      position: absolute
      right: -15%
      top: -50%
      width: 1200px
      height: 1200px
      @media screen and (max-width: 1140px)
        display: none
</style>
