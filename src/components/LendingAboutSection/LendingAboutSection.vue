<template lang="pug">
  section.s-about
    .s-container
      h2.s-title
        span About us
      .s-about__text
        p Since its founding, unfederalreserve.com has been focused on transparency, 
          | efficiency, and professionalism. 
        p Our goal is to exceed clients' expectations as they enjoy seamless lending and borrowing experiences. 
          | Please reach out to learn more about the unFederalReserve management team, 
          | the company, and the additional services we provide.
</template>

<script>
export default {
  name: "LendingAboutSection"
}
</script>

<style lang="sass" scoped>

.s-about
  padding: 0 0 160px
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
  @media screen and (max-width: 991px)
    padding: 0 0 100px
  &__text
    text-align: center
    font-weight: 500
    font-size: 18px
    line-height: 160%
    letter-spacing: 0.01em
    max-width: 730px
    margin: 0 auto
    position: relative
    &::before
      content: ""
      position: absolute
      background: url('~images/about-bg.svg') no-repeat center
      background-size: cover
      width: 369px
      height: 403px
      left: -400px
      top: -150px
    p
      margin-bottom: 30px
    color: #FFFFFF
  .s-title
    margin-bottom: 48px
    position: relative
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