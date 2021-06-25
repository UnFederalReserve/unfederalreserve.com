<template lang="pug">
  section.s-card-info
      .s-container
        h2.s-title Use ReserveLending®
        .card-items
          .card-item
            .card-item__label.safe SAFE
            .card-item__top
              .card-item__icon
                BaseImage.eth-icon-1(
                  :src="require('images/eth-icon-1.svg')",
                  alt="eth-icon",
                )
              .card-item__title Supply Assets
              .card-item__title-descr Supply (deposit) assets to the ReserveLending® platform and earn interest
            ul.card-item__lists
              li.card-item__li.card-info
                .card-info__left
                  h4.card-info__title Supply Assets
                  p ReserveLending® platform allows you to supply assets in an easy, safe, and secure way.
                .card-info__right
                  BaseImage.eth-icon-1(
                    :src="require('images/spa-icon-1.svg')",
                    alt="icon",
                  )
              li.card-item__li.card-info
                .card-info__left
                  h4.card-info__title Claim Receipt
                  p Once assets are supplied to the platform you are issued unTokens as a claim receipt 
                    | for the portion of assets being supplied to the asset pool.
                .card-info__right
                  BaseImage.eth-icon-2(
                    :src="require('images/spa-icon-2.svg')",
                    alt="icon",
                  )
              li.card-item__li.card-info
                .card-info__left
                  h4.card-info__title Earn APY
                  p Accrue interest on your unTokens based on current Supply APY rates.
                .card-info__right
                  BaseImage.eth-icon-3(
                    :src="require('images/spa-icon-3.svg')",
                    alt="icon",
                  )
              li.card-item__li.card-info
                .card-info__left
                  h4.card-info__title No Lock-up Period
                  p Redeem your unTokens for the portion of the ReserveLending® asset pool they represent at any time.
                .card-info__right
                  BaseImage.eth-icon-4(
                    :src="require('images/spa-icon-4.svg')",
                    alt="icon",
                  )
          .card-item
            .card-item__label.caution
              BaseImage.warning-icon(
                :src="require('images/warning-icon.svg')",
                alt="warning-icon",
              )
              span CAUTION
            .card-item__top
              .card-item__icon
                BaseImage.eth-icon-2(
                  :src="require('images/eth-icon-2.svg')",
                  alt="eth-icon",
                )
              .card-item__title Borrow Assets
              .card-item__title-descr You can borrow assets on the ReserveLending® platform after enabling collateral
            ul.card-item__lists
              li.card-item__li.card-info
                .card-info__left
                  h4.card-info__title Use collateral
                    span.card-info__title-icon.right.icon-switch
                      BaseImage.toggle-icon(
                        :src="require('images/toggle-icon.svg')",
                        alt="toggle-icon",
                      )
                  p Supplying assets to the ReserveLending® platform allows you to use your supplied assets as collateral.
                .card-info__right
                  BaseImage.eth-icon-5(
                    :src="require('images/spa-icon-5.svg')",
                    alt="icon",
                  )
              li.card-item__li.card-info
                .card-info__left
                  h4.card-info__title Borrow assets
                  p Enabling collateral creates “Borrowing Power” which is directly correlated to 
                    | the amount of collateral provided on the supply side.
                .card-info__right
                  BaseImage.eth-icon-6(
                    :src="require('images/spa-icon-6.svg')",
                    alt="icon",
                  )
              li.card-item__li.card-info.card-accent
                .card-info__left
                  h4.card-info__title 
                    span.card-info__title-icon.left
                      BaseImage.warning-red-icon(
                        :src="require('images/warning-red-icon.svg')",
                        alt="icon",
                      )
                    span Liquidation Risks
                  p In the event that the balance of your borrow outpaces your maximum borrowing factor, ReserveLending® exchanges 
                    | the over-borrowed asset for the borrower’s supplied collateral, at a slightly lower than market rate.
                .card-info__right
                  BaseImage.eth-icon-7(
                    :src="require('images/spa-icon-7.svg')",
                    alt="icon",
                  )
              li.card-item__li.card-info
                .card-info__left
                  h4.card-info__title Manage Debt
                  p Manage your debt effectively at any time by repaying the balance of your borrow.
                .card-info__right
                  BaseImage.eth-icon-8(
                    :src="require('images/spa-icon-8.svg')",
                    alt="icon",
                  )
        //- .revards
        //-   .revards__left
        //-     .revards__logo
        //-       BaseImage.un-logo(
        //-         :src="require('images/un-logo.svg')",
        //-         alt="logo",
        //-       )
        //-     .revards__text
        //-       h3.revards__title ERSDL Rewards 
        //-       p Earn rewards in the form of eRSDL for participating in the platform
        //-   .revards__right
        //-     BaseBtn(classes="btn-rounded btn-with-arrow btn-gradient" text="Get Started" :link="link" :withArrow="true")
</template>

<script>
import BaseImage from 'Components/Base//BaseImage';
import BaseBtn from 'Components/Base/BaseBtn';
import CONFIG from 'Config';
export default {
  name: 'LendingCardSection',
  components: {
    BaseImage,
    BaseBtn
  },
  data() {
    return {
      link: CONFIG.urls.lendingMain
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'

.s-card-info
  padding-bottom: 150px
  position: relative
  @media screen and (max-width: 1199px)
    padding-bottom: 73px
  @media screen and (max-width: 991px)
    padding-bottom: 96px
  &::before
    content: ""
    position: absolute
    top: -470px
    left: 0
    right: 0
    width: 100%
    height: 2364px
    background: url('~images/wave-1.svg') no-repeat center
    background-size: cover
    @media screen and (max-width: 1199px)
      top: -388px
    @media screen and (max-width: 991px)
      top: -627px
  
.s-title
  margin-bottom: 105px
  font-size: 42px
  @media screen and (max-width: 1199px)
    margin-bottom: 76px
  @media screen and (max-width: 991px)
    margin-bottom: 68px
  @media screen and (max-width: 768px)
    font-size: 38px

.card-items
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  @media screen and (max-width: 991px)
    display: block

.card-item
  background: rgba(0, 0, 0, 0.11)
  border-radius: 20px
  width: calc(50% - 15px)
  padding: 47px 0 0 0
  position: relative
  margin-bottom: 37px
  @media screen and (max-width: 1199px)
    width: calc(50% - 12px)
    margin-bottom: 25px
  @media screen and (max-width: 991px)
    padding-bottom: 1px
    margin-bottom: 54px
    width: 100%
  &:last-child
    @media screen and (max-width: 991px)
      margin-bottom: 24px
  &__label
    position: absolute
    border-radius: 9px
    top: -20px
    left: 50%
    transform: translateX(-50%)
    margin: 0 auto
    font-size: 24px
    display: flex
    align-items: center
    justify-content: center
    line-height: 170%
    letter-spacing: 0.01em
    &.safe
      background: linear-gradient(180deg, #28BAC4 0%, #0AB3A8 100%)
      font-weight: 600
      padding: 1px 28px
    &.caution
      background: linear-gradient(180deg, #FF7A00 0%, #FF5C00 100%)
      border-radius: 9px
      font-weight: 700
      padding: 1px 16px 1px 13px
      img
        margin-right: 5px
  &__top
    text-align: center
    padding: 0 30px 30px 30px
    position: relative
    margin-bottom: 34px
    @media screen and (max-width: 991px)
      padding-bottom: 18px
      margin-bottom: 28px
    &::after
      content: ""
      position: absolute
      bottom: 0
      left: 30px
      height: 1px
      background-color: #4065D8
      width: calc(100% - 60px)
  &__icon
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 5px
  &__title
    font-weight: bold
    font-size: 40px
    line-height: 170%
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 4px
    @media screen and (max-width: 991px)
      font-size: 37px
      margin-bottom: 8px
    @media screen and (max-width: 374px)
      font-size: 32px
      line-height: 140%
      margin-bottom: 8px
  &__title-descr 
    font-weight: 500
    font-size: 14px
    line-height: 22px
    text-align: center
    letter-spacing: 0.01em
    color: #748DE3
    max-width: 344px
    margin: 0 auto
    @media screen and (max-width: 767px)
      max-width: 276px
  &__lists
    list-style-type: none
    margin: 0
    padding: 0

.card-info
  padding: 0 35px 0 55px 
  display: flex
  justify-content: space-between
  align-items: flex-start
  margin-bottom: 30px
  @media screen and (max-width: 991px)
    padding: 0 30px
    margin-bottom: 34px
  &.card-accent
    padding: 12px 35px 14px 55px 
    background: linear-gradient(90deg, rgba(229, 55, 55, 0.22) 0%, rgba(183, 52, 52, 0.11) 92.71%)
    margin-bottom: 19px
    @media screen and (max-width: 991px)
      padding: 12px 30px 14px 30px 
    .card-info__left
      p
        color: #E53737
  &__left
    max-width: 360px
    width: 100%
    margin-right: 25px
    p
      font-weight: 500
      font-size: 14px
      line-height: 22px
      letter-spacing: 0.01em
      color: #748DE3
      margin-bottom: 0
  &__title
    font-weight: 700
    font-size: 20px
    line-height: 140%
    letter-spacing: 0.01em
    color: #FFFFFF
    margin-bottom: 8px
    display: flex
    align-items: flex-start
    position: relative
  &__title-icon
    display: flex
    align-items: center
    &.icon-switch
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.08)
    &.right
      margin-left: 9px
      img
        max-width: 100%
    &.left
      margin-right: 7px
      margin-top: 6px
  &__right
    padding-top: 24px
    display: flex
    align-items: center

.revards
  background: linear-gradient(180deg, #2444C0 0%, #1F369A 100%)
  border: 3px solid #4C71EE
  box-shadow: 0px 1px 28px rgba(67, 130, 255, 0.26)
  border-radius: 25px
  display: flex
  justify-content: space-between
  align-items: center
  padding: 35px 42px 30px 48px
  @media screen and (max-width: 1199px)
    padding: 29px 35px 30px 48px

  @media screen and (max-width: 991px)
    flex-direction: column
    text-align: center
    padding: 18px 15px 40px 15px
  &__logo
    margin-right: 23px
    display: flex
    align-items: center
    @media screen and (max-width: 991px)
      margin-right: 0
  &__left
    display: flex
    align-items: center
    @media screen and (max-width: 991px)
      flex-direction: column
  &__right
    flex-shrink: 0
  &__title
    font-weight: 700
    font-size: 40px
    line-height: 60px
    letter-spacing: 0.01em
    color: #FFFFFF
    @media screen and (max-width: 991px)
      font-size: 37px
  &__text
    margin-right: 30px
    @media screen and (max-width: 1199px)
      max-width: 389px
    @media screen and (max-width: 991px)
      margin-right: 0
      margin-bottom: 40px
    p
      font-weight: 500
      font-size: 16px
      line-height: 156.5%
      letter-spacing: 0.01em
      color: #FFFFFF
      @media screen and (max-width: 991px)
        margin-bottom: 0

</style>
