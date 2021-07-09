<template lang="pug">
  .GetInTouch.get-in-touch
    h2.s-title Get in Touch
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
  position: relative
  &::before
    content: ""
    position: absolute
    background: url("~images/bulbul.png") no-repeat
    right: 0
    bottom: -100px
    width: 265px
    height: 401px
  @media screen and (max-width: 767px)
    margin-top: 100px
  .s-title
    margin-bottom: 40px
</style>
