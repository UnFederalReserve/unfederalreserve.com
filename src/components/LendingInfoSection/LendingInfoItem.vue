<template lang="pug">
  .info-item
    .info-item__video-img(@click="showModal = true")
      BaseImage.video-preview(
        :src="img",
        alt="preview",
      )
    a.info-item__inner
      span.info-item__title {{title}}
      span.info-item__bottom
        span.info-item__text {{description}}
        span.info-item__icon
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="27" stroke="url(#paint0_linear)" stroke-width="2"/>
            <path d="M18.3824 27.0147C18.4765 26.9998 18.5718 26.993 18.6671 26.9942H34.8931L34.5393 26.8343C34.1935 26.6752 33.8788 26.4587 33.6095 26.1946L29.0593 21.7732C28.46 21.2174 28.3594 20.3231 28.8207 19.6545C29.3576 18.942 30.3873 18.7872 31.1207 19.309C31.1799 19.3512 31.2362 19.3971 31.2892 19.4466L39.5174 27.4419C40.1604 28.066 40.161 29.0785 39.5186 29.7033C39.5182 29.7037 39.5178 29.7042 39.5174 29.7046L31.2892 37.6999C30.6456 38.3235 29.6037 38.3221 28.9619 37.6967C28.9114 37.6475 28.8642 37.5952 28.8207 37.54C28.3594 36.8713 28.46 35.9771 29.0593 35.4212L33.6013 30.9918C33.8427 30.757 34.1203 30.56 34.4241 30.4082L34.9178 30.1923H18.7576C17.917 30.2226 17.1794 29.652 17.0215 28.8491C16.876 27.9773 17.4853 27.1561 18.3824 27.0147Z" fill="#496DEA"/>
            <defs>
              <linearGradient id="paint0_linear" x1="28" y1="0" x2="28" y2="56" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4C71EE"/>
                <stop offset="1" stop-color="#1438AE"/>
              </linearGradient>
            </defs>
          </svg>
      BaseModal(v-if="showModal" @close="showModal = false")
        template(slot="content")
          iframe(width="100%" height="535" :src="videoSrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
import BaseModal from 'Components/Base/BaseModal';
export default {
  name: "LendingInfoItem",
  components: {
    BaseImage,
    BaseModal
  },
  props: {
    img: String,
    title: String,
    description: String,
    videoSrc: String
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="sass" scoped>

.info-item
  position: relative
  width: calc(33.3333% - 30px)
  margin: 0 15px 73px
  display: flex
  flex-direction: column
  @media screen and (max-width: 1199px)
    width: calc(33.3333% - 24px)
    margin: 0 12px 66px
  @media screen and (max-width: 991px)
    width: calc(50% - 24px)
  @media screen and (max-width: 767px)
    width: 100%
  &:hover
    .info-item__inner
      background: linear-gradient(180deg, #0D32A8 0%, #1A2B89 100%)
      border-color: #4C71EE
      box-shadow: 0px 1px 25px rgba(67, 130, 255, 0.32)
    .info-item__icon
      filter: drop-shadow(0px 0px 7px #4382FF)
      &::before
        opacity: 1
        visibility: visible
      svg
        path
          fill: #fff
  &__video-img
    position: absolute
    top: -20px
    max-width: 237px
    width: 100%
    left: 50%
    transform: translateX(-50%)
    z-index: 1
    display: flex
    align-items: center
    cursor: pointer
  &__inner
    background: rgba(0, 0, 0, 0.11)
    border-radius: 25px
    padding: 177px 30px 20px 30px
    display: flex
    flex: 1
    flex-direction: column
    opacity: 1!important
    border: 2px solid transparent
    @media screen and (max-width: 1199px)
      padding: 177px 15px 20px 27px
  &__title
    font-weight: bold
    font-size: 22px
    line-height: 170%
    letter-spacing: 0.01em
    margin-bottom: 13px
    color: #FFFFFF
    display: block
    flex: 1
  &__bottom
    display: flex
    align-items: flex-start
    justify-content: space-between
    flex: 1
  &__text
    font-weight: 500
    font-size: 16px
    line-height: 156.5%
    letter-spacing: 0.01em
    color: #748DE3
    margin-right: 10px
  &__icon
    display: flex
    align-items: center
    position: relative
    &::before
      content: ""
      position: absolute
      width: 100%
      height: 100%
      border-radius: 10em
      border: 2px solid #4F76FF
      top: 0
      left: 0
      opacity: 0
      visibility: hidden
      transition: 0.3s
</style>