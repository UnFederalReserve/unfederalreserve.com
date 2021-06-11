<template lang="pug">
  a(:href="link" :class="classes" target="_blank") {{text}}
    BaseImage.arrow-right(
      :src="require('images/arrow-right.svg')",
      alt="arrow-right",
      v-if="withArrow"
    )
</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
import CONFIG from 'Config';
export default {
  name: "BaseBtn",
  props: {
    text: String,
    classes: String,
    withArrow: Boolean
  },
  components: {
    BaseImage
  },
  data() {
    return {
      link: CONFIG.urls.lendingMain
    }
  }
}
</script>

<style lang="sass" scoped>


</style>