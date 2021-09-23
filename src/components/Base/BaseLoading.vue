<template lang="pug">
  <div class="loader">
    <div class="nb-spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'BaseLoading',
};
</script>

<style lang="sass" scoped>
.loader
  margin: 50px 0
  position: relative
  display: flex
  justify-content: center
  align-items: center
.nb-spinner
  width: 75px
  height: 75px
  margin: 0
  background: transparent
  border-top: 4px solid #fff
  border-right: 4px solid transparent
  border-radius: 50%
  animation: 1s rotate linear infinite
</style>
