<template lang="pug">
  section.s-faq
    .s-container
      h2.s-title FAQ
      BaseAccordion(
        id="accordion-example-1"
        :content="accordionData"
      )
</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
import BaseAccordion from 'Components/Base/BaseAccordion';
export default {
  name: "LendingFaqSection",
  components: {
    BaseImage,
    BaseAccordion
  },
  data() {
    return {
      accordionData: [
        {
          id: 1,
          active: true,
          title: 'Why is my transaction taking so long to come through?',
          details: `This may be because the ethereum network is experiencing heavy traffic at the time of you 
            sending your transaction through, this may result in higher gas fees being displayed 
            and longer duration for your transaction to come through.`
        },
        {
          id: 2,
          active: false,
          title: 'Can I make my transaction quicker?',
          details: `This may be because the ethereum network is experiencing heavy traffic at the time of you 
            sending your transaction through, this may result in higher gas fees being displayed 
            and longer duration for your transaction to come through.`        
        },
        {
          id: 3,
          active: false,
          title: 'How I can Capitalize?',
          details: `This may be because the ethereum network is experiencing heavy traffic at the time of you 
            sending your transaction through, this may result in higher gas fees being displayed 
            and longer duration for your transaction to come through.`        
        },
        {
          id: 4,
          active: false,
          title: 'What is liquidation?',
          details: `This may be because the ethereum network is experiencing heavy traffic at the time of you 
            sending your transaction through, this may result in higher gas fees being displayed 
            and longer duration for your transaction to come through.` 
        },
        {
          id: 5,
          active: false,
          title: 'How to prevent liquidation?',
          details: `This may be because the ethereum network is experiencing heavy traffic at the time of you 
            sending your transaction through, this may result in higher gas fees being displayed 
            and longer duration for your transaction to come through.` 
        },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

.s-faq
  padding: 0 0 210px
  @media screen and (max-width: 991px)
    padding-bottom: 86px
  .s-title
    margin-bottom: 32px

</style>