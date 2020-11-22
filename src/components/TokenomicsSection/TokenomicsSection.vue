<template lang="pug">
  section.TokenomicsSection.tokenomics
    .tokenomics-progress
      .tokenomics-progress__row
        .label
          ArrowDownSmall.svg-icon
          span Market Potential
        .progress-wrap
          .circle(:style="{left: '72%'}")
          v-progress-linear(value="85" color="#2BE48D")
          .value 4.5
      .tokenomics-progress__row
        .label
          ArrowDownSmall.svg-icon
          span Token Mechanics
        .progress-wrap
          .circle(:style="{left: '64%'}")
          v-progress-linear(value="75" color="#2BE48D")
          .value 3.5
      .tokenomics-progress__row
        .label
          ArrowDownSmall.svg-icon
          span Competitive Advantage
        .progress-wrap
          .circle(:style="{left: '64%'}")
          v-progress-linear(value="75" color="#2BE48D")
          .value 3.5
      .tokenomics-progress__row
        .label
          ArrowDownSmall.svg-icon
          span User Adoption
        .progress-wrap
          .circle(:style="{left: '72%'}")
          v-progress-linear(value="85" color="#2BE48D")
          .value 4.5
      .tokenomics-progress__row
        .label
          ArrowDownSmall.svg-icon
          span Management Team
        .progress-wrap
          .circle(:style="{left: '68%'}")
          v-progress-linear(value="80" color="#2BE48D")
          .value 4.0
      .tokenomics-progress__bottom
        p Here we leverage Jeffery Timmons’, “Timmons Model of Entrepreneurship”
        .progress-wrap
          ProgressCircle
          .text Overall Score
          .number 4.0
    .tokenomics-text
      h2 Tokenomics
      p Access to the cash dashboard and maker/taker environment will be fee-based;
       | specifically, users will have to aggregate a certain amount of eRSDL as a percentage
       | of the total minted amount. This function creates scarcity.  In addition, the volume of loans through
       | the platform will generate a fee, which will in turn be distributed pro rata to eRSDL holders.
       | So, when 4 or 5 middle market lenders are on the platform, if they have collectively $2mn or $3mn
       |  in lending daily and the platfrom collects a basis point (0.01%), then the platform would generate
       |  about $1mn annually in fees. If we increase the count and average lending volume, the revenue
       |  increases exponentially.
</template>

<script>
import ArrowDownSmall from 'images/svg-icons/arrow-down-small.svg';
import ProgressCircle from 'images/svg-icons/progress-circle.svg';

import {
  VProgressLinear,
} from 'vuetify/lib';

export default {
  name: 'TokenomicsSection',
  components: {
    ArrowDownSmall,
    VProgressLinear,
    ProgressCircle,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.tokenomics
  width: 100%
  max-width: 1140px
  margin: 0 auto
  margin-top: 200px
  padding: 0 15px
  display: flex
  flex-direction: row
  justify-content: space-between
  @media screen and (max-width: 991px)
    flex-wrap: wrap
    justify-content: center
  @media screen and (max-width: 767px)
    margin-top: 50px
  &-progress
    display: flex
    flex-direction: column
    width: 100%
    max-width: 690px
    padding: 40px
    background: rgba(255, 255, 255, 0.03)
    border-radius: 10px
    position: relative
    &__row
      display: flex
      flex-direction: row
      align-items: center
      justify-content: space-between
      width: 100%
      margin-bottom: 25px
      @media screen and (max-width: 640px)
        flex-direction: column
      .label
        color: $white
        display: flex
        flex-direction: row
        align-items: center
        justify-content: flex-start
        width: 265px
        span
          margin-left: 15px
      .v-progress-linear
        width: 100%
        ::v-deep .v-progress-linear__buffer
          background: $white
          border-radius: 5px
        ::v-deep .v-progress-linear__determinate
          border-radius: 5px
          background: linear-gradient(90deg, #476FEE 0%, #A7BCFF 100%)
      .progress-wrap
        position: relative
        width: 299px
        display: flex
        flex-direction: row
        align-items: center
        .value
          color: $white
          margin-left: 15px
          +font(600)
          font-size: 18px
        .circle
          position: absolute
          width: 21px
          height: 21px
          top: 4px
          left: 10%
          &:before
            content: ''
            position: absolute
            right: 0
            top: 0
            z-index: 2
            left: 0
            top: 0
            width: 21px
            height: 21px
            background-repeat: no-repeat
            background-size: contain
            background-image: url('~images/hover-bubble-btn.svg')
          &:after
            content: ''
            position: absolute
            left: 2px
            top: 2px
            width: calc(100% - 4px)
            height: calc(100% - 4px)
            background: #2140A5
            z-index: 1
            border-radius: 100px
    &__bottom
      margin-top: 30px
      .progress-wrap
        width: 230px
        position: absolute
        right: 40px
        bottom: -108px
        @media screen and (max-width: 640px)
          position: relative
          bottom: 0
          right: auto
          left: 25%
        .text
          font-size: 14px
          opacity: 0.8
          +font(500)
          color: $white
          position: absolute
          left: 50%
          transform: translate(-50%, -50%)
          top: 42%
        .number
          +font(700)
          font-size: 49px
          color: $white
          position: absolute
          left: 50%
          transform: translate(-50%, -50%)
          top: 55%
      p
        color: $white
        width: 100%
        max-width: 356px
        opacity: 0.8
  &-text
    width: 100%
    max-width: 384px
    @media screen and (max-width: 991px)
      margin-top: 150px
      max-width: 100%
    *
      color: $white
    p
      margin-top: 25px
      opacity: 0.8
</style>
