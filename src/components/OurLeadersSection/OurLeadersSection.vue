<template lang="pug">
  .OurLeadersSection.our-leaders
    .our-leaders__team
      TeamThumbnail(
        v-for="(item, i) in team"
        :key="i"
        v-bind="item",
      )
    .our-leaders__text
      h2 Our leaders
      p Howard is a Managing Director in CBIZ Valuation Group, LLC (“CBIZ”).
        |   He specializes in the valuation of complex financial instruments
        |  including crypto-currency loans,  interest rate swaps, agency and
        |  non-agency mortgage-backed securities (MBS), and collateralized debt
        |  obligations (CDOs
      p He is a former Big-4 Senior Manager responsible for a variety of assignments
        |  including: intangible business valuation, intellectual property valuation,
        |  financial modeling, valuation of equity participating instruments and other
        |  exotic financial assets/liabilities with almost 20 years’ experience. Howard
        |  has an MBA from Rutgers Business School with a concentration in Quantitative Finance
      a.bubble-link(href="#")
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
  &__team
    margin-left: 80px
    ::v-deep .thumbnail
      margin-bottom: 90px
  &__text
    width: 100%
    max-width: 530px
    *
      color: $white
    h2
      margin-bottom: 28px
    p
      opacity: 0.8
</style>
