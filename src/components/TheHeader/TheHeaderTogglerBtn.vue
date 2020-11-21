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
.navbar-toggler
  position: absolute
  right: 15px
  top: 23px
  width: 20px
  height: 20px
  outline: none
  z-index: 2
  @media screen and (min-width: 992px)
    display: none
  span
    transition: background 0s 0.2s
    display: block
    position: absolute
    top: 50%
    transform: translate3d(0, -50%, 0)
    left: 0px
    right: 0px
    height: 3px
    border-radius: 2px
    background: $secondary
    &:before,
    &:after
      position: absolute
      display: block
      left: 0
      width: 100%
      height: 3px
      border-radius: 2px
      background-color: $secondary
      content: ""
    &:before
      top: -7px
      transition: transform 0.3s ease-out, top 0.3s ease 0.2s
      transform: rotate(0deg)
    &:after
      bottom: -7px
      transition: transform 0.3s ease-out, bottom 0.3s ease 0.2s
      transform: rotate(0deg)

.navbar-toggler.is_open
  span
    background: none
    transition: background 0s 0.1s
    &:before,
    &:after
      background-color: $periwinkle
    &:before
      top: 0
      transform: rotate(45deg)
      transition: top 0.3s ease-out, transform 0.3s ease 0.5s
    &:after
      bottom: 0
      transform: rotate(-45deg)
      transition: bottom 0.3s ease-out, transform 0.3s ease 0.5s
</style>
