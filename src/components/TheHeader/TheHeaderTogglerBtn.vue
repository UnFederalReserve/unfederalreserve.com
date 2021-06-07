<template lang="pug">
  button.navbar-toggler.TheHeaderTogglerBtn.header-toggler(
    :class="{ is_open: value }",
  )
    span
    slot
</template>

<script>

export default {
  name: 'TheHeaderTogglerBtn',
  props: {
    value: Boolean,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'

.header
  .fixed
    .navbar-toggler
      top: 26px
      span
        background: #042751
        &:before,
        &:after
          background: #042751

.navbar-toggler
  position: absolute
  right: 15px
  top: 22px
  width: 32px
  height: 22px
  outline: none
  transition: 0.3s
  z-index: 2
  @media screen and (min-width: 992px)
    display: none
  span
    transition: 0.3s
    display: block
    position: absolute
    top: 50%
    transform: translate3d(0, -50%, 0)
    left: 0px
    right: 0px
    height: 3px
    border-radius: 6px
    background: #fff
    &:before,
    &:after
      position: absolute
      display: block
      left: 0
      width: 100%
      height: 3px
      border-radius: 6px
      background-color: #fff
      content: ""
    &:before
      top: -9px
      transition: 0.3s
      transform: rotate(0deg)
    &:after
      bottom: -9px
      transition: 0.3s
      transform: rotate(0deg)

.navbar-toggler.is_open
  span
    background: none!important
    transition: background 0s 0.1s
    &:before,
    &:after
      background-color: #748DE3!important
    &:before
      top: 0
      transform: rotate(45deg)
      transition: top 0.3s ease-out, transform 0.3s ease 0.5s
    &:after
      bottom: 0
      transform: rotate(-45deg)
      transition: bottom 0.3s ease-out, transform 0.3s ease 0.5s
</style>
