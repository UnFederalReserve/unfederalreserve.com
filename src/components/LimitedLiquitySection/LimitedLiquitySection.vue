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
    .illustration-wrap
      width: 100%
      max-width: 750px
      flex-shrink: 0
      margin-right: 30px
      position: relative
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
    .close
      position: absolute
      right: -145px
      width: 400px
      bottom: 0
    .polygons
      position: absolute
      left: -15%
      top: -50%
      width: 1200px
      height: 1200px
  &.limited-liquity-great
    margin-top: 150px
    .illustration-wrap
      margin-right: 0
      max-width: 670px
    .limited-liquity__text
      width: 100%
      max-width: 388px
      margin-top: 130px
    .tick
      position: absolute
      left: -100px
      width: 400px
      bottom: -20px
    .polygons
      position: absolute
      right: -15%
      top: -50%
      width: 1200px
      height: 1200px
</style>
