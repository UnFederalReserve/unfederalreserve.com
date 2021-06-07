<template lang="pug">
    section.s-reason
      .s-container
        h2.s-title Top reason to go Reserve Lending®
        .rsn-wrap
          .rsn-left
            .rsn-left-item.empty
            .rsn-left-item.row-style
              .rsn-left-item__icon
                BaseImage.rsn-icon-1(
                  :src="require('images/rsn-icon-1.png')",
                  alt="icon",
                )
              span USDT
            .rsn-left-item.row-style
              .rsn-left-item__icon
                BaseImage.rsn-icon-2(
                  :src="require('images/rsn-icon-2.png')",
                  alt="icon",
                )
              span USDC
            .rsn-left-item.row-style
              .rsn-left-item__icon
                BaseImage.rsn-icon-3(
                  :src="require('images/rsn-icon-3.png')",
                  alt="icon",
                )
              span DAI
            .rsn-left-item.row-style
              .rsn-left-item__icon
                BaseImage.rsn-icon-4(
                  :src="require('images/rsn-icon-4.svg')",
                  alt="icon",
                )
              span WBTC
            .rsn-left-item.row-style
              .rsn-left-item__icon
                BaseImage.rsn-icon-5(
                  :src="require('images/rsn-icon-5.png')",
                  alt="icon",
                )
              span ETH
          .rsn-right
            LendingReasonItem(
              v-for="item in items"
              :key="item.id"
              v-bind="item", 
            )
            .slider-arrows
              .arrow-prev(@click="changeSlide(-1)")
                BaseImage.slider-arrow(
                  :src="require('images/slider-arrow.svg')",
                  alt="arrow",
                )
              ul.slider-dots
                li.dot-item(
                  v-for="item in items"
                  :key="item.id"
                  :class="{'active': item.classes === 'active'}"
                )
              .arrow-next(@click="changeSlide(1)")
                BaseImage.slider-arrow(
                  :src="require('images/slider-arrow.svg')",
                  alt="arrow",
                )
        .rsn-info *APY% displayed as of 18:20 UTC 05/20/2021
        .earn
          .earn__icon
            BaseImage.earn-icon(
              :src="require('images/earn-icon.svg')",
              alt="earn-icon",
            )
          .earn__left
            h3.earn__title Earn APY right NOW
            p Connect you wallet and start using the best lending platform.
          .earn__right
            a.btn-rounded.btn-with-arrow.btn-gradient Get started
              BaseImage.arrow-right(
                :src="require('images/arrow-right.svg')",
                alt="arrow-right",
              )
</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
import LendingReasonItem from 'Components/LendingReasonSection/LendingReasonItem';
export default {
  name: 'LendingReasonSection',
  components: {
    BaseImage,
    LendingReasonItem
  },
  data() {
    return {
      items: [
        {
          id: 1,
          icon: require('images/rsn-logo-1.png'),
          name: "AAVE",
          classes: "active",
          data: [
            {
              id: 1,
              value1: "28.85%",
              value2: "35.60%",
              value3: "6.75%",
              value4: "4th"
            },
            {
              id: 2,
              value1: "3.08%",
              value2: "3.75%",
              value3: "0.67%",
              value4: "2nd"
            },
            {
              id: 3,
              value1: "5.07%",
              value2: "6.78%",
              value3: "1.71%",
              value4: "3rd"
            },
            {
              id: 4,
              value1: "5.07%",
              value2: "6.78%",
              value3: "1.71%",
              value4: "3rd"
            },
            {
              id: 5,
              value1: "5.07%",
              value2: "6.78%",
              value3: "1.71%",
              value4: "3rd"
            }
          ]
        },
        {
          id: 2,
          icon: require('images/rsn-logo-2.svg'),
          name: "Reserve Lending®",
          classes: "hide",
          data: [
            {
              id: 1,
              value1: "12.67%",
              value2: "12.77%",
              value3: "0.10%",
              value4: "1st"
            },
            {
              id: 2,
              value1: "11.73%",
              value2: "12.63%",
              value3: "0.90%",
              value4: "1st"
            },
            {
              id: 3,
              value1: "11.73%",
              value2: "12.63%",
              value3: "0.90%",
              value4: "1st"
            },
            {
              id: 4,
              value1: "11.73%",
              value2: "12.63%",
              value3: "0.90%",
              value4: "1st"
            },
            {
              id: 5,
              value1: "11.73%",
              value2: "12.63%",
              value3: "0.90%",
              value4: "1st"
            }
          ]
        },
        {
          id: 3,
          icon: require('images/rsn-logo-3.png'),
          name: "Compound",
          classes: "hide",
          data: [
            {
              id: 1,
              value1: "2.73%",
              value2: "4.16%",
              value3: "1.43%",
              value4: "2nd"
            },
            {
              id: 2,
              value1: "2.85%",
              value2: "4.25%",
              value3: "1.40%",
              value4: "3rd"
            },
            {
              id: 3,
              value1: "3.14%",
              value2: "4.66%",
              value3: "1.52%",
              value4: "2nd"
            },
            {
              id: 4,
              value1: "3.14%",
              value2: "4.66%",
              value3: "1.52%",
              value4: "2nd"
            },
            {
              id: 5,
              value1: "3.14%",
              value2: "4.66%",
              value3: "1.52%",
              value4: "2nd"
            }
          ]
        },
        {
          id: 4,
          icon: require('images/rsn-logo-4.png'),
          name: "Venus",
          classes: "hide",
          data: [
            {
              id: 1,
              value1: "17.1%",
              value2: "20.72%",
              value3: "3.62%",
              value4: "3rd"
            },
            {
              id: 2,
              value1: "10.31%",
              value2: "13.22%",
              value3: "2.91%",
              value4: "3th"
            },
            {
              id: 3,
              value1: "3.97%",
              value2: "8.56%",
              value3: "4.59%",
              value4: "4th"
            },
            {
              id: 4,
              value1: "3.97%",
              value2: "8.56%",
              value3: "4.59%",
              value4: "4th"
            },
            {
              id: 5,
              value1: "3.97%",
              value2: "8.56%",
              value3: "4.59%",
              value4: "4th"
            }
          ]
        }
      ]
    }
  },
  methods: {
    changeSlide(number) {
      let slideIdx = this.items.findIndex(item => item.classes === 'active');
      if(slideIdx === this.items.length-1 && number === 1 || slideIdx === 0 && number === -1) {
        return
      }
      this.items[slideIdx].classes = 'hide';
      this.items[slideIdx+number].classes = 'active';
    },
  }
};
</script>

<style lang="sass" scoped>

.s-reason
  position: relative
  &::before
    content: ""
    position: absolute
    top: -250px
    right: 183px
    height: 1964px
    width: 100%
    max-width: 1779px
    background: url('~images/figure.svg') no-repeat center
    background-size: cover
    @media screen and (max-width: 1199px)
      right: -100px
      top: 100px
    @media screen and (max-width: 991px)
      display: none
  .s-title
    margin-bottom: 63px
    @media screen and (max-width: 991px)
      margin-bottom: 50px

.rsn-wrap
  display: flex

.rsn-left
  flex: 0 0 280px
  display: flex
  flex-direction: column
  @media screen and (max-width: 1199px)
    flex: 0 0 155px
  @media screen and (max-width: 991px)
    flex: none
    width: 50%
  @media screen and (max-width: 480px)
    width: auto
.row-style
  background: rgba(0, 0, 0, 0.11)
  height: 93px
  margin-bottom: 20px
  @media screen and (max-width: 991px)
    height: 73px
    margin-bottom: 12px
  @media screen and (max-width: 374px)
    height: 97px

.rsn-left-item
  display: flex
  align-items: center
  border-top-left-radius: 20px
  border-bottom-left-radius: 20px
  padding: 10px 10px 10px 62px
  @media screen and (max-width: 1199px)
    padding: 10px 10px 10px 27px
  @media screen and (max-width: 400px)
    padding: 10px 10px 10px 12px
  @media screen and (max-width: 374px)
    flex-direction: column
  &.empty
    height: 260px
    @media screen and (max-width: 991px)
      height: 294px
  &__icon
    display: flex
    align-items: center
    margin-right: 29px
    @media screen and (max-width: 991px)
      margin-right: 18px
    @media screen and (max-width: 400px)
      margin-right: 10px
    @media screen and (max-width: 374px)
      margin-right: 0
      margin-bottom: 5px
  span
    font-weight: 700
    font-size: 18px
    line-height: 170%
    letter-spacing: 0.01em
    color: #FFFFFF
    @media screen and (max-width: 400px)
      font-size: 16px

.rsn-right
  display: flex
  flex: 1
  position: relative

.rsn-info
  text-align: right
  font-size: 14px
  line-height: 156.5%
  text-align: right
  letter-spacing: 0.01em
  color: #FFFFFF
  font-style: italic
  margin-top: -10px
  @media screen and (max-width: 991px)
    margin-top: 34px

.earn
  background: #FFFFFF
  box-shadow: 0px 4px 25px rgba(5, 35, 95, 0.45)
  border-radius: 26px
  position: relative
  margin-top: 53px
  padding: 40px 50px 34px 63px
  display: flex
  align-items: center
  justify-content: space-between
  flex-wrap: wrap
  @media screen and (max-width: 1199px)
    margin-top: 50px
    padding: 40px 50px 34px 42px
  @media screen and (max-width: 991px)
    flex-direction: column
    text-align: center
    padding: 40px 15px 30px 15px
    margin-top: 22px
  &__icon
    position: absolute
    top: 27px
    left: -25px
    @media screen and (max-width: 991px)
      display: none
  &__left
    max-width: 400px
    width: 100%
    margin-right: 30px
    @media screen and (max-width: 991px)
      margin-right: 0
      margin-bottom: 44px
    p
      font-weight: 500
      font-size: 16px
      line-height: 156.5%
      letter-spacing: 0.01em
      color: #1A2D86
      margin-bottom: 0
  &__title
    font-weight: bold
    font-size: 36px
    line-height: 130%
    letter-spacing: 0.01em
    color: #1A2D86
    margin-bottom: 8px
    @media screen and (max-width: 991px)
      margin-bottom: 20px

.slider-arrows
  position: absolute
  align-items: center
  justify-content: space-between
  width: 100%
  top: 139px
  left: 0
  right: 0
  padding: 0 17px 11px
  border-bottom: 2px solid #4C70EE
  display: none
  @media screen and (max-width: 991px)
    display: flex
  .arrow-prev
    transform: rotate(180deg)
  .arrow-prev,
  .arrow-next
    width: 40px
    height: 40px
    border: 2px solid #4C70EE
    border-radius: 10em
    display: flex
    align-items: center
    justify-content: center


.slider-dots
  margin: 0
  padding: 0
  display: flex
  align-items: center
  list-style-type: none
  li
    width: 9px
    height: 9px
    margin: 0 4px
    min-width: 9px
    background: #4C70EE
    border-radius: 10em
    &.active
      background: #fff
</style>