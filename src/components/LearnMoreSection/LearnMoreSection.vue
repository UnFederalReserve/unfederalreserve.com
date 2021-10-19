<template lang="pug">
  section.LearnMoreSection.s-learn-more
    .s-container
      h2.s-title Learn More About What's Next
      .learn-more
        .learn-more__left
          .play-video-btn(@click="showModal = true")
            BaseImage.play-icon(
              :src="require('images/play-video.svg')",
              alt="play icon",
            )
          BaseImage.learn-more-img(
            :src="require('images/learn-more.png')",
            alt="img",
          )
        .learn-more__right
          BaseImage.rf-logo(
            :src="require('images/rf-logo.svg')",
            alt="logo",
          )
          span Powered by unFederalReserve™
          br
          p
            | The first licensee of Residual Token, Inc.
            br
            | ReserveFunding is a fund of funds that allows crypto holders to provide cash to
            | non-bank lenders leveraging SaaS and traditional financial service rails.
          BaseBtn(classes="btn-rounded btn-with-arrow btn-gradient" text="Join the Waitlist" :link="link" :withArrow="true")
        BaseModal(v-if="showModal" @close="showModal = false")
          template(slot="content")
            iframe(
              width="100%" height="535" src="https://www.youtube.com/embed/iiLPxlK49OQ?autoplay=1"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            )
</template>

<script>
import CONFIG from 'Config';
import BaseImage from 'Components/Base//BaseImage';
import BaseBtn from 'Components/Base/BaseBtn';
import BaseModal from 'Components/Base/BaseModal';

export default {
  name: 'LearnMoreSection',
  components: {
    BaseImage,
    BaseBtn,
    BaseModal,
  },
  data() {
    return {
      link: CONFIG.urls.fundingMain,
      showModal: false,
    };
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.s-learn-more
  position: relative
  padding: 75px 0 160px
  @media screen and (max-width: 767px)
    padding: 0
  &::before
    content: ""
    position: absolute
    left: 5%
    top: 50px
    width: 735px
    height: 702px
    background: url('~images/lm-bg.svg') no-repeat
    background-size: cover
    @media screen and (max-width: 767px)
      display: none
  .s-container
    position: static
.s-title
  position: relative
  z-index: 1
  @media screen and (max-width: 767px)
    font-size: 38px!important
.learn-more
  margin-top: 65px
  display: flex
  align-items: center
  justify-content: space-between
  @media screen and (max-width: 767px)
    display: block
  &__left, &__right
    position: relative
    width: calc(50% - 25px)
    z-index: 1
    @media screen and (max-width: 767px)
      width: 100%
  &__left
    position: relative
    display: flex
    align-items: center
    @media screen and (max-width: 767px)
      justify-content: center
      margin-bottom: 45px
    .play-video-btn
      position: absolute
      z-index: 1
      left: 50%
      top: calc(50% + 25px)
      cursor: pointer
      transform: translate(-50%, -50%)
      transition: 0.3s
      &:hover
        transform: translate(-50%, -50%) scale(1.1)
    img
      max-width: 100%
  span
    display: block
    margin-top: -8px
    margin-bottom: 22px
    font-weight: 500
    font-size: 14px
    line-height: 156%
    letter-spacing: 0.095em
    color: #FFFFFF
  p
    max-width: 502px
    width: 100%
    margin-bottom: 38px
    font-weight: 500
    font-size: 14px
    line-height: 21px
    letter-spacing: 0.01em
    color: #90B1F3

</style>
