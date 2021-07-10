<template lang="pug">
  section.HowItWorksSection.how-it-works
    .how-it-works-wrap
      h2 How it works?
      .carousel-wrap
        .card-carousel
          .card-carousel__container
            .cards-carousel(:style="{ transform: 'translateY' + '(' + currentOffset + 'px' + ')'}")
              HowItWorksCarouselItem(
                v-for="(item, i) in carouselItems"
                :key="i"
                :item="item"
              )
        .carousel-nav
          .carousel-count {{sliderPosition}}/{{carouselItems.length}}
          .carousel-prev(@click="moveCarousel(-1)")
            img(:src="require('images/carousel-arrow-top.svg')", alt="arrow")
          ul.carousel-dots
            li.dot-item(
              v-for="item in carouselItems"
              :key="item.id"
              :class="{'active': item.active}"
            )
          .carousel-next(@click="moveCarousel(1)")
            img(:src="require('images/carousel-arrow-bottom.svg')" alt="arrow")
      
      .how-it-works-items
        HowItWorksSectionItem(
          v-for="(item, i) in items"
          :key="i"
          v-bind="item"
        )
</template>

<script>
import HowItWorksCarouselItem from './HowItWorksCarouselItem';
import HowItWorksSectionItem from './HowItWorksSectionItem';

export default {
  name: 'HowItWorksSection',
  components: {
    HowItWorksCarouselItem,
    HowItWorksSectionItem
  },
  props: {
    items: Array,
  },
  data() {
    return {
      currentOffset: 0,
      paginationFactor: 130,
      sliderPosition: 1,
      carouselItems: [
        {
          id: 1,
          active: true,
          nextEl: false,
          number: "01",
          title: "Create an account",
          text: "Easily set up a Reserve Lending account from your desktop, laptop, or mobile device."
        },
        {
          id: 2,
          active: false,
          nextEl: true,
          number: "02",
          title: "Participate today",
          text: "For everyday DeFi users, experience the Reserve Lending advantage of superior customer service and support."
        },
        {
          id: 3,
          active: false,
          nextEl: false,
          number: "03",
          title: "Qualify to access liquidity",
          text: "Qualified middle-market lenders who meet KYC/AML onboarding requirements and obtain a license will have access to our lending marketplace. We have partnered with SELFKEY for KYC/AML."
        },
        {
          id: 4,
          active: false,
          nextEl: false,
          number: "04",
          title: "Track everything on your dashboard",
          text: "AL-Dash(R) will help you easily track and summarize your current cash position and general network participant data."
        },
        {
          id: 5,
          active: false,
          nextEl: false,
          number: "05",
          title: "Integrate",
          text: "Connect your balance sheet to CM-Dash(R) and all your liquidity sources and uses can be monitored on our simple to use the platform."
        },
        {
          id: 6,
          active: false,
          nextEl: false,
          number: "06",
          title: "Reporting",
          text: "Accounting, financial, and tax reporting integration with existing systems available."
        }
      ]
    }
  },
  methods: {
    moveCarousel(direction) {

      const activeIdx = this.findSlideIdx("active");
      const nextIdx = this.findSlideIdx("nextEl");

      if(activeIdx != this.carouselItems.length-1 && direction === 1 || activeIdx != 0 && direction === -1) {
        this.changeSlideClass(activeIdx, "active", direction);
      }

      if(nextIdx != this.carouselItems.length-1 && direction === 1 || nextIdx != 0 && direction === -1) {
        if(!(direction === -1 && activeIdx === this.carouselItems.length-1) && !(direction === -1 && activeIdx === 0)) {
          this.changeSlideClass(nextIdx, "nextEl", direction);
        }
      }

      if (direction === 1 && activeIdx != this.carouselItems.length-1) {
        this.currentOffset -= this.paginationFactor;
        this.currentPosition();
      } else if (direction === -1 && activeIdx != 0) {
        this.currentOffset += this.paginationFactor;
        this.currentPosition();
      }
    },
    currentPosition() {
      this.sliderPosition= this.findSlideIdx("active") + 1;
    },
    findSlideIdx(property) {
      return this.carouselItems.findIndex(item => item[property] === true);
    },
    changeSlideClass(index, property, direction) {
      this.carouselItems[index][property] = false;
      this.carouselItems[index+direction][property] = true;
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'

.how-it-works
  width: 100%
  margin: 0 auto
  max-width: 1140px
  padding: 178px 15px 0
  position: relative
  min-height: 920px
  @media screen and (max-width: 1199px)
    padding: 20px 15px 0
    min-height: 875px
  @media screen and (max-width: 767px)
    margin-top: -100px
    padding-bottom: 80px
  &::before
    content: ''
    position: absolute
    background: url('~images/how-it-works-bg.svg') no-repeat
    width: 1000px
    height: 1000px
    left: -300px
    top: -120px
    @media screen and (max-width: 767px)
      top: 0
      left: 50%
      transform: translateX(-50%)
  &-items
    display: none
    flex-wrap: wrap
    justify-content: space-between
    @media screen and (max-width: 1199px)
      margin-top: 20px
      display: flex
h2
  color: $white
  text-align: center
  margin-bottom: 140px
  @media screen and (max-width: 1199px)
    margin-bottom: 80px

.how-it-works-wrap
  position: relative
  z-index: 1

.carousel-wrap
  position: relative
  padding-right: 65px
  @media screen and (max-width: 1199px)
    display: none

.cards-carousel
  padding: 30px
  transition: .3s 
  transform: translateY(0px)

.card-carousel
  &__container
    overflow: hidden
    display: flex
    justify-content: flex-end
    height: 400px
    position: relative

.carousel-nav
  position: absolute
  right: 0
  top: 0
  display: flex
  flex-direction: column
  align-items: center
  margin-top: -55px

.carousel-prev,
.carousel-next
  cursor: pointer
  display: flex
  justify-content: center
  align-items: center
  width: 24px
  height: 24px
  transition: 0.3s
  &:hover
    opacity: 0.6

.carousel-count
  font-weight: 700
  font-size: 16px
  line-height: 170%
  text-align: center
  letter-spacing: 0.01em
  color: #FFFFFF
  margin-bottom: 28px

.carousel-dots
  margin: 0
  padding: 0
  list-style-type: none
  display: flex
  flex-direction: column
  align-items: center
  width: 30px
  padding: 20px 0

.dot-item
  width: 14px
  height: 14px
  border-radius: 100%
  transition: 0.3s
  position: relative
  border: 4px solid transparent
  &::before
    content: ""
    position: absolute
    width: 6px
    height: 6px
    background: #4382FF
    top: 50%
    left: 50%
    margin-top: -3px
    margin-left: -3px
    border-radius: 100%
  &.active
    border-color: #fff


</style>
