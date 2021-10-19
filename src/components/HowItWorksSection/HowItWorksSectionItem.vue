<template lang="pug">
  .HowItWorksSectionItem.item
    .item-number 
      span {{ number }}
    .item-text
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
  width: calc(50% - 12px)
  margin-bottom: 50px
  display: flex
  align-items: flex-start
  @media screen and (max-width: 767px)
    width: 100%
    margin-bottom: 24px
  &-number
    background: #FFFFFF
    box-shadow: 0px 4px 25px rgba(5, 35, 95, 0.45)
    border-radius: 26px
    margin-bottom: 35px
    display: flex
    align-items: center
    width: 100px
    height: 100px
    min-width: 100px
    justify-content: center
    margin-right: 32px
    @media screen and (max-width: 767px)
      width: 80px
      height: 80px
      min-width: 80px
    span
      font-weight: 600
      font-size: 60px
      line-height: 110%
      letter-spacing: 0.01em
      color: #4382FF
      -webkit-text-stroke: 2px rgba(0, 0, 0, 0.05)
      background: -webkit-linear-gradient(180deg, #4382FF 0%, #2450DB 100%, #0433BF 100%)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      @media screen and (max-width: 767px)
        font-size: 48px
  p
    color: $white
    font-size: 16px
    line-height: 170%
    letter-spacing: 0.01em

  h4
    margin-bottom: 15px
    font-weight: 600
    font-size: 22px
    margin-bottom: 10px
    line-height: 170%
    letter-spacing: 0.01em
    color: $white

</style>
