<template lang="pug">
  .accordion.box
    BaseAccordionItem(
      v-for="item in content"
      :multiple="multiple"
      :item="item"
      :groupId="groupId"
      :key="item.id"
    )

        
</template>

<script>
import BaseAccordionItem from 'Components/Base/BaseAccordionItem';
export default {
  name: "BaseAccordion",
  components: {
    BaseAccordionItem
  },
  props: {
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      groupId: null
    }
  },
  mounted() {
    this.groupId = this.$el.id
  }
}
</script>

<style lang="sass" scoped>

.accordion 
  background: #090C5B
  border: 1px solid #2F3496
  border-radius: 25px
  padding: 30px 58px 20px 43px
  @media screen and (max-width: 1199px)
    padding: 30px 49px 20px 37px
  @media screen and (max-width: 991px)
    padding: 15px

</style>