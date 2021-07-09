<template lang="pug">
  section.RoadmapSection.roadmap
    h2 Roadmap
      span *
    .timeline-wrap
      ul.timeline
        li.timeline-left
          .timeline-badge 
            span.text Q4 2020
            span.border
          .timeline-body
            ul.timeline-lists
              li.timeline-list-item Token design based on real-life Treasury functions completed
              li.timeline-list-item Adoption of eRSDL by test members
              li.timeline-list-item Staking begins to seed reserve
        li.timeline-right
          .timeline-badge 
            span.text Q1 2021
            span.border
          .timeline-body
            ul.timeline-lists
              li.timeline-list-item Voting on additional entrants and required staking levels to borrow from the community
              li.timeline-list-item Outreach to additional Lenders to add eRSDL as a liquidity source
              li.timeline-list-item Qualified CeFI entities borrow up to 50% of their staked capital and can lend as much as they'd like
        li.timeline-left
          .timeline-badge 
            span.text Q2 2021
            span.border
          .timeline-body
            ul.timeline-lists
              li.timeline-list-item ReserveLending® Alpha testing and product launch, with single-side staking
              li.timeline-list-item Voting on Tier 1 exchange listing and key relationships
              li.timeline-list-item Tier 1 Exchange Listing
              li.timeline-list-item Complete organizational chart
              li.timeline-list-item Gather business requirements for ReserveFunding
              li.timeline-list-item Chainlink® price oracle integration for all non eRSDL tokens
        li.timeline-right
          .timeline-badge 
            span.text Q3 2021
            span.border
          .timeline-body
            ul.timeline-lists
              li.timeline-list-item MVP with Partner non-bank lenders
              li.timeline-list-item Apply for multi-jurisdictional regulatory licenses
              li.timeline-list-item Use DeFI platform to fund CeFI entities
              li.timeline-list-item Creation of a KYC/AML only fork of ReserveLending® (new ReserveFunding product) with perks for volunteering to get KYC'd
              li.timeline-list-item Implement strategies for putting excess supply to work in DeFi and a never been done CeFi (USA regulatory compliant) yield strategy
              li.timeline-list-item Manually process cash flows and replace them with pipes
              li.timeline-list-item Start repurchasing eRSDL as ReserveFunding non-bank lenders start shadow licensing our platform to access liquidity
              li.timeline-list-item Be in Top 10 TVL consisting mostly of stablecoin ($100mn)
        li.timeline-left
          .timeline-badge 
            span.text Q4 2021
            span.border
          .timeline-body
            ul.timeline-lists
              li.timeline-list-item Asset class discussion on break out of more discrete lender asset-types to refine pricing
              li.timeline-list-item Secure insurance for a banking product
              li.timeline-list-item Launch ReserveFunding (Lightning® and Thunder®)
              li.timeline-list-item Platform integration with Treasury tool provider
              li.timeline-list-item ReserveFunding 80% automated volume at $200mn daily
              li.timeline-list-item Goal: purchase eRSDL out of the market at a rate equivalent to a reasonable licensing fee for the software
              li.timeline-list-item Combination CeFI and DeFI funding CeFI
              li.timeline-list-item Institute sponsor-bank model for expanding user base
        li.timeline-right
          .timeline-badge 
            span.text Q1 2022
            span.border
          .timeline-body
            ul.timeline-lists
              li.timeline-list-item Launch ReserveB2B
              li.timeline-list-item Fully decentralized platform providing capital to lenders in need and providing returns for folks with excess capital
              li.timeline-list-item Add additional Tier 1 exchanges
    .footnote
      span *
      p The information provided is subject to change, contains forward-looking statements, and is subject to many risks. No guarantee of performance is intended or implied.
    //- .roadmap-row
    //-   .roadmap-item
    //-     h4 Q4 2020
    //-     ul
    //-       li Token design based on real-life Treasury functions completed
    //-       li Adoption of eRSDL by test members
    //-       li Staking begins to seed reserve
    //- .roadmap-row
    //-   .roadmap-item
    //-     h4 Q1 2021
    //-     ul
    //-       li Voting on additional entrants and required staking levels to borrow from the community
    //-       li Outreach to additional Lenders to add eRSDL as a liquidity source
    //- .roadmap-row
    //-   .roadmap-item
    //-     h4 Q2 2021
    //-     ul
    //-       li ReserveLending® Alpha testing and product launch, with single-side staking
    //-       li Voting on Tier 1 exchange listing and key relationships
    //-       li Tier 1 Exchange Listing
    //-       li Complete organizational chart
    //-       li Gather business requirements for ReserveFunding
    //-       li Chainlink® price oracle integration for all non eRSDL tokens
    //- .roadmap-row
    //-   .roadmap-item
    //-     h4 Q3 2021
    //-     ul
    //-       li MVP with Partner non-bank lenders
    //-       li Apply for multi-jurisdictional regulatory licenses
    //-       li Use DeFI platform to fund CeFI entities
    //-       li Creation of a KYC/AML only fork of ReserveLending® (new ReserveFunding product) with perks for volunteering to get KYC'd
    //-       li Implement strategies for putting excess supply to work in DeFi and a never been done CeFi (USA regulatory compliant) yield strategy
    //-       li Manually process cash flows and replace them with pipes
    //-       li Start repurchasing eRSDL as ReserveFunding non-bank lenders start shadow licensing our platform to access liquidity
    //-       li Be in Top 10 TVL consisting mostly of stablecoin ($100mn)
    //- .roadmap-row
    //-   .roadmap-item
    //-     h4 Q4 2021
    //-     ul
    //-       li Asset class discussion on break out of more discrete lender asset-types to refine pricing
    //-       li Secure insurance for a banking product
    //-       li Launch ReserveFunding (Lightning® and Thunder®)
    //-       li Platform integration with Treasury tool provider
    //-       li ReserveFunding 80% automated volume at $200mn daily
    //-       li Goal: purchase eRSDL out of the market at a rate equivalent to a reasonable licensing fee for the software
    //-       li Combination CeFI and DeFI funding CeFI
    //-       li Institute sponsor-bank model for expanding user base
    //- .roadmap-row
    //-   .roadmap-item
    //-     h4 Q1 2022
    //-     ul
    //-       li Launch ReserveB2B
    //-       li Fully decentralized platform providing capital to lenders in need and providing returns for folks with excess capital
    //-       li Add additional Tier 1 exchanges

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

.timeline
  padding: 0
  margin: 0
  list-style-type: none
  position: relative
  > li
    &:last-child 
      margin-bottom: 46px
    &:nth-child(2)
      margin-top: 160px
      .timeline-list-item
        &::before
          background: linear-gradient(180deg, #5CEFFF 0%, #0A88E3 90.34%)
      .timeline-badge
        top: 172px
        &::before
          border-color: #5CEFFF
        .border
          background: linear-gradient(#5CEFFF 0%, #0A88E3 100%)
    &:nth-child(3)
      .timeline-list-item
        &::before
          background: linear-gradient(179.5deg, #46FFD2 0.43%, #0BB289 99.56%)
      .timeline-badge
        top: 292px
        &::before
          border-color: #46FFD2
        .border
          background: linear-gradient(#46FFD2 0%, #0BB289 100%)
    &:nth-child(4)
      .timeline-list-item
        &::before
          background: linear-gradient(180deg, #FEA9D7 -0.34%, #D90F94 146%)
      .timeline-badge
        top: 284px
        &::before
          border-color: #FEA9D7
        .border
          background: linear-gradient(#FEA9D7 0%, #D90F94 100%)
    &:nth-child(5)
      .timeline-list-item
        &::before
          background: linear-gradient(180deg, #B0A9FE -0.34%, #4F0FD9 146%)
      .timeline-badge
        top: 306px
        &::before
          border-color: #9178F3
        .border
          background: linear-gradient(#B0A9FE 0%, #4F0FD9 100%)
    &:nth-child(6)
      .timeline-list-item
        &::before
          background: linear-gradient(180deg, #FEE6A9 -0.34%, #D9A00F 146%)
      .timeline-badge
        top: 16px
        &::before
          border-color: #EBC35A
        .border
          background: linear-gradient(#FEE6A9 0%, #D9A00F 100%)
  &::after
    content: ""
    display: block
    clear: both
  &::before
    content: ""
    position: absolute
    top: 0
    left: 50%
    margin-left: -2px
    width: 4px
    height: 100%
    background: linear-gradient(180deg, rgba(92, 239, 255, 0) 10.84%, rgba(92, 239, 255, 0.909091) 30.44%, #5CEFFF 30.45%, #0A88E3 52.98%, rgba(92, 239, 255, 0.9091) 57.69%, rgba(255, 255, 255, 0) 93.69%)
    border-radius: 26px

.timeline-wrap
  &::before, 
  &::after
    content: ""
    display: table

.timeline-body
  background: rgba(12, 20, 128, 0.3)
  box-shadow: 0px 4px 25px rgba(5, 35, 95, 0.45)
  border-radius: 26px
  padding: 40px 22px 40px 16px
  
.timeline-left
  float: left
  clear: left
  padding-right: 158px
  .timeline-badge
    right: -84px
    &::before
      left: -73px

.timeline-right
  float: right
  clear: right
  padding-left: 158px
  .timeline-badge
    left: -84px
    &::before
      right: -73px

.timeline-left,
.timeline-right
  width: 50%
  margin-bottom: 80px
  position: relative


.timeline-lists
  padding-left: 0
  list-style-type: none

.timeline-list-item
  font-size: 16px
  margin-bottom: 16px
  line-height: 160%
  letter-spacing: 0.01em
  color: #FFFFFF
  padding-left: 24px
  position: relative
  &::before
    content: ""
    position: absolute
    width: 10px
    height: 10px
    border-radius: 10em
    background: linear-gradient(180deg, #4382FF 0%, #205CD4 100%)
    left: 0
    top: 7px
  &:last-child
    margin-bottom: 0

.timeline-badge
  position: absolute
  margin-bottom: 200px
  top: 80px
  &::before
    content: ""
    position: absolute
    width: 75px
    height: 1px
    border-bottom: 1px dashed #4382FF
    top: 50%
  .text
    width: 169px
    height: 50px
    display: flex
    align-items: center
    justify-content: center
    font-weight: 600
    font-size: 20px
    line-height: 170%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    background: #020651
    box-shadow: 0px 4px 25px rgba(5, 35, 95, 0.45)
    border-radius: 40px
    z-index: 2
    position: relative
  .border
    background: linear-gradient(#4382FF 0%, #205CD4 100%)
    position: absolute
    width: calc(100% + 4px)
    height: calc(100% + 4px)
    border-radius: 40px
    z-index: 1
    top: -2px
    left: -2px
    bottom: 0
    right: 0

.footnote
  font-size: 15px
  line-height: 22px
  color: #737DD0
  font-style: italic
  max-width: 635px
  width: 100%
  display: flex
  @media screen and (max-width: 991px)
    margin-left: 0
    margin-top: 40px
  span
    margin-right: 6px
    color: #fff
.roadmap
  width: 100%
  max-width: 1140px
  padding-left: 15px
  padding-right: 15px
  margin: 0 auto
  margin-top: 225px
  padding-bottom: 190px
  position: relative
  z-index: 1
  @media screen and (max-width: 991px)
    background-image: none
    margin-top: 100px
    height: auto
  h2
    color: $white
    text-align: center
    margin-bottom: 59px
    span
      font-weight: 500
      font-size: 20px
      line-height: 46px
      position: relative
      top: -20px
      @media screen and (max-width: 767px)
        top: -10px
</style>
