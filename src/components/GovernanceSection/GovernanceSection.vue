<template lang="pug">
  section.GovernanceSection.s-governance
    .s-container
      h2.s-title Governance
      .snapshot-items
        a(href="https://snapshot.org/#/unfederalreserve.eth" target="_blank").snapshot-item
          .snapshot-item__img
            img(:src="require('images/lightning-2.png')")
          .snapshot-item__right
            .snapshot-item__text
              span ersdl Voting on
              strong snapshot
            .snapshot-item__icon
              img(:src="require('images/external-link.svg')")
        a(href="https://snapshot.org/#/unersdl.eth" target="_blank").snapshot-item
          .snapshot-item__img
            img(:src="require('images/lightning-1.png')")
          .snapshot-item__right
            .snapshot-item__text
              span unersdl Voting on
              strong snapshot
            .snapshot-item__icon
              img(:src="require('images/external-link.svg')")
</template>

<script>

export default {
  name: 'GovernanceSection',
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
.s-governance
  position: relative
  padding: 150px 0 256px
  &::before
    content: ""
    position: absolute
    top: -130px
    left: 0
    right: 0
    width: 100%
    height: 786px
    background: url('~images/wave-5.svg') no-repeat center top
    background-size: cover
.snapshot-items
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: wrap
.snapshot-item
  max-width: 350px
  width: 100%
  margin: 0 15px 20px
  padding: 11px 28px
  display: flex
  align-items: center
  background: linear-gradient(90deg, #273490 0%, #132172 100%)
  border: 3px solid #3377FF
  opacity: 1!important
  border-radius: 64px
  @media screen and (max-width: 767px)
    padding: 11px 20px
  &:hover
    box-shadow: 0px 0px 0px 5px rgba(91, 123, 255, 0.24)
  &__img
    margin-right: 10px
    display: flex
    align-items: center
    flex-shrink: 0
  &__right
    width: 100%
    display: flex
    align-items: center
    span
      display: block
      font-size: 12px
      line-height: 130%
      letter-spacing: 0.01em
      text-transform: uppercase
      color: #FFFFFF
    strong
      display: block
      font-weight: 700
      font-size: 26px
      line-height: 29px
      letter-spacing: 0.01em
      color: #FFFFFF
  &__text
    width: 100%
  &__icon
    display: flex
    align-items: center
    margin-left: 15px
    flex-shrink: 0

.s-title
  margin-bottom: 37px
  @media screen and (max-width: 767px)
    font-size: 38px!important
</style>
