<template lang="pug">
  .PageMain.page-main
    HeroSection
    HowItWorksSection#how-it-works(:items="howItWorksItems")
    IslandsSection
    LimitedLiquitySection
    TokenomicsSection#tokenomics
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
          title: 'Open an Account',
          text: 'Easy to install Treasury cash management dashboard.',
        },
        {
          number: '02',
          title: 'License eRSDL',
          text: 'Acquire a sufficient amount of eRSDL token to activte Maker/Taker capabilities.',
        },
        {
          number: '03',
          title: 'Apply for eRSDL',
          text: 'Qualified middle-market lenders meet onboarding requirements.',
        },
        {
          number: '04',
          title: 'Monitor Dashboard',
          text: 'Stunning visualization of current cash position, network participant ratios and available markets.',
        },
        {
          number: '05',
          title: 'Overnight Cash Mgt',
          text: 'Stunning visualization of current cash position, network participant ratios and available markets.',
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
          name: 'HOWARD KRIEGER, ASA, CEIV',
          title: 'FOUNDER & CEO',
          image: 'team/howard.png',
          social: [
            {
              name: 'linkedin',
              path: '#',
            },
            {
              name: 'facebook',
              path: '#',
            },
          ],
        },
        {
          name: 'RYAN MEDLIN',
          title: 'FOUNDER & CEO',
          image: 'team/ryan.png',
          social: [
            {
              name: 'linkedin',
              path: '#',
            },
            {
              name: 'facebook',
              path: '#',
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
        setTimeout(() => { scrollToAnchor(hash, -50); });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
</style>
