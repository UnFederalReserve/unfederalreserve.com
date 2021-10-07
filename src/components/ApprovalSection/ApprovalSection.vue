<template lang="pug">
  section.ApprovalSection.s-approval
    .s-container
      h2.s-title DeFi Llama Approval
      a(href="https://defillama.com/protocol/unfederalreserve" target="_blank").approval-item
        span unFederalReserve on
        img(:src="require('images/defilama.png')" class="defilama-img")
      .approval-wrap
        .approval-text
          .approval-text__content
            .approval-text__icon
            .approval-text__inner
              p We are your safe harbor when navigating uncharted waters.
                | unFederalReserve has selected premium elements of the crypto ecosystem
                | and wrapped it in a best-in-class regulatory framework that delivers its
                | middle-market clients a B2B lending, cash reporting and overnight lending/borrowing utility tool.
                | We offer the security of immutable records, near instantaneous settlement and encryption well
                | beyond what the largest global banks currently use.
              h3.approval-text__title unFederalReserve Creates a Safe Harbor
              p Sophisticated borrowers are experts at identifying mispriced opportunities.&nbsp;
                | Unsophisticated lenders, however, can be at the mercy of seasoned borrowing
                | professionals seeking to exploit risk vs yield mismatches. The unFederalReserve
                | safe harbor uses algorithm settings targeted to minimize those situations.
                | When it comes to speed, lending and borrowing transactions settle almost
                | instantaneously on our blockchain-enabled platform.
              .approval-text__bottom-descr
                p IRL Liquidity is limited. With unFederalReserve get
                  strong Accessible Liquidity and Lower Costs

</template>

<script>

export default {
  name: 'ApprovalSection',
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
.s-approval
  padding-bottom: 284px
  @media screen and (max-width: 767px)
    padding-bottom: 200px
.approval-item
  position: relative
  max-width: 350px
  width: 100%
  height: 71px
  padding: 5px 20px
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center
  background: linear-gradient(90deg, #273490 0%, #132172 100%)
  border: 3px solid #3377FF
  border-radius: 64px
  font-weight: 700!important
  font-size: 14px!important
  line-height: 130%
  letter-spacing: 0.01em
  color: #FFFFFF
  opacity: 1!important
  &:hover
    box-shadow: 0px 0px 0px 5px rgba(91, 123, 255, 0.24)
  &::before
    content: ""
    position: absolute
    background: url('~images/diver.svg') no-repeat center
    background-size: cover
    width: 493px
    height: 204px
    right: -600px
    top: -40px
  span
    margin-right: 12px
    word-break: break-all
  .defilama-img
    margin-top: 8px
.s-title
  margin-bottom: 40px
  @media screen and (max-width: 767px)
    font-size: 38px!important
.approval-wrap
  position: relative
  &::before
    content: ""
    width: 95px
    height: 95px
    margin: 0 auto
    top: -49px
    left: 0
    right: 0
    position: absolute
    background: url('~images/approval-logo.svg') no-repeat
.approval-text
  position: relative
  max-width: 920px
  width: 100%
  margin: 227px auto 0
  padding: 74px 32px 32px 32px
  color: #fff
  text-align: center
  border-radius: 26px
  overflow: hidden
  @media screen and (max-width: 767px)
    margin-top: 117px
    padding: 74px 22px 22px 22px
  &::after
    content: ""
    width: 100%
    height: 60px
    top: 0
    left: 0
    right: 0
    position: absolute
    background: url('~images/approval-bg.svg') no-repeat center
    background-size: cover
  &::before
    content: ""
    width: 100%
    height: 100%
    position: absolute
    top: 60px
    left: 0
    right: 0
    bottom: 0
    background: linear-gradient(180deg, #0c147c 0%, #050B5B 100%)
    opacity: 0.8
    border-bottom-left-radius: 26px
    border-bottom-right-radius: 26px
  &__content
    position: relative
    z-index: 1
    p
      margin-bottom: 19px
      font-size: 18px
      line-height: 170%
      text-align: center
      letter-spacing: 0.01em
      color: #FFFFFF
      @media screen and (max-width: 767px)
        text-align: left
      strong
        font-size: 25px
        font-weight: 700
  &__title
    margin-bottom: 20px
    font-weight: 700
    font-size: 40px
    line-height: 119%
    text-align: center
    letter-spacing: 0.01em
    color: #FFFFFF
    word-break: break-all
    @media screen and (max-width: 767px)
      font-size: 38px
      text-align: left
  &__bottom-descr
    padding-top: 22px
    margin-top: 35px
    border-top: 3px solid #0A1176
    p
      font-size: 20px
      margin-bottom: 0
      strong
        display: block
        font-size: 20px
</style>
