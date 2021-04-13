<template lang="pug">
  section.HeroSection.hero
    .hero-content
      .hero-content__wrap
        h1 Your Middle-Market DeFi Solution
        p UnFederalReserve is a banking Saas company built on blockchain technology.
          |  Our banking products are designed for smaller U.S. Treasury chartered banks
          |  and non-bank lenders in need of greater liquidity without sacrificing security
          |  or compliance.
          span  Hit the button below and create or manage a stake account and purchase our token.
        div.btn-container
          v-btn(href="https://app.unfederalreserve.com")
            | Stake
          dropdown-menu(v-model="show", :closeOnClickOutside="closeOnClickOutside")
            div.btn-drop
              | Documents
            div.menu-drop(slot="dropdown")
              a(
                :href="require('docs/Residual_Token_Whitepaper_091520_CONFIDE.pdf')",
                target="_blank",
              ) Whitepaper
              a(
                :href="require('docs/LitePaperRSDL.pdf')",
                target="_blank",
              ) Litepaper
</template>


<script>

import DropdownMenu from 'Components/DropdownMenu/DropdownMenu';

export default {
  name: 'HeroSection',
  components: {
    DropdownMenu,
  },
  data() {
    return {
      show: false,
      right: false,
      hover: false,
      interactive: false,
      transition: false,
      closeOnClickOutside: true,
    };
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
  height: 1200px
  @media screen and (min-width: 2200px)
    height: 1200px
  @media screen and (min-width: 2700px)
    height: 1500px
  @media screen and (max-width: 900px)
    background-position: left bottom
    background-image: url('~images/hero-section-mobile.svg')
  @media screen and (max-width: 576px)
    height: 1100px

  &-content
    width: 100%
    margin: 0 auto
    max-width: 1140px
    padding-left: 15px
    padding-right: 15px

    &__wrap
      padding-top: 160px
      max-width: 486px
      width: 100%

      h1
        font-size: 60px
        line-height: 60px

      @media screen and (max-width: 576px)
        padding-top: 90px

      h1
        margin-bottom: 40px
        @media screen and (max-width: 576px)
          max-width: 225px

      p
        margin-bottom: 40px
        @media screen and (max-width: 576px)
          max-width: 283px

        span
          color: $blue
      .btn-container
        display: flex
        flex-wrap: wrap
        align-items: center
        .v-btn:nth-child(1)
          margin-bottom: 20px
          height: 70px
          min-width: auto
          padding: 0 50px
          margin-right: 30px
          @media screen and (max-width: 576px)
            min-width: 145px
            span
              display: none
        .dropdown
          margin-bottom: 20px
          width: 160px
          .btn-drop
            background: $blue-20
            color: $blue
            min-width:  220px
            cursor: pointer
            border-radius: 100px
            height: 70px
            box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)
            align-items: center
            display: inline-flex
            justify-content: center
            font-size: 24px
            flex: 0 0 auto
            font-weight: 600
            letter-spacing: normal
            outline: 0
            position: relative
            border: solid 3px $blue
            &:hover
              background: linear-gradient(180deg, #D7E0FF 0%, #EAEFFF 0.01%, #D1DCFF 100%)
            &:after
              display: inline-block
              margin-left: .255em
              vertical-align: .255em
              content: ""
              border-top: .3em solid
              border-right: .3em solid transparent
              border-bottom: 0
              border-left: .3em solid transparent
          .menu-drop
            display: flex
            flex-direction: column
            border: 3px solid #8199d2
            background: #EFF6FF
            position: absolute
            margin-top: 20px
            border-radius: 20px
            min-width:  220px
            a
              font-size: 24px
              color: $blue
              font-weight: 600
              padding: 10px 30px
              &:nth-child(1)
                padding-top: 30px
                border-top-right-radius: 20px
                border-top-left-radius: 20px
              &:last-child
                border-bottom-left-radius: 20px
                border-bottom-right-radius: 20px
                padding-bottom: 30px
              &:hover
                background: linear-gradient(180deg, #D7E0FF 0%, #EAEFFF 0.01%, #D1DCFF 100%)
</style>
