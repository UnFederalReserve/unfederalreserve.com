<template lang="pug">
  .card-carousel-item(:class="{'carousel-active': item.active, 'item-next': item.nextEl}")
    .card-carousel-item__left
      span {{item.number}}
      p {{item.title}}
    .card-carousel-item__right
      p {{item.text}}
      
</template>

<script>

export default {
  name: 'HowItWorksCarouselItem',
  props: {
    item: Object,
  }
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'

.card-carousel-item
  display: flex
  align-items: flex-start
  transition: 0.3s 
  margin-bottom: 30px
  position: relative
  padding-right: 350px
  &.carousel-active
    .card-carousel-item__left
      box-shadow: 0px 4px 25px rgba(5, 35, 95, 0.45)
    .card-carousel-item__right
      visibility: visible
      opacity: 1
    &.item-next
      .card-carousel-item__left
        transform: none
  &.item-next
    .card-carousel-item__left
      transform: scale(0.8)
    &+.card-carousel-item
      .card-carousel-item__left
        transform: translateY(-30px) scale(0.7)
        &::before
          content: ""
          position: absolute
          background: linear-gradient(180.38deg, rgba(47, 80, 196, 0) 16.65%, #2F4FC3 99.72%)
          bottom: -2px
          left: 0
          width: 100%
          height: calc(100% + 50px)
          z-index: 1
          border-radius: 26px
  &__left
    background: #FFFFFF
    border-radius: 26px
    width: 445px
    min-height: 100px
    display: flex
    align-items: center
    padding: 10px 25px
    margin-right: 30px   
    transition: 0.3s 
    span
      font-weight: 600
      font-size: 60px
      line-height: 110%
      letter-spacing: 0.01em
      color: #4382FF
      -webkit-text-stroke: 2px rgba(0, 0, 0, 0.05)
      background: -webkit-linear-gradient(180deg, #4382FF 0%, #2450DB 100%, #0433BF 100%)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      margin-right: 20px
    p
      margin-bottom: 0
      font-weight: 600
      font-size: 22px
      line-height: 150%
      letter-spacing: 0.01em
      color: #021859
  &__right
    font-size: 16px
    line-height: 170%
    letter-spacing: 0.01em
    color: #FFFFFF
    width: 350px
    visibility: hidden
    opacity: 0
    transition: 0.3s
    position: absolute
    right: 0
    top: 50%
    transform: translateY(-50%)
    p
      margin-bottom: 0

</style>
