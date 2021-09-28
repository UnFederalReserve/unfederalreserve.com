<template lang="pug">
  section.PartnersSection.s-partners
    .s-container
      h2.s-title Partners and Affiliates
      .partners-wrap
        .partner-item
          .partner-item__title Safety
          .partner-item__logos
            a.partner-item__logo(
              v-for="item in partnersSafety"
              :key="item.id"
              :href="item.href"
              target="_blank"
            )
              img(:src="require(`images/partners-logo/${item.logoName}`)")
        .partner-item
          .partner-item__title Inclusion
          .partner-item__logos
            a.partner-item__logo(
              v-for="item in partnersInclusion"
              :key="item.id"
              :href="item.href"
              target="_blank"
            )
              img(:src="require(`images/partners-logo/${item.logoName}`)")
        .partner-item.efficiency
          .partner-item__title Efficiency
          .partner-item__logos
            a.partner-item__logo(
              v-for="item in partnersEfficiency"
              :key="item.id"
              :href="item.href"
              target="_blank"
            )
              img(:src="require(`images/partners-logo/${item.logoName}`)")
        .partner-item.exchange
          .partner-item__title Exchange Listings
          .partner-item__logos
            a.partner-item__logo(
              v-for="item in partnersExchange"
              :key="item.id"
              :href="item.href"
              target="_blank"
            )
              img(:src="require(`images/partners-logo/${item.logoName}`)")

</template>

<script>

export default {
  name: 'PartnersSection',
  components: {
  },
  data() {
    return {
      partnersSafety: [
        {
          id: 1,
          href: 'https://www.galaxydigital.io/',
          logoName: '1.png',
        },
        {
          id: 2,
          href: 'https://onlinelendersalliance.org/',
          logoName: '2.png',
        },
        {
          id: 3,
          href: 'https://www.afponline.org/',
          logoName: '3.png',
        },
        {
          id: 4,
          href: 'https://www.chainalysis.com/',
          logoName: '4.png',
        },
        {
          id: 5,
          href: 'https://www.trailofbits.com/',
          logoName: '5.png',
        },
        {
          id: 6,
          href: 'https://www.bbb.org/',
          logoName: '6.png',
        },
        {
          id: 7,
          href: 'https://www.wsba.co/',
          logoName: '7.png',
        },
        {
          id: 8,
          href: 'https://www.acg.org/',
          logoName: '8.png',
        },
      ],
      partnersInclusion: [
        {
          id: 1,
          href: 'https://www.atipanacapital.com/',
          logoName: '9.png',
        },
        {
          id: 2,
          href: 'https://percent.com/',
          logoName: '10.png',
        },
        {
          id: 3,
          href: 'https://www.peerstreet.com/',
          logoName: '11.png',
        },
        {
          id: 4,
          href: 'https://www.yieldstreet.com/',
          logoName: '12.png',
        },
        {
          id: 5,
          href: 'http://www.cadrefinancial.com/process.html',
          logoName: '13.png',
        },
      ],
      partnersEfficiency: [
        {
          id: 1,
          href: 'https://nextplaytechnologies.com/home/default.aspx',
          logoName: '14.png',
        },
        {
          id: 2,
          href: 'https://chain.link/',
          logoName: '15.png',
        },
        {
          id: 3,
          href: 'https://www.fireblocks.com/',
          logoName: '16.png',
        },
        {
          id: 4,
          href: 'https://www.ifeb.bank/',
          logoName: '17.png',
        },
        {
          id: 5,
          href: 'https://www.computis.io/',
          logoName: '18.png',
        },
        {
          id: 6,
          href: 'https://kyc-chain.com/',
          logoName: '19.png',
        },
        {
          id: 7,
          href: 'https://www.circle.com/',
          logoName: '20.png',
        },
        {
          id: 8,
          href: 'https://www.corelogic.com/',
          logoName: '21.png',
        },
        {
          id: 9,
          href: 'https://securitize.io/',
          logoName: '22.png',
        },
        {
          id: 10,
          href: 'https://www.lexisnexis.com/',
          logoName: '23.png',
        },
        {
          id: 11,
          href: 'https://plaid.com/',
          logoName: '14.png',
        },
        {
          id: 12,
          href: 'http://equitytrust.org/',
          logoName: '25.png',
        },
      ],
      partnersExchange: [
        {
          id: 1,
          href: 'https://www.kucoin.com/',
          logoName: '26.png',
        },
        {
          id: 2,
          href: 'https://www.bitmart.com/',
          logoName: '27.png',
        },
        {
          id: 3,
          href: 'https://latoken.com/',
          logoName: '28.png',
        },
        {
          id: 4,
          href: 'https://uniswap.org/',
          logoName: '29.png',
        },
        {
          id: 5,
          href: 'https://sushi.com/',
          logoName: '30.png',
        },
        {
          id: 6,
          href: 'https://app.bancor.network/',
          logoName: '31.png',
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.s-partners
  position: relative
  padding: 160px 0 95px
  @media screen and (max-width: 767px)
    padding: 60px 0 20px
  &::before
    content: ""
    position: absolute
    top: -650px
    left: 0
    right: 0
    width: 100%
    height: 3621px
    background: url("~images/wave-4.svg") no-repeat center top
    background-size: cover
    @media screen and (max-width: 767px)
      display: none
  .s-title
    @media screen and (max-width: 767px)
      font-size: 38px!important
.partners-wrap
  margin-top: 45px
  @media screen and (max-width: 767px)
    margin-top: 32px
.partner-item
  $root: &

  margin-bottom: 23px
  &.efficiency
    #{$root}__logo
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(7),
      &:nth-child(8)
        width: 166px
      &:nth-child(3),
      &:nth-child(9)
        width: 214px
      &:nth-child(4),
      &:nth-child(10)
        width: 149px
      &:nth-child(5),
      &:nth-child(11)
        width: 113px
      &:nth-child(6),
      &:nth-child(12)
        width: 129px
  &.exchange
    #{$root}__logo
      width: 157px
  &__title
    font-weight: 600
    font-size: 22px
    line-height: 33px
    letter-spacing: 0.01em
    text-transform: uppercase
    color: #7091FD
    margin-bottom: 24px
  &__logos
    display: flex
    flex-wrap: wrap
    margin: 0 -6px
  &__logo
    position: relative
    margin: 0 6px 10px
    display: flex
    align-items: center
    justify-content: center
    padding: 5px 20px
    height: 58px
    background: rgba(32, 59, 176, 0.61)
    border-radius: 10px
    opacity: 1!important
    &:hover
      img
        filter: brightness(0) invert(1)
    img
      max-width: 100%

</style>
