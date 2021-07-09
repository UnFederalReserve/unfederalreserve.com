<template lang="pug">
  LendingAboutSection
</template>

<script>
import LendingAboutSection from 'Components/LendingAboutSection/LendingAboutSection';
export default {
  name: 'MoreAboutUsSection',
  components: {
    LendingAboutSection
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'

.s-about
  &::before
    content: ""
    position: absolute
    top: -1332px
    right: -95px
    height: 2770px
    width: 100%
    max-width: 1972px
    background: url("~images/figure-1.svg") no-repeat center
    background-size: cover
</style>
