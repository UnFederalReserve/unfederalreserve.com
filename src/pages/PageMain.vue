<template lang="pug">
  .PageMain.page-main
    v-container(grid-list-lg)
      v-layout(row wrap)
        v-flex(xs12)
          h1 title
</template>

<script>
import pageMixin from 'Mixins/pageMixin';

export default {
  name: 'PageMain',
  components: {
  },
  mixins: [pageMixin],
  computed: {
    pageTitle() {
      return 'page title';
    },
    pageDescription() {
      return 'page Description';
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
</style>
