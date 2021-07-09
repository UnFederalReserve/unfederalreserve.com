<template lang="pug">
  section.TokenomicsSection.tokenomics
    h2.tokenomics__title Whitepaper & LitePaper
    p.tokenomics__title-descr We know it can be difficult to read, retain and process multiple sources of information; 
      | especially when that information may not be publicly available through our 
      | corporate work papers, social media handles, or websites. 
    .tokenomics-wrap
      p.tokenomics-wrap__top-text Our 
        span litepaper 
        | and 
        span whitepaper
        | , are available for review below, 
        | and please feel free to reach out with additional questions or concerns you may have.
      .tokenomics-items
        .tokenomics-item
          .tokenomics-item__img
            BaseImage(
              :src="require('images/tokenomics-img-1.svg')",
              alt="itokenomics img",
              force,
            )
          .tokenomics-item__btn
            a.btn-rounded.btn-with-arrow.btn-gradient(
              :href="require('docs/Residual_Token_Whitepaper_091520_CONFIDE.pdf')",
              target="_blank",
            ) Whitepaper
              img(:src="require('images/btn-arrow.svg')" alt="arrow")
        .tokenomics-item
          .tokenomics-item__img
            BaseImage(
              :src="require('images/tokenomics-img-2.svg')",
              alt="tokenomics img",
              force,
            )
          .tokenomics-item__btn
            a.btn-rounded.btn-with-arrow.btn-gradient-variant(
              :href="require('docs/LitePaperRSDL.pdf')",
              target="_blank",
            ) Litepaper
              img(:src="require('images/btn-arrow.svg')" alt="arrow")
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
    BaseImage
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.tokenomics
  width: 100%
  max-width: 1140px
  margin: 0 auto
  margin-top: 270px
  padding: 0 15px
  color: #fff
  text-align: center
  position: relative
  &::before
    content: ""
    position: absolute
    background: url("~images/news-circle-bg.svg") no-repeat center
    background-size: cover
    left: 50%
    transform: translateX(-50%)
    right: 0
    top: 35px
    width: 1042px
    height: 1042px
  &__title
    font-weight: 700
    font-size: 42px
    line-height: 130%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 48px
    position: relative
  &__title-descr
    font-weight: 500
    font-size: 18px
    line-height: 160%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    max-width: 730px
    margin: 0 auto 100px
    position: relative
  
.tokenomics-wrap
  max-width: 730px
  width: 100%
  margin: 0 auto
  position: relative
  &__top-text
    font-weight: 500
    font-size: 16px
    line-height: 160%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 60px
    span
      color: #F3B328

.tokenomics-items
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  align-items: flex-start

.tokenomics-item
  width: calc(50% - 50px)
  margin-bottom: 30px
  &__img
    display: flex
    justify-content: center
    align-items: flex-start
  .btn-rounded
    max-width: 180px

</style>
