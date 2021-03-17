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
          title: 'Create an account',
          text: 'Easily set up a Reserve Lending account from your desktop, laptop, or mobile device.',
        },
        {
          number: '02',
          title: 'Participate today',
          text: 'For everyday DeFi users, experience the Reserve Lending advantage of superior customer service and support.',
        },
        {
          number: '03',
          title: 'Qualify to access liquidity',
          text: 'Qualified middle-market lenders who meet KYC/AML onboarding requirements and obtain a license will have access to our lending marketplace. We have partnered with <a target="_blank" style="text-decoration: underline" href="https://selfkey.org/">SELFKEY</a> for KYC/AML.',
        },
        {
          number: '04',
          title: 'Track everything on your dashboard',
          text: 'AL-Dash(R) will help you easily track and summarize your current cash position and general network participant data.',
        },
        {
          number: '05',
          title: 'Integrate',
          text: 'Connect your balance sheet to CM-Dash(R) and all your liquidity sources and uses can be monitored on our simple to use the platform (Coming late 2021).',
        },
        {
          number: '06',
          title: 'Reporting',
          text: 'Accounting, financial, and tax reporting integration with existing systems available.',
        },
      ];
    },

    team() {
      return [
        {
          name: 'Howard Krieger',
          title: 'Founder & CEO',
          image: 'team/howard100x100.png',
          description: '<p> Howard Krieger currently serves as co-founder and CEO, UnFederalReserve.'
            + 'Krieger also serves as Managing Director, CBIZ Valuation Group (“CBIZ”), '
            + 'where he specializes in the valuation of complex financial instruments including '
            + 'crypto-currency loans, interest rate swaps, agency, and non-agency mortgage-backed '
            + 'securities (MBS), and collateralized debt obligations (CDOs).</p>'
            + '<p>Prior to founding UnFederalReserve, Krieger served as Valuation Director '
            + 'at WithumSmith+Brown and KPMG and was also a Senior Manager at one of the Big 4 '
            + 'Accounting Firms. Krieger is well-versed in intangible business valuation, '
            + 'intellectual property valuation, financial modeling, valuation of equity-participating '
            + 'instruments, and exotic financial assets and liabilities. Krieger holds a bachelor\'s '
            + 'degree in business administration from James Madison University and an MBA with a '
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
          image: 'team/ryan100x100.png',
          description: '<p> Ryan Medlin is a seasoned Silicon Valley entrepreneur and technologist '
            + 'whose most recent success was the sale of his proximity tracking and measurement '
            + 'company, Datasnap.io, to Neustar in 2015.</p>'
            + '<p>Medlin stayed with the company and led '
            + 'a team of engineers to build out Neustar\'s IoT Identity initiatives. IoT Identity '
            + 'improved upon already existing public key infrastructure (PKI) by providing '
            + 'cryptography-based policy enforcement and identity management in a secure, decentralized architecture.</p>'
            + '<p>The IoT Identity project became the foundation for building out additional blockchain and '
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
