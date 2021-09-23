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
            )
              img(:src="require(`images/partners-logo/${item.logoName}`)")
        .partner-item
          .partner-item__title Inclusion
          .partner-item__logos
            a.partner-item__logo(
              v-for="item in partnersInclusion"
              :key="item.id"
              :href="item.href"
            )
              img(:src="require(`images/partners-logo/${item.logoName}`)")
        .partner-item
          .partner-item__title Efficiency
          .partner-item__logos
            a.partner-item__logo(
              v-for="item in partnersEfficiency"
              :key="item.id"
              :href="item.href"
            )
              img(:src="require(`images/partners-logo/${item.logoName}`)")
        .partner-item
          .partner-item__title Exchange Listings
          .partner-item__logos
            a.partner-item__logo(
              v-for="item in partnersExchange"
              :key="item.id"
              :href="item.href"
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
          href: '#',
          logoName: '1.png',
        },
        {
          id: 2,
          href: '#',
          logoName: '2.png',
        },
        {
          id: 3,
          href: '#',
          logoName: '3.png',
        },
        {
          id: 4,
          href: '#',
          logoName: '4.png',
        },
        {
          id: 5,
          href: '#',
          logoName: '5.png',
        },
        {
          id: 6,
          href: '#',
          logoName: '6.png',
        },
        {
          id: 7,
          href: '#',
          logoName: '7.png',
        },
        {
          id: 8,
          href: '#',
          logoName: '8.png',
        },
      ],
      partnersInclusion: [
        {
          id: 1,
          href: '#',
          logoName: '9.png',
        },
        {
          id: 2,
          href: '#',
          logoName: '10.png',
        },
        {
          id: 3,
          href: '#',
          logoName: '11.png',
        },
        {
          id: 4,
          href: '#',
          logoName: '12.png',
        },
        {
          id: 5,
          href: '#',
          logoName: '13.png',
        },
      ],
      partnersEfficiency: [
        {
          id: 1,
          href: '#',
          logoName: '14.png',
        },
        {
          id: 2,
          href: '#',
          logoName: '15.png',
        },
        {
          id: 3,
          href: '#',
          logoName: '16.png',
        },
        {
          id: 4,
          href: '#',
          logoName: '17.png',
        },
        {
          id: 5,
          href: '#',
          logoName: '18.png',
        },
        {
          id: 6,
          href: '#',
          logoName: '19.png',
        },
        {
          id: 7,
          href: '#',
          logoName: '20.png',
        },
        {
          id: 8,
          href: '#',
          logoName: '21.png',
        },
        {
          id: 9,
          href: '#',
          logoName: '22.png',
        },
        {
          id: 10,
          href: '#',
          logoName: '23.png',
        },
        {
          id: 11,
          href: '#',
          logoName: '14.png',
        },
        {
          id: 12,
          href: '#',
          logoName: '25.png',
        },
      ],
      partnersExchange: [
        {
          id: 1,
          href: '#',
          logoName: '26.png',
        },
        {
          id: 2,
          href: '#',
          logoName: '27.png',
        },
        {
          id: 3,
          href: '#',
          logoName: '28.png',
        },
        {
          id: 4,
          href: '#',
          logoName: '29.png',
        },
        {
          id: 5,
          href: '#',
          logoName: '30.png',
        },
        {
          id: 6,
          href: '#',
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
.partners-wrap
  margin-top: 45px
.partner-item
  margin-bottom: 23px
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
