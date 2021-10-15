<template lang="pug">
  section.s-about
    .s-container
      h2.s-title
        span About Us
      .s-about__text
        p Since its founding, unFederalReserve.com has been focused on transparency,&nbsp;
          | efficiency and professionalism.
        p Our goal is to exceed clients' expectations as they enjoy seamless lending and borrowing experiences.&nbsp;
          | Please reach out to learn more about the unFederalReserve™ management team,
          | the company and the additional services we provide.
</template>

<script>

export default {
  name: 'LendingAboutSection',
};
</script>

<style lang="sass" scoped>

.s-about
  position: relative
  &::before
    @media screen and (max-width: 991px)
      content: ""
      position: absolute
      top: -32px
      right: -200px
      height: 953px
      width: 1050px
      background: url('~images/figure.svg') no-repeat center
      background-size: cover
    @media screen and (max-width: 767px)
      display: none
  @media screen and (max-width: 991px)
    padding: 0 0 75px
  &__text
    text-align: center
    font-weight: 500
    font-size: 18px
    line-height: 160%
    letter-spacing: 0.01em
    max-width: 730px
    margin: 0 auto
    position: relative
    @media screen and (max-width: 991px)
      padding: 0 10px
    p
      margin-bottom: 30px
    color: #FFFFFF
  .s-title
    margin-bottom: 48px
    position: relative
    @media screen and (max-width: 991px)
      font-size: 38px
    @media screen and (max-width: 767px)
      font-size: 38px!important
    span
      position: relative
      z-index: 2
    &::after
      content: ""
      position: absolute
      background: url('~images/about-title-bg.svg') no-repeat center
      background-size: cover
      width: 268px
      height: 159px
      margin: 0 auto
      left: 0
      right: 0
      bottom: -20px
</style>
