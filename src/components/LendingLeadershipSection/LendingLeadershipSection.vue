<template lang="pug">
  section.s-leadership
    .s-container
      h2.s-title Leadership
      .leadership-wrap
        .leadership-items
          .leadership-item
            .leadership-item__img
              a.leadership-item__social
                BaseImage.leadership-img-1(
                  :src="require('images/linked-in.svg')",
                  alt="leadership image",
                )
              .leadership-item__img-inner
                BaseImage.leadership-img-1(
                  :src="require('images/leadership-img-1.png')",
                  alt="leadership image",
                )
            .leadership-item__position Founder & CEO
            .leadership-item__name Howard Krieger
            .leadership-item__about
              p Howard Krieger currently serves as co-founder and CEO of unFederalReserve.
              p Prior to founding unFederalReserve, Krieger served as Managing Director at CBIZ Valuation Group, 
                | Valuation Director at WithumSmith+Brown and was also a Senior Manager at one of the Big 4 Accounting Firms. 
              p Krieger is well-versed in intangible business valuation, intellectual property valuation, financial modeling, 
                | valuation of equity-participating instruments, and exotic financial assets and liabilities. 
                | Krieger holds a bachelor's degree in business administration from James Madison University 
                | and a MBA with a concentration in qualitative finance from Rutgers University.
          .leadership-item
            .leadership-item__img
              a.leadership-item__social
                BaseImage.leadership-img-1(
                  :src="require('images/linked-in.svg')",
                  alt="leadership image",
                )
              .leadership-item__img-inner
                BaseImage.leadership-img-1(
                  :src="require('images/leadership-img-2.png')",
                  alt="leadership image",
                )
            .leadership-item__position Founder & CTO
            .leadership-item__name Ryan Medlin
            .leadership-item__about
              p Ryan Medlin is a seasoned Silicon Valley entrepreneur and technologist whose most 
                | recent success was the sale of his proximity tracking and measurement company, Datasnap.io, to Neustar in 2015.
              p Medlin stayed with the company and led a team of engineers to build out Neustar's IoT Identity initiatives. 
                | IoT Identity improved upon already existing public key infrastructure (PKI) by providing 
                | cryptography-based policy enforcement and identity management in a secure, decentralized architecture.
              p The IoT Identity project became the foundation for building out additional blockchain 
                | and DLT-based prototypes: IoTA, Ethereum, Hyperledger, Rootstock, Lisk, NEO, Telehash, and Cothority protocols.
      .bottom-info
        h2.bottom-info__title 
          BaseImage.earn-icon(
            :src="require('images/earn-icon.svg')",
            alt="earn-icon",
          )
          span Ready to earn?
        p Go to ReserveLending® platform and start supplying asstets today
        BaseBtn(classes="btn-rounded btn-with-arrow btn-gradient" text="Get Started" :withArrow="true")

</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
import BaseBtn from 'Components/Base/BaseBtn';
export default {
  name: "LendingLeadershipSection",
  components: {
    BaseImage,
    BaseBtn
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

.leadership-item
  background: linear-gradient(180deg, #0C1480 0%, #050B5B 100%)
  border-radius: 26px
  position: relative
  width: calc(50% - 30px)
  margin-bottom: 42px
  padding: 74px 40px 13px 40px
  @media screen and (max-width: 991px)
    width: 100%
    margin-bottom: 98px
  @media screen and (max-width: 374px)
    padding: 74px 20px 13px 20px
  &:last-child
    @media screen and (max-width: 991px)
      margin-bottom: 32px
  &__social
    position: absolute
    bottom: -10px
    right: -10px
    z-index: 2
    opacity: 1!important
    background: #0433BF
    width: 32px
    height: 32px
    display: flex
    align-items: center
    justify-content: center
    box-shadow: 0px 6.65387px 13.3077px rgba(31, 63, 174, 0.04), 0px 1.33077px 3.99232px rgba(31, 63, 174, 0.04), 0px 0px 0.665387px rgba(31, 63, 174, 0.04)
    border-radius: 8px
    &:hover
      opacity: 0.8!important
  &__img-inner
    border-radius: 20px
    overflow: hidden
    background: rgba(255, 255, 255, 0.08)
    display: flex
    align-items: center
  &__img
    position: absolute
    margin: 0 auto
    left: 0
    right: 0
    top: -50px
    width: 100px
    height: 100px
  &__position
    text-align: center
    font-weight: 600
    font-size: 16px
    line-height: 170%
    letter-spacing: 0.01em
    margin-bottom: 8px
    color: #FFFFFF
  &__name
    font-weight: 700
    font-size: 30px
    line-height: 135%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 17px
  &__about
    p
      font-weight: 500
      font-size: 14px
      line-height: 180%
      letter-spacing: 0.01em
      color: #FFFFFF
      margin-bottom: 25px

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