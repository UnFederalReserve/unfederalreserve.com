<template lang="pug">
  section.ReviewSection.s-review
    .s-container
      h2.s-title Hear What Our Advisory Team Has To Say
      BaseCarousel(:data="reviewData")
        template(slot-scope="{data}")
          ReviewSectionItem(:data="data")

</template>

<script>
import BaseCarousel from '@/components/Base/BaseCarousel';
import ReviewSectionItem from './ReviewSectionItem';

export default {
  name: 'ReviewSection',
  components: {
    BaseCarousel,
    ReviewSectionItem,
  },
  data() {
    return {
      reviewData: [
        {
          id: 1,
          img: 'person-img-1.png',
          text: '“In 2013 I became convinced that crypto was going to change the future of financial services”',
          name: 'Martine Niejadlik',
          description: 'Regulatory Compliance & Fraud Advisor at unFederalReserve Former Chief Compliance Officer at Coinbase®',
        },
        {
          id: 2,
          img: 'person-img-2.png',
          text: 'unFederalReserve leadership have assembled an amazing team with significant experience in both the DeFi and traditional financial services space',
          name: 'Nick DAngelo',
          description: 'unFederalReserve Strategic Advisor Former SVP & Chief of Staff at Wells Fargo',
        },
        {
          id: 3,
          img: 'person-img-3.png',
          text: 'Everyone in the financial world wants to leverage blockchain, but relatively few companies have the mix of blockchain expertise AND industry domain knowledge to be successful in the space. unFederalReserve has both!',
          name: 'Dave Stone',
          description: 'Product and Engineering Advisor at unFederalReserve Currently Director of Product Management at Salesforce',
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.s-review
  position: relative
  padding: 95px 0 150px
  &::before
    content: ""
    position: absolute
    top: -90px
    left: 100px
    right: 0
    width: 964px
    height: 964px
    background: url('~images/circle-bg.svg') no-repeat center top
    background-size: cover

.s-title
  margin-bottom: 65px
</style>
