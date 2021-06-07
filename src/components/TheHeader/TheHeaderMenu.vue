<template lang="pug">
  .TheHeaderMenu.menu
    slot(name="additionalItem")
    router-link(
      v-for="(item, i) in menu",
      :key="i",
      :to="{name: item.path, hash: item.hash}"
    ) {{ item.name }}
</template>

<script>

export default {
  name: 'TheHeaderMenu',
  props: {
    menu: Array,
  },
};
</script>
<style lang="sass" scoped>
@import '~Styles/_variables'
.menu
  width: 100%
  max-width: 687px
  display: flex
  flex-direction: row
  justify-content: flex-end
  align-items: center
  @media screen and (max-width: 768px)
    display: none
  a
    margin: 0 21px
    color: $menu !important
    font-weight: 600 !important
    letter-spacing: 0.01em
    font-size: 16px!important
    opacity: 1!important
    position: relative
    &::before
      content: ''
      position: absolute
      bottom: -7px
      left: 0
      width: 27px
      height: 3px
      background: #FFFFFF
      border-radius: 6px
      opacity: 0
      transition: 0.3s
    @media screen and (max-width: 991px)
      margin: 0 5px
    &:hover
      color: #FFFFFF !important
      &::before
        opacity: 1
    &:last-child
      margin-right: 0
    &:first-child
      margin-left: 0
.general-wrap
  &.fixed
    .menu
      a
        &:hover
          color: #3357CF!important
          &::before
            background: #3357CF!important
</style>
