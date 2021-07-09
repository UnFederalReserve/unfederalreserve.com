<template lang="pug">
.IslandsSection.islands
  section.island
    .island-item.item-image-right
      .island-item__text
        h2 Warning:
          br
          | Navigating Uncharted
          br 
          | Waters...
        p We understand that the term "DeFi" gives rise to apprehension because 
          | anonymous lenders and borrowers engage in digital trading whose only concern 
          | is to leverage their existing positions in the crypto-verse.
        p unFederalReserve has selected premium elements of the 
          span crypto ecosystem 
          | and wrapped it in a best-in-class regulatory framework that 
          span delivers its middle-market clients a B2B lending
          | , cash reporting, and overnight lending/borrowing utility tool. 
        BaseInfoBox
          h3.info-box__title We offer
          p the security of immutable records, near instantaneous settlement, and 
            | encryption well beyond what the largest global banks currently use.
      .island-item__image
        BaseImage.illustration(
          :src="require('images/illustration-0.svg')",
          alt="illustration-0",
          force,
        )
  section.island.next.two
    .island-item.item-image-left
      .island-item__image
        BaseImage.illustration(
          :src="require('images/illustration-1.svg')",
          alt="illustration-1",
          force,
        )
      .island-item__text
        h2 Open Ocean
        BaseInfoBox
          p Any major DeFi protocol relies on democratized systems so that any borrower 
            | (represented by the boats) can transact with any lender (represented by the ports).
          p The challenge, then, from the perspective of the DeFi community, is the engagement of 
            | sophisticated borrowers (e.g., Treasurers at middle-market companies).
        p Without proper sophistication, individual lenders cannot perform proper risk-based pricing, 
          | and discrepancies in experience can lead to arbitrage that can harm the entire community. 
        p 
          span Metaphorically speaking, the open ocean of DeFi is not a place where 
            | sailboats should approach large container ships.

  section.island.next
    .island-item.item-image-center
      .island-item__text
        h2 unFederalReserve Creates
          br
          | a Safe Harbor
        p Sophisticated borrowers are experts at identifying mispriced opportunities. 
          | Unsophisticated lenders, however, would be at the mercy of seasoned borrowing professionals, 
          | which poses a risk to the lending industry. 
        BaseInfoBox(bottomIcon)
          p The unFederalReserve safe harbor ensures that only qualified,
            | vetted parties have access to safe, legally compliant liquidity.
          p And talk about speed... 
            span short-term lending 
            | and 
            span borrowing transactions 
            | settle almost 
            span instantaneously 
            | on our blockchain-enabled platform.
      .island-item__image-center
        BaseImage(
          :src="require('images/illustration-2.svg')",
          alt="illustration-2",
          force,
        )
</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
import BaseInfoBox from 'Components/Base/BaseInfoBox';

export default {
  name: 'IslandsSection',
  components: {
    BaseImage,
    BaseInfoBox
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.islands
  margin-top: -50px
  position: relative
  z-index: 1
  @media screen and (max-width: 767px)
    margin-top: 50px
.island
  position: relative
  @media screen and (max-width: 767px)
    margin-top: 0
  &.next
    margin-top: -100px
    &.two
      margin-top: -500px
    @media screen and (max-width: 767px)
      margin-top: 50px
  &-item
    display: flex
    flex-direction: row
    align-items: center
    width: 100%
    max-width: 1140px
    padding: 0 15px
    margin: 0 auto
    justify-content: space-between
    &.item-image-center
      display: block
      text-align: center
      .island-item__text
        margin: 0 auto
        max-width: 730px
      .info-box
        margin-left: auto
        margin-right: auto
    &__text
      max-width: 635px
      flex-shrink: 0
      position: relative
      z-index: 1
      @media screen and (max-width: 767px)
        max-width: 100%
      p
        color: $white
        font-weight: 500
        font-size: 16px
        line-height: 200%
        letter-spacing: 0.01em
        margin-bottom: 32px
        &+.info-box
          margin-top: 40px
        span
          color: #F3B328
      h2
        margin-bottom: 24px
        font-weight: 700
        font-size: 42px
        line-height: 140%
        color: $white
        letter-spacing: 0.01em
    &__image
      min-height: 1300px
      @media screen and (max-width: 991px)
        min-height: 800px
      img
        height: 100%
      @media screen and (max-width: 767px)
        display: none
    .illustration
      position: absolute
      right: 0
      top: 0
    &.item-image-right
      .illustration
        right: 0%
        @media screen and (max-width: 1660px)
          right: -300px
        @media screen and (max-width: 1170px)
          right: -17%
        @media screen and (max-width: 1024px)
          right: -20%
        @media screen and (max-width: 991px)
          right: -28%
        @media screen and (max-width: 800px)
          right: -40%
    &.item-image-left
      .illustration
        left: 0%
        @media screen and (max-width: 1660px)
          left: -300px
        @media screen and (max-width: 1170px)
          left: -17%
        @media screen and (max-width: 1024px)
          left: -20%
        @media screen and (max-width: 991px)
          left: -28%
        @media screen and (max-width: 800px)
          left: -40%
</style>
