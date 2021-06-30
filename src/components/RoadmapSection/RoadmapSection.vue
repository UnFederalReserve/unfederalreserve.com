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
          li Tier 1 Exchange Listing
          li Complete organizational chart
          li Gather business requirements for ReserveFunding
          li Chainlink® price oracle integration for all non eRSDL tokens.
    .roadmap-row
      .roadmap-item
        h4 Q3 2021
        ul
          li MVP with Partner non-bank lenders
          li Apply for multi-jurisdictional regulatory licenses
          li Use DeFI platform to fund CeFI entities
          li Creation of a KYC/AML only fork of ReserveLending© (new ReserveFunding product) with perks for volunteering to get KYC'd.
          li Implement strategies for putting excess supply to work in DeFi and a never been done CeFi (USA regulatory compliant) yield strategy.
          li Manually process cash flows and replace them with pipes
          li Start repurchasing eRSDL as ReserveFunding non-bank lenders start shadow licensing our platform to access liquidity
    .roadmap-row
      .roadmap-item
        h4 Q4 2021
        ul
          li Asset class discussion on break out of more discrete lender asset-types to refine pricing
          li Secure insurance for a banking product
          li Launch ReserveFunding (Lightning® and Thunder®)
          li Platform integration with Treasury tool provider
          li ReserveFunding 80% automated volume at $200mn daily
          li Goal: Repurchase eRSDL out of the market at 1% (annualized) of total non-bank lender outstanding loan balances for lock, use by parent or burn
          li Combination CeFI and DeFI funding CeFI
    .roadmap-row
      .roadmap-item
        h4 Q1 2022
        ul
          li Launch ReserveB2B
          li Fully decentralized platform providing capital to lenders in need and providing returns for folks with excess capital
          li Add additional Tier 1 exchanges
    .footnote
      span *
      p The Roadmap is subject to change. It is a forward-looking statement and 
        | is subject to many risks and uncertainties. No guarantee of performance 
        | is intended or implied. Know the risks and speak to a financial advisor before making a decision.
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

.footnote
  font-size: 15px
  line-height: 22px
  color: #737DD0
  font-style: italic
  max-width: 635px
  width: 100%
  display: flex
  margin-left: 50px
  margin-top: 100px
  @media screen and (max-width: 991px)
    margin-left: 0
    margin-top: 40px
  span
    margin-right: 6px
    color: #fff
.roadmap
  width: 100%
  max-width: 1010px
  padding-left: 15px
  padding-right: 15px
  height: 3040px
  margin: 0 auto
  margin-top: 200px
  background-image: url('~images/roadmap.svg')
  background-repeat: no-repeat
  background-position: center 100px
  background-size: 100%
  @media screen and (max-width: 991px)
    background-image: none
    margin-top: 100px
    height: auto
  h2
    color: $white
    text-align: center
  &-item
    width: 100%
    max-width: 380px
    li
      margin-bottom: 15px
    @media screen and (max-width: 991px)
      max-width: 100%
    *
      color: $white
    h4
      margin-bottom: 20px
  &-row
    display: flex
    margin-bottom: 50px
    @media screen and (max-width: 991px)
      margin-bottom: 20px
    &:nth-child(2)
      .roadmap-item
        margin-left: 100px
        margin-top: 138px
        @media screen and (max-width: 991px)
          margin-left: 0
          margin-top: 50px
    &:nth-child(3)
      justify-content: flex-end
      .roadmap-item
        margin-right: 50px
        margin-top: 50px
        @media screen and (max-width: 991px)
          margin-right: 0
          margin-top: 0
    &:nth-child(4)
      .roadmap-item
        margin-left: 50px
        margin-top: 30px
        @media screen and (max-width: 991px)
          margin-left: 0
          margin-top: 0
    &:nth-child(5)
      margin-bottom: 0
      justify-content: flex-end
      @media screen and (max-width: 991px)
        margin-bottom: 20px
      .roadmap-item
        margin-right: 20px
        margin-top: -180px
        @media screen and (max-width: 991px)
          margin-right: 0
          margin-top: 0
    &:nth-child(6)
      margin-bottom: 0
      @media screen and (max-width: 991px)
        margin-bottom: 20px
      .roadmap-item
        margin-left: 50px
        margin-top: -15px
        @media screen and (max-width: 991px)
          margin-left: 0
          margin-top: 0
    &:nth-child(7)
      margin-bottom: 0
      justify-content: flex-end
      .roadmap-item
        margin-right: 20px
        margin-top: -70px
        @media screen and (max-width: 991px)
          margin-left: 0
          margin-top: 0
</style>
