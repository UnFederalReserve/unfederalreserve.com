<template lang="pug">
  .UiKit
    v-container(grid-list-lg)
      v-layout(row wrap)
        v-flex(lg6 xs12)
          h1.big-h1 Hero - 65px
          h1 H1 - 45px
          h2 H2 - 35px
          h3 H3 - 24px
          h4 H4 - 20px
          h5 H5 - 17px
          h6 H6 - 14px
          p.small-text-bold.mb-0 Small Bold
          p.small-text.mb-0 Small
          .subheading Subheading - 20px
        v-flex(lg3 xs12)
          p Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam nibh. Nunc varius facilisis
          p
            i Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam nibh. Nunc varius facilisis
          p
            strong Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam nibh. Nunc varius facilisis
        v-flex(xs12)
          .squares-wrap
            .square.gradient
            .square.blue
            .square.secondary-bg
            .square.black
            .square.primary
            .square.dark-grey
            .square.grey
            .square.bg-grey
            .square.yellow
            .square.red
            .square.orange
            .square.purple
      v-layout(row wrap)
        v-flex(lg3 xs12)
          v-btn(color="secondary", small) CONTACT US
          v-btn(color="secondary",) TRY FOR FREE
          v-btn(color="secondary", large) START EXPLORING
        v-flex(lg3 xs12)
          v-btn(color="accent", small) CONTACT US
          v-btn(color="accent",) TRY FOR FREE
          v-btn(color="accent", large) START EXPLORING
        v-flex(lg3 xs12)
          v-btn(small, color="white") CONTACT US
          v-btn(color="white") TRY FOR FREE
          v-btn(large, color="white") START EXPLORING
        v-flex(lg3 xs12)
          v-btn(color="secondary", small, outlined) CONTACT US
          v-btn(color="secondary", outlined) TRY FOR FREE
          v-btn(color="secondary", large, outlined) SELL LAND
        v-flex(lg3 xs12)
          v-btn(color="accent", small, outlined) CONTACT US
          v-btn(color="accent", outlined) TRY FOR FREE
          v-btn(color="accent", large, outlined) SELL LAND
        v-flex(lg3 xs12)
          v-btn.without-border(small, outlined) CONTACT US
          v-btn.without-border(outlined) TRY FOR FREE
          v-btn.without-border(large, outlined) SELL LAND
      v-layout(row wrap)
        v-flex(lg3 xs12)
          v-btn(color="secondary", small, text) CONTACT US
          v-btn(color="secondary", text) TRY FOR FREE
          v-btn(color="secondary", large, text) SELL LAND
        v-flex(lg3 xs12)
          v-btn(color="accent", small, text) CONTACT US
          v-btn(color="accent", text) TRY FOR FREE
          v-btn(color="accent", large, text) SELL LAND
      v-layout(row wrap)
        v-flex(lg3 xs12)
          a.link-1(href="#") Company
          br
          a(href="#") Company
          .link-block
            a.link-2(href="#") Company
        v-flex(lg3 xs12)
          a.link-3(href="#") Learn More
          br
          a.link-3.uppercase-link(href="#") learn more
          br
          a.link-3.small-link.uppercase-link(href="#") learn more
          br
          a.link-3.extra-small-link.uppercase-link(href="#") learn more
</template>

<script>

export default {
  name: 'UiKit',
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
.gradient
  background: $primary_gradient
.blue
  background: $blue
.secondary-bg
  background: $secondary
.black
  background: $black
.primary
  background: $primary
.dark-grey
  background: $dark_grey
.grey
  background: $grey
.bg-grey
  background: $bg_grey
.yellow
  background: $yellow
.red
  background: $red
.orange
  background: $orange
.purple
  background: $purple
.v-btn
  margin: 10px
.link-block
  background: $black
  padding: 10px
</style>
