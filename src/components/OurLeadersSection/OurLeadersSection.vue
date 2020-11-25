<template lang="pug">
  .OurLeadersSection.our-leaders
    .our-leaders__team
      TeamThumbnail(
        v-for="(item, i) in team"
        :key="i"
        v-bind="item",
        @click.native="onClick(i)"
        :active="activeIndex === i"
      )
    .our-leaders__text(v-if="activeIndex === 0")
      h2 Our leaders
      p Howard is a Managing Director in CBIZ Valuation Group, LLC (“CBIZ”).
        |  He specializes in the valuation of complex financial instruments including
        |  crypto-currency loans,  interest rate swaps, agency and non-agency
        |  mortgage-backed securities (MBS), and collateralized debt obligations (CDOs).
      p He is a former Big-4 Senior Manager responsible for a variety of assignments
        |  including: intangible business valuation, intellectual property valuation,
        |  financial modeling, valuation of equity participating instruments and other
        |  exotic financial assets/liabilities with almost 20 years’ experience. Howard
        |  has an MBA from Rutgers Business School with a concentration in Quantitative Finance
      router-link(:to="{name: 'team'}").bubble-link
        .bubble
        span Show more
    .our-leaders__text(v-if="activeIndex === 1")
      h2 Our leaders
      p Ryan Medlin is a seasoned Silicon Valley entrepreneurand technologist.
      p His most recent exit was the sale of his proximity tracking and measurement
        |  company Datasnap.io in 2015 to Neustar where he then led a team of engineers
        |  to build out Neustar's IoT Identity  initiatives. This included a product for
        |  IoT which was an improvement over normal PKI providing cryptography based policy
        |  enforcement and Identity Management in a highly decentralized architecture.
      p As part of this responsibility for the past 2 years,  many Blockchain and DLT based
        |  prototypes and concepts were given a lot of resources for prototype assessments.
        |  Platforms and protocols included: IoTA, Ethereum, Hyperledger, Rootstock, Lisk,
        |  NEO and many lower level protocols including things such as Telehash and Cothority.
      router-link(:to="{name: 'team'}").bubble-link
        .bubble
        span Show more
</template>

<script>
import TeamThumbnail from 'Components/TeamThumbnail/TeamThumbnail';

export default {
  name: 'OurLeadersSection',
  components: {
    TeamThumbnail,
  },
  props: {
    team: Array,
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    onClick(i) {
      this.activeIndex = i;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.our-leaders
  width: 100%
  max-width: 1110px
  padding: 0 15px
  margin: 0 auto
  margin-top: 130px
  display: flex
  flex-direction: row
  justify-content: space-between
  @media screen and (max-width: 767px)
    margin-top: 100px
    flex-wrap: wrap
    flex-direction: column
    justify-content: center
    align-items: center
  &__team
    margin-left: 80px
    flex-shrink: 0
    @media screen and (max-width: 1170px)
      margin-left: 0
    @media screen and (max-width: 767px)
      margin-left: 0
    ::v-deep .thumbnail
      margin-bottom: 90px
  &__text
    width: 100%
    max-width: 530px
    margin-left: 30px
    @media screen and (max-width: 1170px)
      max-width: 100%
    @media screen and (max-width: 767px)
      margin-left: 0
    *
      color: $white
    h2
      margin-bottom: 28px
    p
      opacity: 0.8
</style>
