<template lang="pug">
    .accordion-item(
      :id="groupId + '-' + item.id" 
      :class="{'is-active': item.active}"
    )
      .accordion-item__top
        .accordion-item__title-wrap(@click="toggle")
          h4.accordion-item__title {{item.title}}
          span.accordion-item__arrow
            BaseImage.accordion-arrow(
              :src="require('images/accordion-arrow.svg')",
              alt="arrow",
            )
      transition(
        name="accordion-item"
        @enter="startTransition"
        @after-enter="endTransition"
        @before-leave="startTransition"
        @after-leave="endTransition"
      )  
        .accordion-item__details(v-if="item.active")
          .accordion-item__details-inner(v-html="item.details")
</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
export default {
  name: "BaseAccordionItem",
  props: ["item", "multiple", "groupId"],
  components: {
    BaseImage
  },
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active
      else {
        this.$parent.$children.forEach((item, index) => {
          if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active
          else item.item.active = false
        }) 
      }
    },
    
    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    
    endTransition(el) {
      el.style.height = ''
    }
  }
}
</script>

<style lang="sass" scoped>

.accordion-item-enter-active, .accordion-item-leave-active 
  will-change: height
  transition: height 0.2s ease

.accordion-item-enter, .accordion-item-leave-to 
  height: 0 !important

.accordion-item
  border-bottom: 1px solid #25298B
  &.is-active
    .accordion-item__title-wrap
      padding-bottom: 17px
    .accordion-item__arrow
      transform: rotate(180deg)
      img
        filter: brightness(0) invert(1)
  &:last-child 
    border-bottom: 0
  &__title
    font-weight: bold
    font-size: 20px
    line-height: 170%
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-right: 10px
  &__title-wrap
    display: flex
    align-items: center
    justify-content: space-between
    padding: 26px 15px
    cursor: pointer
    transition: 0.3s
    @media screen and (max-width: 991px)
      padding: 15px 10px
  &__arrow
    display: flex
    align-items: center
    transition: 0.3s
  &__details
    overflow: hidden
    font-weight: 500
    font-size: 14px
    line-height: 156.5%
    letter-spacing: 0.01em
    color: #748DE3
    max-width: 783px
    width: 100%
    padding-left: 15px
  &__details-inner
    padding-bottom: 39px
    @media screen and (max-width: 991px)
      padding-bottom: 26px
</style>