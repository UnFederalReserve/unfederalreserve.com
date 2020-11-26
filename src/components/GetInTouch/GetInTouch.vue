<template lang="pug">
  .GetInTouch.get-in-touch
    h2 Get in touch
    GetInTouchForm
</template>

<script>
import GetInTouchForm from 'Components/GetInTouchForm/GetInTouchForm';

export default {
  name: 'GetInTouch',
  components: {
    GetInTouchForm,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.get-in-touch
  width: 100%
  max-width: 951px
  margin: 0 auto
  padding: 0 15px
  @media screen and (max-width: 767px)
    margin-top: 100px
  h2
    color: $white
    margin-bottom: 50px
    text-align: center
</style>
