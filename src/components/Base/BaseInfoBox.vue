<template lang="pug">
  .info-box(:class="{'bottom-icon': bottomIcon}")
    slot
</template>

<script>
export default {
  name: 'BaseInfoBox',
  props: {
    bottomIcon: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'

.info-box
  background: #FFFFFF
  box-shadow: 0px 4px 25px rgba(5, 35, 95, 0.45)
  border-radius: 26px
  padding: 40px
  max-width: 635px
  width: 100%
  margin-bottom: 40px
  position: relative
  &::before
    content: ""
    position: absolute
    background: url("~images/earn-icon.svg") no-repeat
    width: 59px
    height: 64px
    left: -30px
    top: 28px
  &.bottom-icon
    &::after
      content: ""
      position: absolute
      background: url("~images/earn-icon.svg") no-repeat
      width: 59px
      height: 64px
      right: -25px
      bottom: 50px
      transform: rotate(180deg)
  &__title
    font-weight: bold
    font-size: 22px
    line-height: 170%
    letter-spacing: 0.01em
    margin-bottom: 10px
    text-transform: uppercase
    color: #021859
  p
    font-weight: 500
    font-size: 18px!important
    line-height: 160%!important
    letter-spacing: 0.01em
    color: #021859!important
    margin-bottom: 24px!important
    &:last-child
      margin-bottom: 0!important
  
</style>