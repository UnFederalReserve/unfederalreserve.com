<template lang="pug">
.IslandsSection.islands
  section.island
    .island-item.item-image-right
      .island-item__text
        h2 Warning:
          br
          | Navigating Uncharted Waters...
        p We understand that the term "DeFi" gives rise to apprehension because anonymous
          |  lenders and borrowers engage in digital trading whose only concern is to
          |  leverage their existing positions in the crypto-verse.
        p unFederalReserve has selected premium elements of the crypto ecosystem
          |  and wrapped it in a best-in-class regulatory framework that delivers its
          |  middle-market clients a B2B lending, cash reporting, and overnight
          |  lending/borrowing utility tool. We offer the security of immutable records,
          |  near instantaneous settlement, and encryption well beyond what the
          |  largest global banks currently use.
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
        p Any major DeFi protocol relies on democratized systems so that any borrower
          |  (represented by the boats) can transact with any lender (represented by
          |  the ports). The challenge, then, from the perspective of the DeFi
          |  community, is the engagement of sophisticated borrowers (e.g.,
          |  Treasurers at middle-market companies). Without proper sophistication,
          |  individual lenders cannot perform proper risk-based pricing, and
          |  discrepancies in experience can lead to arbitrage that can harm the
          |  entire community. Metaphorically speaking, the open ocean of DeFi is
          |  not a place where sailboats should approach large container ships.
  section.island.next
    .island-item.item-image-right
      .island-item__text
        h2 unFederalReserve Creates
          br
          | a Safe Harbor
        p Sophisticated borrowers are experts at identifying mispriced opportunities.
          |  Unsophisticated lenders, however, would be at the mercy of seasoned
          |  borrowing professionals, which poses a risk to the lending industry.
          |  The unFederalReserve safe harbor ensures that only qualified, vetted
          |  parties have access to safe, legally compliant liquidity. And talk
          |  about speed... short-term lending and borrowing transactions settle
          |  almost instantaneously on our blockchain-enabled platform.
      .island-item__image
        BaseImage.illustration(
          :src="require('images/illustration-2.svg')",
          alt="illustration-2",
          force,
        )
</template>

<script>
import BaseImage from 'Components/Base//BaseImage';

export default {
  name: 'IslandsSection',
  components: {
    BaseImage,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.islands
  margin-top: -50px
  @media screen and (max-width: 767px)
    margin-top: 50px
.island
  position: relative
  @media screen and (max-width: 767px)
    margin-top: 0
  &.next
    margin-top: -100px
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
    &__text
      max-width: 445px
      flex-shrink: 0
      @media screen and (max-width: 767px)
        max-width: 100%
      *
        color: $white
      h2
        margin-bottom: 30px
    &__image
      min-height: 987px
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
        @media screen and (max-width: 1170px)
          left: -17%
        @media screen and (max-width: 1024px)
          left: -20%
        @media screen and (max-width: 991px)
          left: -28%
        @media screen and (max-width: 800px)
          left: -40%
</style>
