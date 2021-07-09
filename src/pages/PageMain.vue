<template lang="pug">
  .PageMain.page-main
    HeroSection
    HowItWorksSection#how-it-works(:items="howItWorksItems")
    IslandsSection
    LimitedLiquitySection
    TokenomicsSection#whitepaper
    RoadmapSection#roadmap
    MoreAboutUsSection#about
    OurLeadersSection(:team="getTeam")
    GetInTouch#get-in-touch
</template>

<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters('view', ['getTeam']),
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
          text: 'Easily set up a ReserveLending® account from your desktop, laptop, or mobile device.',
        },
        {
          number: '02',
          title: 'Participate today',
          text: 'For everyday DeFi users, experience the ReserveLending® advantage of superior customer service and support.',
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
          text: 'Connect your balance sheet to CM-Dash(R) and all your liquidity sources and uses can be monitored on our simple to use the platform.',
        },
        {
          number: '06',
          title: 'Reporting',
          text: 'Accounting, financial, and tax reporting integration with existing systems available.',
        },
      ];
    }
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
