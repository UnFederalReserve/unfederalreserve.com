<template lang="pug">
  transition(name="fade")
    .modal-mask
      .modal-wrap
        .modal-container
          slot(name="content")
          .modal-close(@click="$emit('close')")
            BaseImage.close-icon(
              :src="require('images/close-icon.svg')",
              alt="close",
            )
</template>

<script>
import BaseImage from 'Components/Base/BaseImage';

export default {
  name: "BaseModal",
  components: {
    BaseImage
  }
}
</script>

<style lang="sass" scoped>

.modal-mask
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(4, 39, 81, 0.5)
  display: table
  transition: opacity 0.3s ease

.modal-wrap
  display: table-cell
  vertical-align: middle

.modal-container
  max-width: 843px
  width: 92%
  position: relative
  margin: 0px auto
  padding: 12px 14px
  background: #FFFFFF
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.07)
  border-radius: 20px
  transition: all 0.3s ease
  color: #042751
  display: flex
  align-items: center
  justify-content: center

.modal-close
  position: absolute
  right: -10px
  top: -10px
  background: #FFFFFF
  box-shadow: 0px 4px 4px rgba(118, 133, 151, 0.21)
  display: flex
  align-items: center
  justify-content: center
  width: 33px
  height: 33px
  border-radius: 10em

</style>