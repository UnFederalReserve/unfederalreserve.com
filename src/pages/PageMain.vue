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
          text: 'Download our easy toinstall Treasury cash management dashboard application.',
        },
        {
          number: '02',
          title: 'Obtain a License',
          text: 'Acquire a sufficient amount of eRSDL token to activte Maker/Taker capabilities.',
        },
        {
          number: '03',
          title: 'Welcome Aboard',
          text: 'Qualified middle-market lenders must meet KYC/AML onboarding requirements to access lending marketplace..',
        },
        {
          number: '04',
          title: 'Monitor Dashboard',
          text: 'A stunning visualization of current cash position, certain network participant data and cash versus projection tables and graphs.',
        },
        {
          number: '05',
          title: 'Access Liquidity',
          text: 'Our marketplace leverages an auction rate bond inteface over a traditional short-term line of credit vehicle for borrowers. And we offer a vanilla deposit feature for lenders.',
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
        setTimeout(() => { scrollToAnchor(hash, -150); });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
</style>
