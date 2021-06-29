<template lang="pug">
  section.RoadmapSection.roadmap
    h2 Roadmap
    .roadmap-row
      .roadmap-item
        h4 Q4 2020
        ul
          li Token design based on real-life Treasury functions completed
          li Adoption of eRSDL by test members
          li Staking begins to seed reserve
    .roadmap-row
      .roadmap-item
        h4 Q1 2021
        ul
          li Voting on additional entrants and required staking levels to borrow from the community
          li Outreach to additional Lenders to add eRSDL as a liquidity source
    .roadmap-row
      .roadmap-item
        h4 Q2 2021
        ul
          li ReserveLending® Alpha testing and product launch, with single-side staking
          li Voting on Tier 1 exchange listing and key relationships
    .roadmap-row
      .roadmap-item
        h4 Q3 2021
        ul
          li MVP with Partner non-bank lenders
          li Voting on CeFi participants’ size limits, if needed
          li Apply for multi-jurisdictional regulatory licenses to open cross-border opportunities
          li Launch Lightning product (low rate, unsecured credit) as safe harbor for commercial lending
    .roadmap-row
      .roadmap-item
        h4 Q4 2021
        ul
          li Fully decentralized platform providing capital to lenders in need, and providing returns for folks with excess capital
          li Asset class discussion on break out of more discrete lender asset-types to refine pricing
          li Secure insurance for banking product
          li CMDash product or integration with Treasury tool provider
          li Institute sponsor-bank model for expanding user base
</template>

<script>

export default {
  name: 'RoadmapSection',
  components: {
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.roadmap
  width: 100%
  max-width: 1010px
  padding-left: 15px
  padding-right: 15px
  height: 2000px
  margin: 0 auto
  margin-top: 200px
  background-image: url('~images/roadmap.svg')
  background-repeat: no-repeat
  background-position: center 100px
  background-size: 100%
  @media screen and (max-width: 767px)
    background-image: none
    margin-top: 100px
    height: auto
  h2
    color: $white
    text-align: center
  &-item
    width: 100%
    max-width: 380px
    @media screen and (max-width: 767px)
      max-width: 100%
    *
      color: $white
    h4
      margin-bottom: 20px
  &-row
    display: flex
    margin-bottom: 50px
    @media screen and (max-width: 767px)
      margin-bottom: 20px
    &:nth-child(2)
      .roadmap-item
        margin-left: 100px
        margin-top: 220px
        @media screen and (max-width: 767px)
          margin-left: 0
          margin-top: 50px
    &:nth-child(3)
      justify-content: flex-end
      .roadmap-item
        margin-right: 50px
        margin-top: 0px
        @media screen and (max-width: 767px)
          margin-right: 0
    &:nth-child(4)
      .roadmap-item
        margin-left: 50px
        margin-top: 0px
        @media screen and (max-width: 767px)
          margin-left: 0
    &:nth-child(5)
      margin-bottom: 0
      justify-content: flex-end
      @media screen and (max-width: 767px)
        margin-bottom: 20px
      .roadmap-item
        margin-right: 20px
        margin-top: 20px
        @media screen and (max-width: 767px)
          margin-right: 0
    &:nth-child(6)
      margin-bottom: 0
      .roadmap-item
        margin-left: 50px
        margin-top: 0px
        @media screen and (max-width: 767px)
          margin-left: 0
</style>
