<template lang="pug">
  section.MoreAboutUsSection.more-about-us
    h2 About Us
    p Since its founding, unfederalreserve.com has been focused on transparency,
      |  efficiency, and professionalism. Our goal is to exceed clients' expectations
      |  as they enjoy seamless lending and borrowing experiences. Please reach out
      |  to learn more about the unFederalReserve management team, the company, and
      |  the additional services we provide.
</template>

<script>

export default {
  name: 'MoreAboutUsSection',
  components: {
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.more-about-us
  width: 100%
  max-width: 1140px
  padding-left: 15px
  padding-right: 15px
  margin: 0 auto
  @media screen and (max-width: 991px)
    margin-top: 100px
  h2
    color: $white
    margin-bottom: 25px
  p
    color: $white
</style>
