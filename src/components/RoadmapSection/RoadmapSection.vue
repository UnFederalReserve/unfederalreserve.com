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
          li Qualified CeFI entities borrow up to 50% of their staked capital and can lend as much as they'd like
    .roadmap-row
      .roadmap-item
        h4 Q2 2021
        ul
          li Reserve Lending® Alpha testing and product launch? with single-side staking and Chainlink® price oracle integration
          li Voting on Tier 1 exchange listing and key relationships
          li Develop Treasurer’s Toolkit (KYC-Chain integration, ALDash and members only USD Stablecoin Marker/Taker protocols)
    .roadmap-row
      .roadmap-item
        h4 Q3 2021
        ul
          li MVP with Partner non-bank lenders
          li Voting on CeFI size participants size limits, if needed
          li Apply for multi-jurisdictional regularity licenses to open cross-border opportunities
          li Launch Lightning product (low rate, unsecured credit) as safe harbor for commercial lending
    .roadmap-row
      .roadmap-item
        h4 Q4 2021
        ul
          li Fully decentralized platform providing capital to lenders in need, and providing returns for folks with excess capital
          li Asset class discussion on break out of more discrete, lender asset-types to refine pricing
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
  height: 1700px
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
      justify-content: flex-end
      .roadmap-item
        margin-right: 20px
        margin-top: 20px
        @media screen and (max-width: 767px)
          margin-right: 0
    &:nth-child(6)
      .roadmap-item
        margin-left: 50px
        margin-top: 0px
        @media screen and (max-width: 767px)
          margin-left: 0
</style>
