<template lang="pug">
  .PageProduct.page-product
    section.s-top
      .s-container
        .s-top__left
          h1.top-main-title Reserve Lending®
          p Reserve Lending® is one of the leading protocols for lending and borrowing in the DeFi space. As an asset-liability DeFi lending tool and fork of Compound® protocol, Reserve Lending® stands out as one of the markets top secure algorithmic money market protocols.
          .s-top__info Click the button below to access the Reserve Lending® platform and manage your account.
          a.btn-rounded.btn-with-arrow.btn-white Get Started
            BaseImage.arrow-right(
              :src="require('images/arrow-right.svg')",
              alt="arrow-right",
            )
        .s-top__right
          BaseImage.rl-img(
            :src="require('images/rl-img.png')",
            alt="Reserve Lending",
          )
    LendingCardSection
    LendingReasonSection
    LendingInfoSection
    LendingFaqSection
    LendingNewsSection
    LendingAboutSection
    LendingLeadershipSection

</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
import LendingCardSection from 'Components/LendingCardSection/LendingCardSection';
import LendingReasonSection from 'Components/LendingReasonSection/LendingReasonSection';
import LendingInfoSection from 'Components/LendingInfoSection/LendingInfoSection';
import LendingFaqSection from 'Components/LendingFaqSection/LendingFaqSection';
import LendingNewsSection from 'Components/LendingNewsSection/LendingNewsSection';
import LendingAboutSection from 'Components/LendingAboutSection/LendingAboutSection';
import LendingLeadershipSection from 'Components/LendingLeadershipSection/LendingLeadershipSection';
export default {
  name: 'PageProduct',
  components: {
    BaseImage,
    LendingCardSection,
    LendingReasonSection,
    LendingInfoSection,
    LendingFaqSection,
    LendingNewsSection,
    LendingAboutSection,
    LendingLeadershipSection
  }
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'

.page-product
  background: linear-gradient(180deg, #3357CF 1.17%, #3357CF 1.17%, #3357CF 10.58%, #010450 43.43%)
  height: calc(100% + 200px)
  color: #fff

.s-top
  padding: 146px 0 135px
  @media screen and (max-width: 1199px)
    padding: 126px 0 50px
  @media screen and (max-width: 991px)
    padding: 132px 0 102px
  &__info
    font-weight: 600
    font-size: 18px
    line-height: 170%
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 32px
    @media screen and (max-width: 767px)
      margin-bottom: 38px
  &__right
    @media screen and (max-width: 991px)
      display: none
  &__left
    flex: 0 0 520px
    margin-right: 50px
    @media screen and (max-width: 991px)
      margin-right: 0
      flex: 1
    @media screen and (max-width: 767px)
      padding-left: 9px
    p
      font-size: 16px
      line-height: 170%
      margin-bottom: 24px
      letter-spacing: 0.01em
      color: #FFFFFF
  .s-container
    display: flex
    align-items: center
    justify-content: space-between

.top-main-title
  font-weight: bold
  font-size: 56px
  line-height: 130%
  letter-spacing: 0.01em
  color: #FFFFFF
  margin-bottom: 36px
  @media screen and (max-width: 767px)
    margin-bottom: 24px

</style>
