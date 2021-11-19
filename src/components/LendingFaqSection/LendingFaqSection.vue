<template lang="pug">
  section.s-faq
    .s-container
      h2.s-title F.A.Q
      BaseAccordion(
        id="accordion-example-1"
        :content="accordionData"
      )
</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
import BaseAccordion from 'Components/Base/BaseAccordion';

export default {
  name: 'LendingFaqSection',
  components: {
    BaseImage,
    BaseAccordion,
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
            and longer duration for your transaction to come through.`,
        },
        {
          id: 2,
          active: false,
          title: 'Can I make my transaction quicker?',
          details: `You can increase the gas fee on a transaction on confirmation screen when about 
            to transact. On metamask this can be done by clicking on edit and then choosing the faster 
            option which will cost abit more but will push through the transaction abit quicker. If you 
            have already sent the transaction through you can go to meta mask wallet (if connected to site 
            with meta mask wallet) and click on the activity tab > find your transaction which is usually with a 
            pending status > click on pending and it will bring up the 3 options, by default the middle 
            option is sent you can click on the faster one and select this will bump you up with 
            more gas to transact quicker than the default.`,
        },
        {
          id: 3,
          active: false,
          title: 'How can I reduce my gas fee?',
          details: `The ethereum network like any other network does have busy periods and periods 
            where it is not as busy, the less busier periods tend to reduce the gas fee.`,
        },
        {
          id: 4,
          active: false,
          title: 'What is liquidation?',
          details: `Even though Liquidation remains an unwanted outcome, it is needed for a healthy Lending platform. Below are some helpful notes:
            <ol>
              <li>Your position cannot be bitten for the whole 100%. Instead, the maximum portion of your position that can be liquidated is 50%.</li>
              <li>A single liquidator will liquidate a specific position, at the discount rate allowed by the protocol.</li>
              <li>The discount incentive for buying out liquidate collateral is fixed at 8%.</li>
            </ol>
          `,
        },
        {
          id: 5,
          active: false,
          title: 'How to prevent liquidation?',
          details: `<p>There are 2 basic ways to prevent liquidation: add more of the supplied collateral OR pay back part of the debt.</p>
            <p>Alternative option: to achieve leverage, many people don’t actually hold the funds that they borrowed. 
            In this case debt can be Repaid with already supplied collateral. Repay does three things in one transaction:</p>
            <ul>
              <li>Takes out supplied collateral (e.g. withdraw ETH)</li>
              <li>Swaps these funds for the borrowed asset (e.g. exchange ETH -> SUSHI)</li>
              <li>Uses these new funds to pay back debt (e.g. payback SUSHI debt)</li>
            </ul>
          `,
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>

.s-faq
  padding: 0 0 210px
  @media screen and (max-width: 991px)
    padding-bottom: 86px
  .s-title
    margin-bottom: 32px
    @media screen and (max-width: 991px)
      font-size: 38px

</style>
