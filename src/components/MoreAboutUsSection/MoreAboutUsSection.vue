<template lang="pug">
  section.MoreAboutUsSection.more-about-us
    h2 More About Us
    p Since our founding, unfederalreserve.com has been known for quality
      |  services, exceptional efficiency and the highest level of
      |  professionalism. No matter what service you’re looking for,
      |  we guarantee to not only meet, but exceed your expectations
      |  and ensure your full satisfaction.
    p Our team is up for every job, managing projects with the skill
      |  and experience our clients have come to expect. Please get in
      |  touch to learn more about our team, our company or for details
      |  about the services we provide.
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
  max-width: 945px
  padding-left: 15px
  padding-right: 15px
  margin: 0 auto
  @media screen and (max-width: 767px)
    margin-top: 100px
  h2
    color: $white
    margin-bottom: 25px
  p
    color: $white
</style>
