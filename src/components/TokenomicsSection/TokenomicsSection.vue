<template lang="pug">
  section.TokenomicsSection.tokenomics
    //.tokenomics-progress
    //  .tokenomics-progress__row
    //    .label
    //      ArrowDownSmall.svg-icon
    //      span Market Potential
    //    .progress-wrap
    //      .circle(:style="{left: '72%'}")
    //      v-progress-linear(value="85" color="#2BE48D")
    //      .value 4.5
    //  .tokenomics-progress__row
    //    .label
    //      ArrowDownSmall.svg-icon
    //      span Token Mechanics
    //    .progress-wrap
    //      .circle(:style="{left: '64%'}")
    //      v-progress-linear(value="75" color="#2BE48D")
    //      .value 3.5
    //  .tokenomics-progress__row
    //    .label
    //      ArrowDownSmall.svg-icon
    //      span Competitive Advantage
    //    .progress-wrap
    //      .circle(:style="{left: '64%'}")
    //      v-progress-linear(value="75" color="#2BE48D")
    //      .value 3.5
    //  .tokenomics-progress__row
    //    .label
    //      ArrowDownSmall.svg-icon
    //      span User Adoption
    //    .progress-wrap
    //      .circle(:style="{left: '72%'}")
    //      v-progress-linear(value="85" color="#2BE48D")
    //      .value 4.5
    //  .tokenomics-progress__row
    //    .label
    //      ArrowDownSmall.svg-icon
    //      span Management Team
    //    .progress-wrap
    //      .circle(:style="{left: '68%'}")
    //      v-progress-linear(value="80" color="#2BE48D")
    //      .value 4.0
    //  .tokenomics-progress__bottom
    //    p Here we leverage Jeffery Timmons’, “Timmons Model of Entrepreneurship”
    //    .progress-wrap
    //      // ProgressCircle
    //      BaseImage.progress-circle(
    //        :src="require('images/progress-circle.svg')",
    //        alt="progress",
    //        force,
    //      )
    //      .text Overall Score
    //      .number 4.0
    .tokenomics-text
      h2 Whitepaper & LitePaper
      p We know it can be difficult to read, retain and process multiple sources of information;
        |  especially when that information may not be publicly available through our corporate
        |  work papers, social media handles, or websites. Market participants expect to understand
        |  the uses, rights, privileges (if applicable), and other possible factors that might impact
        |  the price of the token over time.
        |  Our
        a.link-1(
          :href="require('docs/LitePaperRSDL.pdf')",
          target="_blank",
        ) &nbsp;litepaper&nbsp;
        |  and
        a.link-1(
          :href="require('docs/Residual_Token_Whitepaper_091520_CONFIDE.pdf')",
          target="_blank",
        ) &nbsp;whitepaper&nbsp;
        | , are available for review below, and please feel free to reach out with additional
        | questions or concerns you may have.&nbsp;
        router-link.link-1(:to="{name: 'home', hash: '#get-in-touch'}") let us know
        | .
        ul.btn-container
          li
            a.v-btn(
              :href="require('docs/Residual_Token_Whitepaper_091520_CONFIDE.pdf')",
              target="_blank",
            ) Whitepaper
          li
            a.v-btn(
              :href="require('docs/LitePaperRSDL.pdf')",
              target="_blank",
            ) Litepaper
</template>

<script>
import ArrowDownSmall from 'images/svg-icons/arrow-down-small.svg';
import ProgressCircle from 'images/svg-icons/progress-circle.svg';
import BaseImage from 'Components/Base//BaseImage';

import {
  VProgressLinear,
} from 'vuetify/lib';

export default {
  name: 'TokenomicsSection',
  components: {
    ArrowDownSmall,
    VProgressLinear,
    ProgressCircle,
    BaseImage,
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
  justify-content: flex-end
  @media screen and (max-width: 991px)
    flex-wrap: wrap
    justify-content: center
  @media screen and (max-width: 767px)
    margin-top: 50px
  &-progress
    display: flex
    flex-direction: column
    width: 100%
    max-width: 522px
    padding: 40px
    background: rgba(255, 255, 255, 0.03)
    border-radius: 10px
    position: relative
    margin-right: 30px
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
        font-size: 13px
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
      margin-top: 20px
      .progress-wrap
        width: 175px
        position: absolute
        right: 40px
        bottom: -100px
        @media screen and (max-width: 640px)
          position: relative
          bottom: 0
          right: auto
          left: 25%
        img
          width: 175px
          height: 175px
        .text
          font-size: 10px
          opacity: 0.8
          +font(500)
          color: $white
          position: absolute
          left: 50%
          transform: translate(-50%, -50%)
          top: 38%
        .number
          +font(700)
          font-size: 37px
          color: $white
          position: absolute
          left: 50%
          transform: translate(-50%, -50%)
          top: 55%
      p
        color: $white
        width: 100%
        max-width: 260px
        opacity: 0.8
        font-size: 13px
  &-text
    width: 100%
    max-width: 545px
    ul.btn-container
      list-style-type: none
      display: flex
      padding-left: 0
      padding-top: 20px
      flex-wrap: wrap
      li
        margin-right: 15px
        a.v-btn
          min-width: auto
          padding: 10px 20px
          border-radius: 13px
    @media screen and (max-width: 991px)
      margin-top: 150px
      max-width: 100%
    *
      color: $white
    p
      margin-top: 25px
      opacity: 0.8
</style>
