<template lang="pug">
  section.HeroSection.hero
    .hero-content
      .hero-content__wrap
        h1 Be the Bank.
        h2 Fintech SaaS Solutions
        p unFederalReserve™ is a fintech SaaS company combining&nbsp;
          | software built on blockchain technology and 200 years
          | of consumer lending experience. ReserveLending™ is our live DeFi or P2P
          | lending and borrowing platform. Get the most from your crypto while
          | enjoying a safe and easy user experience by clicking the button below.
        p.bold-descr
          | Our banking products are designed for smaller U.S. Treasury
          | chartered banks and non-bank lenders in need of a DeFi strategy and
          | greater liquidity without sacrificing security or compliance. <br/>
          a(
            href="https://unfederalreserve.medium.com/unfederalreserve-and-percent-to-join-forces-e151cab7e90b" 
            target="_blank"
          ) Click here to learn more
        div.btn-container
          BaseBtn(
            classes="btn-rounded btn-with-arrow btn-blue"
            text="Get Started"
            :link="link"
          )
</template>


<script>
import CONFIG from 'Config';
import DropdownMenu from 'Components/DropdownMenu/DropdownMenu';
import BaseBtn from 'Components/Base/BaseBtn';

export default {
  name: 'HeroSection',
  components: {
    DropdownMenu,
    BaseBtn,
  },
  data() {
    return {
      show: false,
      right: false,
      hover: false,
      interactive: false,
      transition: false,
      closeOnClickOutside: true,
      link: CONFIG.urls.lendingMain,
    };
  },
  async mounted() {
    await this.marketDetailsHundler();
  },
  methods: {
    handleError(response) {
      if (!response.ok) throw new Error(response);

      return response.json();
    },
    getMarketDetails(apiUrl) {
      const url = `${apiUrl}/all_markets`;

      return fetch(url)
        .then(this.handleError)
        .catch(err => console.error(err));
    },
    async marketDetailsHundler() {
      this.marketData = await this.getMarketDetails(CONFIG.urls.marketApi);

      this.marketData.forEach((market) => {
        const [nowSupply] = market.supplyDaily;
        const symbol = market.symbol.slice(2);
        this.totalSupply += Number(nowSupply.total);

        if (symbol === 'USDC') {
          this.supplyApy = market.supplyDaily[0].apy;
        }
      });
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
@import "~Styles/_color"
.hero
  background-image: url('~images/hero-section.svg')
  background-repeat: no-repeat
  background-position: center bottom
  background-size: cover
  width: 100%
  min-height: 920px
  @media screen and (max-width: 767px)
    background-image: url('~images/mob-hero.svg')
    padding-bottom: 215px
  @media screen and (min-width: 2700px)
    min-height: 1200px
  &-content
    width: 100%
    margin: 0 auto
    max-width: 1140px
    padding-left: 15px
    padding-right: 15px

    &__wrap
      padding-top: 170px
      max-width: 635px
      width: 100%
      @media screen and (max-width: 767px)
        padding-top: 112px
      h1
        font-weight: 700
        font-size: 55px
        line-height: 120%
        letter-spacing: 0.01em
        color: #2C2C2C
        @media screen and (max-width: 767px)
          margin-bottom: 9px
      h2
        font-weight: 700
        font-size: 30px
        line-height: 130%
        letter-spacing: 0.01em
        color: #3377FF
        margin-bottom: 16px
        @media screen and (max-width: 767px)
          font-size: 28px
      p
        margin-bottom: 25px
        max-width: 520px
        width: 100%
        font-size: 14px
        line-height: 170%
        letter-spacing: 0.01em
        color: #6C8AAE
        &.bold-descr
          max-width: 506px
          font-weight: 600
          margin-bottom: 32px
        a
          font-weight: 600
          font-size: 14px
          line-height: 170%
          letter-spacing: 0.01em
          color: #6C8AAE
          text-decoration: underline
          opacity: 1
          &:hover
            opacity: 0.8
            color: #6C8AAE
      .btn-container
        margin-bottom: 20px
      .hero-bottom-links
        display: flex
        color: black
        font-weight: 500
        font-size: 16px
        line-height: 160%
        letter-spacing: 0.01em
        color: #042751
        a
          color: #366CEF
          &:hover
            text-decoration: underline
</style>
