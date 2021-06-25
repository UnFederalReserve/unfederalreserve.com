<template lang="pug">
  section.s-color
    .s-container
      h2.s-title Color Identity
      .color-items
        .color-item.color-1
          .color-item__code #060D5D
        .color-item.color-2
          .color-item__code #142581
        .color-item.color-3
          .color-item__code #3F63D4
        .color-item.color-4
          .color-item__code #3377FF

      

</template>

<script>
import BaseImage from 'Components/Base/BaseImage';

export default {
  name: "BrandColorSection",
  components: {
    BaseImage
  }
}
</script>

<style lang="sass" scoped>

.s-color
  padding: 75px 0 45px
  @media screen and (max-width: 767px)
    padding-top: 20px

.s-title
  margin-bottom: 52px

.color-items
  display: flex
  flex-wrap: wrap
  justify-content: center
  margin: 0 -15px
  @media screen and (max-width: 767px)
    margin: 0

.color-item
  width: calc(25% - 30px)
  margin: 0 15px 30px
  height: 190px
  padding: 25px 34px
  display: flex
  align-items: flex-end
  justify-content: flex-start
  border-radius: 50px
  @media screen and (max-width: 991px)
    width: calc(50% - 30px)
  @media screen and (max-width: 767px)
    width: 100%
    max-width: 255px
  &__code
    font-weight: 500
    font-size: 24px
    line-height: 170%
    letter-spacing: 0.01em
    color: #FFFFFF
  &.color-1
    background: #060D5D
    border: 1px solid #1B3EA9
    box-shadow: 0px 0px 4px #3377FF
  &.color-2
    background: #142581
  &.color-3
    background: #3F63D4
  &.color-4
    background: #3377FF

  
  
</style>