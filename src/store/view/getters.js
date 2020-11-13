import CONFIG from 'Config';

export default {
  screenWidth: state => state.screenWidth,
  isBigTablet: state => state.screenWidth < CONFIG.breakpoints.lg,
  isTablet: state => state.screenWidth < CONFIG.breakpoints.md,
  isMobile: state => state.screenWidth <= CONFIG.breakpoints.sm,
  scrollOffsetTop: (state, getters) => (getters.isMobile ? -70 : -75),
  isIE: () => Boolean(/* @cc_on!@ */false || document.documentMode),
  isEnvDev: () => process.env.NODE_ENV === 'development',
  isEnvStag: () => process.env.NODE_ENV === 'staging',
  isEnvProd: () => process.env.NODE_ENV === 'production',
  screenHeight: state => state.screenHeight,
  portraitOrientation: state => state.portraitOrientation,
  isSmallScreen: state => state.screenWidth < 1170,
};
