<template lang="pug">
  .PageMain.page-main
    HeroSection
    SupplySection
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
import SupplySection from 'Components/SupplySection/SupplySection';
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
    SupplySection,
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
