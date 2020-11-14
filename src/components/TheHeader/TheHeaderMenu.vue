<template lang="pug">
  .TheHeaderMenu.menu
    router-link(
      v-for="(item, i) in menu",
      :key="i",
      :to="{name: item.path}"
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
  justify-content: space-between
  align-items: center
  @media screen and (max-width: 768px)
    display: none
  a
    margin: 0 10px
    @media screen and (max-width: 991px)
      margin: 0 5px
    &:last-child
      margin-right: 0
    &:first-child
      margin-left: 0
</style>
