<template lang="pug">
  .HowItWorksSectionItem.item
    .item-number {{ number }}
    h4 {{ title }}
    p(v-html="text")
</template>

<script>

export default {
  name: 'HowItWorksSectionItem',
  props: {
    number: [Number, String],
    title: String,
    text: String,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.item
  width: 100%
  max-width: 340px
  margin: 15px
  margin-bottom: 50px
  @media screen and (max-width: 767px)
    max-width: 100%
    margin-bottom: 25px
  &-number
    +font(600)
    font-size: 75px
    line-height: 82px
    background: -webkit-linear-gradient(#7DA9FF, #C5D3FF)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    margin-bottom: 35px
  h4,
  p
    color: $white
  h4
    margin-bottom: 15px
</style>
