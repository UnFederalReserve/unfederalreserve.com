<template lang="pug">
.IslandsSection
  section.island
    .island-item.item-image-right
      .island-item__text
        h2 There Be Dragons...
        p The term DeFI brings with it connontations of anonymous lenders and borrowers engaged
          |  in digital-asset backed trades, generally for the purposes of leveraging existing
          |  positions in the crypto-verse.
        p Residual Token, Inc. has selected the best elements
          |  of this ecosystem (e.g. immutable records, near instantaneous settlment and encryption
          |  well beyond what the largest global banks use today), wrapped it in a “best in class”
          |  regulatory framework and delivered to you a middle-market, B2B lender cash reporting
          |  tool and overnight lending / borrowing utility.
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
        p All major DeFI protocols rely on highly democratized systems. Any borrower
          |  (represented by the boats) can transact with any lender (represented by the ports).
        p The challenge from the DeFI community’s perspective engaging sophisticated borrowers
          |  (i.e. the Treasurers at middle-market lenders) is without proper sophistication,
          |  individual lenders cannot properly perform risk-based pricing.  Descrepancies in
          |  experience lead to arbitrage that ultimately harms the lending community.
          |   The open ocean of DeFI is nowhere for small sailboats to cross paths with large
          |  containers ships.
  section.island.next
    .island-item.item-image-right
      .island-item__text
        h2 Safe Harbor
        p The eRSDL token creates a safe harbor where only qualified entrants can make or take
          |  loans. Fundementally, all holders can see activity and aggregated activity data;
          |  However, only with an enterprise user license, can our borrower ships and ports
          |  transact with one another.
        p This is a safe harbor for lenders and borrowers. Simply augment your existing banking
          |  relationship with our platform and get cash flow reporting, increased liquidity
          |  options, and overall reductions in costs of capital without increased risk or
          |  exposure to your balance sheet.
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
.island
  position: relative
  @media screen and (max-width: 767px)
    margin-top: 0
  &.next
    margin-top: -200px
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
      min-height: 1480px
      @media screen and (max-width: 991px)
        min-height: 1000px
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
        right: -8%
        @media screen and (max-width: 1170px)
          right: -28%
        @media screen and (max-width: 800px)
          right: -30%
    &.item-image-left
      .illustration
        left: -8%
        @media screen and (max-width: 1170px)
          left: -28%
        @media screen and (max-width: 800px)
          left: -30%
</style>
