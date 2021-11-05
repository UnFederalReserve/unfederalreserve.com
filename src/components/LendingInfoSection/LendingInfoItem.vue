<template lang="pug">
  .info-item
    .info-item__inner(@click="showModal = true")
      .info-item__video-img
        BaseImage.video-preview(
          :src="require('images/video-preview.png')",
          alt="preview",
        )
      span.info-item__title {{title}}
      span.info-item__bottom
        span.info-item__text {{description}}
    BaseModal(v-if="showModal" @close="showModal = false")
      template(slot="content")
        iframe(width="100%" height="535" class="info-item__iframe" :src="videoSrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
import BaseImage from 'Components/Base/BaseImage';
import BaseModal from 'Components/Base/BaseModal';

export default {
  name: 'LendingInfoItem',
  components: {
    BaseImage,
    BaseModal,
  },
  props: {
    title: String,
    description: String,
    videoSrc: String,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
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
    margin: 0 0 62px
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

  &__iframe
    @media screen and (max-width: 767px)
      height: 380px
  &__video-img
    position: absolute
    top: -30px
    max-width: 237px
    width: 100%
    left: 50%
    transform: translateX(-50%)
    z-index: 1
    display: flex
    align-items: center
  &__inner
    background: rgba(0, 0, 0, 0.11)
    border-radius: 25px
    padding: 177px 24px 20px 30px
    display: flex
    flex: 1
    cursor: pointer
    flex-direction: column
    opacity: 1!important
    border: 2px solid transparent
    @media screen and (max-width: 1199px)
      padding: 177px 15px 20px 27px
    @media screen and (max-width: 991px)
      padding-top: 172px
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
    @media screen and (max-width: 767px)
      margin-right: 18px
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
