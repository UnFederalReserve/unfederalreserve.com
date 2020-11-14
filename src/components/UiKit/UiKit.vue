<template lang="pug">
  .UiKit
    v-container(grid-list-lg)
      v-layout(row wrap)
        v-flex(lg6 xs12)
          h1 H1 - 45px
          h2 H2 - 35px
          h3 H3 - 24px
          h4 H4 - 20px
          h5 H5 - 17px
          h6 H6 - 14px
        v-flex(lg3 xs12)
          p Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam nibh. Nunc varius facilisis
          p
            i Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam nibh. Nunc varius facilisis
          p
            strong Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam nibh. Nunc varius facilisis
      v-layout(row wrap)
        v-flex(lg12 xs12)
          v-btn(small) small
          v-btn(color="secondary",) default
          v-btn(color="secondary", large) large
      v-layout(row wrap)
        v-flex(lg12 xs12)
          a(href="#") Link
      v-layout(row wrap)
        v-flex(lg12 xs12)
          SocialLinks.social
</template>

<script>
import SocialLinks from 'Components/SocialLinks/SocialLinks';

export default {
  name: 'UiKit',
  components: { SocialLinks },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.squares-wrap
  display: flex
  flex-direction: row
  flex-wrap: wrap
.square
  width: 100px
  height: 100px
  margin: 15px
.social
  width: 100%
  height: 100%
  background: red
  padding: 10px
</style>
