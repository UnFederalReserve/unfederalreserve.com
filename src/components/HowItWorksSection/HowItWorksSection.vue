<template lang="pug">
  section.HowItWorksSection.how-it-works
    h2 How it works
    .how-it-works-items
      HowItWorksSectionItem(
        v-for="(item, i) in items"
        :key="i"
        v-bind="item"
      )
</template>

<script>
import HowItWorksSectionItem from './HowItWorksSectionItem';

export default {
  name: 'HowItWorksSection',
  components: {
    HowItWorksSectionItem,
  },
  props: {
    items: Array,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.how-it-works
  width: 100%
  margin: 0 auto
  max-width: 1140px
  padding-left: 15px
  padding-right: 15px
  margin-top: -50px
  @media screen and (max-width: 767px)
    margin-top: 100px
  &-items
    margin: 0 -15px
    margin-top: 90px
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
    @media screen and (max-width: 1140px)
      justify-content: center
      margin-top: 20px
h2
  color: $white
  @media screen and (max-width: 1170px)
    text-align: center
</style>
