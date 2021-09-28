<template lang="pug">
  section.RatingSection.s-rating
    .s-container
      h2.s-title DeFi Safety Rating Approval
      .overal-score
        img(:src="require('images/score.svg')" class="overal-score__img")
        .overal-score__text
          strong 74%
          span Overall Score
      .rating-wrap
        .rating-item
          .rating-item__label Code and Team
          .rating-item__score
            .rating-item__score-line
            .rating-item__score-fill(style="width: 95%")
          .rating-item__percent 95%
        .rating-item
          .rating-item__label Documentation
          .rating-item__score
            .rating-item__score-line
            .rating-item__score-fill(style="width: 96%")
          .rating-item__percent 96%
        .rating-item
          .rating-item__label Testing
          .rating-item__score
            .rating-item__score-line
            .rating-item__score-fill(style="width: 57%")
          .rating-item__percent 57%
        .rating-item
          .rating-item__label Security
          .rating-item__score
            .rating-item__score-line
            .rating-item__score-fill(style="width: 70%")
          .rating-item__percent 70%
        .rating-item
          .rating-item__label Access Controls
          .rating-item__score
            .rating-item__score-line
            .rating-item__score-fill(style="width: 53%")
          .rating-item__percent 53%
      .s-rating__img
        img(:src="require('images/safety.png')")
</template>

<script>

export default {
  name: 'RatingSection',
  components: {
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.s-rating
  padding-bottom: 126px
  @media screen and (max-width: 767px)
    padding-bottom: 60px
  &__img
    text-align: center
    display: flex
    align-items: center
    justify-content: center
.s-title
  margin-bottom: 40px
  @media screen and (max-width: 767px)
    font-size: 38px!important
.overal-score
  position: relative
  text-align: center
  &__img
    position: relative
    left: -3px
  &__text
    margin-top: -120px
  strong
    display: block
    font-weight: 700
    font-size: 50px
    line-height: 130%
    text-align: center
    letter-spacing: 0.01em
    color: #00D395
  span
    display: block
    font-weight: 700
    font-size: 24px
    line-height: 130%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF

.rating-wrap
  position: relative
  max-width: 420px
  width: 100%
  margin: 30px auto 0
  padding: 24px 22px 25px 26px
  background: rgba(22,31,145,0.3)
  box-shadow: 0px 4px 25px rgba(5, 35, 95, 0.45)
  border-radius: 20px
  margin-bottom: 11px
  @media screen and (max-width: 767px)
    padding: 24px 20px 25px 20px
  &::before
    content: ""
    position: absolute
    background: url('~images/about-bg.svg') no-repeat center
    background-size: cover
    width: 369px
    height: 403px
    left: -550px
    top: -20px
.rating-item
  margin-bottom: 17px
  display: flex
  align-items: center
  @media screen and (max-width: 767px)
    margin-bottom: 15px
  &:last-child
    margin-bottom: 0
  &__label
    width: 120px
    margin-right: 15px
    font-weight: 500
    font-size: 14px
    line-height: 170%
    letter-spacing: 0.01em
    color: #FFFFFF
  &__score
    margin-right: 10px
    position: relative
    width: calc(100% - 180px)
  &__score-line
    position: relative
    width: 100%
    height: 3px
    background-color: rgba(54, 63, 200, 0.21)
    border-radius: 3px
  &__score-fill
    position: absolute
    left: 0
    top: 0
    background-color: #00D395
    height: 3px
    border-radius: 3px
    &::before
      content: ""
      position: absolute
      top: -14px
      right: -16px
      width: 32px
      height: 31px
      background: url('~images/score-bubble.svg') no-repeat center top
      background-size: cover
  &__percent
    font-weight: 700
    font-size: 14px
    line-height: 170%
    letter-spacing: 0.01em
    color: #FFFFFF

</style>
