<template lang="pug">
  .PageMain.page-main
    HeroSection
    HowItWorksSection#how-it-works(:items="howItWorksItems")
    IslandsSection
    LimitedLiquitySection
    TokenomicsSection#whitepaper
    RoadmapSection#roadmap
    MoreAboutUsSection#about
    OurLeadersSection(:team="team")
    GetInTouch#get-in-touch
</template>

<script>
import pageMixin from 'Mixins/pageMixin';
import HeroSection from 'Components/HeroSection/HeroSection';
import HowItWorksSection from 'Components/HowItWorksSection/HowItWorksSection';
import IslandsSection from 'Components/IslandsSection/IslandsSection';
import LimitedLiquitySection from 'Components/LimitedLiquitySection/LimitedLiquitySection';
import RoadmapSection from 'Components/RoadmapSection/RoadmapSection';
import MoreAboutUsSection from 'Components/MoreAboutUsSection/MoreAboutUsSection';
import OurLeadersSection from 'Components/OurLeadersSection/OurLeadersSection';
import GetInTouch from 'Components/GetInTouch/GetInTouch';
import TokenomicsSection from 'Components/TokenomicsSection/TokenomicsSection';
import { scrollToAnchor } from 'Utils/view';

export default {
  name: 'PageMain',
  components: {
    HeroSection,
    HowItWorksSection,
    IslandsSection,
    LimitedLiquitySection,
    RoadmapSection,
    MoreAboutUsSection,
    OurLeadersSection,
    GetInTouch,
    TokenomicsSection,
  },
  mixins: [pageMixin],
  computed: {
    pageTitle() {
      return 'Merchant Banking DeFI';
    },
    pageDescription() {
      return 'Merchant Banking Treasury Management at Unfederalreserve.com';
    },
    howItWorksItems() {
      return [
        {
          number: '01',
          title: 'Install Treasury App',
          text: 'Download our easy to install Treasury cash management dashboard application.',
        },
        {
          number: '02',
          title: 'Obtain a License',
          text: 'Acquire a sufficient amount of eRSDL token to activate Maker/Taker capabilities.',
        },
        {
          number: '03',
          title: 'Welcome Aboard',
          text: 'Qualified middle-market lenders must meet KYC/AML onboarding requirements to access lending marketplace.',
        },
        {
          number: '04',
          title: 'Monitor Dashboard',
          text: 'A stunning visualization of current cash position, certain network participant data and cash versus projection tables and graphs.',
        },
        {
          number: '05',
          title: 'Access Liquidity',
          text: 'Our marketplace leverages an auction rate bond interface over a traditional short-term line of credit vehicle for borrowers. And we offer a vanilla deposit feature for lenders.',
        },
        {
          number: '06',
          title: 'Reporting',
          text: 'Accounting, financial and tax reporting integration with existing systems available.',
        },
      ];
    },
    team() {
      return [
        {
          name: 'Howard Krieger',
          title: 'Founder & CEO',
          image: 'team/howard-1.png',
          description: '<p>Howard is a Managing Director in CBIZ Valuation Group, LLC (“CBIZ”).'
            + ' He specializes in the valuation of complex financial instruments including'
            + ' crypto-currency loans,  interest rate swaps, agency and non-agency mortgage-backed'
            + ' securities (MBS), and collateralized debt obligations (CDOs).</p>'
            + '<p>He is a former Big-4 Senior Manager responsible for a variety of assignments'
            + ' including: intangible business valuation, intellectual property valuation, financial'
            + ' modeling, valuation of equity participating instruments and other exotic financial'
            + ' assets/liabilities with almost 20 years’ experience. Howard has an MBA from Rutgers'
            + ' Business School with a concentration in Quantitative Finance</p>',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/howardjkrieger/',
            },
          ],
        },
        {
          name: 'Ryan Medlin',
          title: 'Founder & CEO',
          image: 'team/ryan-1.png',
          description: '<p>Ryan Medlin is a seasoned Silicon Valley entrepreneur and technologist.</p>'
            + '<p>His most recent exit was the sale of his proximity tracking and measurement company'
            + ' Datasnap.io in 2015 to Neustar where he then led a team of engineers to build out Neustar\'s'
            + ' IoT Identity  initiatives. This included a product for IoT which was an improvement over normal'
            + ' PKI providing cryptography based policy enforcement and Identity Management in a highly decentralized architecture.</p>'
            + '<p>As part of this responsibility for the past 2 years,  many Blockchain and DLT based prototypes and'
            + ' concepts were given a lot of resources for prototype assessments. Platforms and protocols included:'
            + ' IoTA, Ethereum, Hyperledger, Rootstock, Lisk, NEO and many lower level protocols including things such'
            + ' as Telehash and Cothority.</p>',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/ryanmedlin/',
            },
          ],
        },
      ];
    },
  },
  watch: {
    '$route.hash': {
      immediate: true,
      handler: 'scrollToItemByHash',
    },
  },
  methods: {
    scrollToItemByHash(hash = this.$route.hash) {
      if (hash) {
        setTimeout(() => { scrollToAnchor(hash, -150); });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
</style>
