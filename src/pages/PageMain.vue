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
          description: '<p> Howard Krieger currently serves as co-founder and CEO, UnFederalReserve.'
            + 'Krieger also serves as Managing Director, CBIZ Valuation Group (“CBIZ”),'
            + 'where he specializes in the valuation of complex financial instruments including'
            + 'crypto-currency loans, interest rate swaps, agency, and non-agency mortgage-backed'
            + 'securities (MBS), and collateralized debt obligations (CDOs).</p>'
            + '<p>Prior to founding UnFederalReserve, Krieger served as Valuation Director`'
            + 'at WithumSmith+Brown and KPMG and was also a Senior Manager at one of the Big 4'
            + 'Accounting Firms. Krieger is well-versed in intangible business valuation,'
            + 'intellectual property valuation, financial modeling, valuation of equity-participating'
            + 'instruments, and exotic financial assets and liabilities. Krieger holds a bachelor\'s'
            + 'degree in business administration from James Madison University and an MBA with a'
            + 'concentration in qualitative finance from Rutgers University.</p>',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/howardjkrieger/',
            },
          ],
        },
        {
          name: 'Ryan Medlin',
          title: 'Founder & CTO',
          image: 'team/ryan-1.png',
          description: '<p> Ryan Medlin is a seasoned Silicon Valley entrepreneur and technologist'
            + 'whose most recent success was the sale of his proximity tracking and measurement'
            + 'company, Datasnap.io, to Neustar in 2015. Medlin stayed with the company and led'
            + 'a team of engineers to build out Neustar\'s IoT Identity initiatives. IoT Identity'
            + 'improved upon already existing public key infrastructure (PKI) by providing'
            + 'cryptography-based policy enforcement and identity management in a secure, decentralized architecture.'
            + '<p>The IoT Identity project became the foundation for building out additional blockchain and'
            + 'DLT-based prototypes: IoTA, Ethereum, Hyperledger, Rootstock, Lisk, NEO, Telehash, and Cothority protocols.</p>',
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
