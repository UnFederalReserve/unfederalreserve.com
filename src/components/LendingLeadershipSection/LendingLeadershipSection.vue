<template lang="pug">
  section.s-leadership
    .s-container
      h2.s-title Leadership
      .leadership-wrap
        .leadership-items
          LeadershipItem(
            v-for="(item, i) in team"
            :key="i"
            v-bind="item"
          )
      .bottom-info
        h2.bottom-info__title 
          BaseImage.earn-icon(
            :src="require('images/earn-icon.svg')",
            alt="earn-icon",
          )
          span Ready to earn?
        p Go to ReserveLending™ platform and start supplying assets today
        BaseBtn(classes="btn-rounded btn-with-arrow btn-gradient" text="Get Started" :link="link" :withArrow="true")

</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
import BaseBtn from 'Components/Base/BaseBtn';
import LeadershipItem from 'Components/LendingLeadershipSection/LeadershipItem';
import CONFIG from 'Config';
export default {
  name: "LendingLeadershipSection",
  props: {
    team: Array
  },
  components: {
    BaseImage,
    BaseBtn,
    LeadershipItem
  },
  data() {
    return {
      link: CONFIG.urls.lendingMain
    }
  }
}
</script>

<style lang="sass" scoped>

.s-leadership
  padding: 0 0 139px
  position: relative
  @media screen and (max-width: 1199px)
    padding: 0 0 70px
  &::before
    content: ""
    position: absolute
    bottom: -250px
    left: 0
    right: 0
    width: 100%
    height: 868px
    background: url('~images/bottom-bg.svg') no-repeat center
    background-size: cover
    @media screen and (max-width: 1199px)
      bottom: -630px
      left: -65px
  .s-title
    margin-bottom: 83px
    @media screen and (max-width: 991px)
      font-size: 38px
      margin-bottom: 98px

.leadership-wrap
  margin-bottom: 130px
  @media screen and (max-width: 991px)
    margin-bottom: 100px
    padding: 0 10px
  
.leadership-items
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  max-width: 950px
  width: 100%
  margin: 0 auto
  @media screen and (max-width: 991px)
    flex-direction: column

.leadership-more
  text-align: center

.bottom-info
  text-align: center
  .earn-icon
    @media screen and (max-width: 991px)
      display: none
  &__title
    display: flex
    align-items: center
    justify-content: center
    font-weight: 700
    font-size: 52px
    line-height: 130%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 35px
    margin-right: 75px
    @media screen and (max-width: 991px)
      font-size: 38px
      margin-right: 0
    @media screen and (max-width: 400px)
      font-size: 28px
    span
      margin-left: 18px
      @media screen and (max-width: 991px)
        margin-left: 0
  p
    font-weight: 500
    font-size: 16px
    line-height: 156.5%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    max-width: 361px
    width: 100%
    margin: 0 auto 36px
    @media screen and (max-width: 991px)
      margin-bottom: 52px
    @media screen and (max-width: 767px)
      max-width: 261px
      width: 100%
</style>