<template lang="pug">
  .OurLeadersSection.our-leaders
    h2.s-title Leadership
    .our-leaders__team
      LeadershipItem(
        v-for="(item, i) in team"
        :key="i"
        v-bind="item"
      )
    .leadership-more
      router-link.btn-rounded.btn-tsp.btn-default(:to="{name: 'team'}") Show more
</template>

<script>
import LeadershipItem from 'Components/LendingLeadershipSection/LeadershipItem';

export default {
  name: 'OurLeadersSection',
  components: {
    LeadershipItem
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
  max-width: 1140px
  padding: 0 15px
  margin: 0 auto
  margin-top: 190px
  margin-bottom: 122px
  position: relative
  z-index: 1
  @media screen and (max-width: 991px)
    margin-top: 25px
    margin-bottom: 100px
  .s-title
    margin-bottom: 83px
    @media screen and (max-width: 767px)
      font-size: 32px
  &__team
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    max-width: 950px
    width: 100%
    margin: 0 auto
    @media screen and (max-width: 991px)
      flex-direction: column

.leadership-more
  text-align: center

</style>
