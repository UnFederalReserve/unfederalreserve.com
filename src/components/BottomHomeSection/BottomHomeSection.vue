<template lang="pug">
  section.BottomHomeSection.s-bottom
    .s-container
      h2.s-title Watch a Video About unFederalReserve
      .tv-wrap
        .tv-img
          img(:src="require('images/tv.svg')")
          .play-video-btn(@click="showModal = true")
            BaseImage.play-icon(
              :src="require('images/play-video.svg')",
              alt="play icon",
            )
        .youtube-info
          span More video on our YouTube channel
          a(href="#")
            img(:src="require('images/youtube.svg')")
        BaseModal(v-if="showModal" @close="showModal = false")
          template(slot="content")
            iframe(
              width="100%" height="535" src="https://www.youtube.com/embed/BBTVYIXXrag"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            )

</template>

<script>
import BaseImage from 'Components/Base//BaseImage';
import BaseModal from 'Components/Base/BaseModal';

export default {
  name: 'BottomHomeSection',
  components: {
    BaseImage,
    BaseModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.s-bottom
  position: relative
  .s-container
    position: static
  &::before
    content: ""
    position: absolute
    top: -348px
    left: 0
    right: 0
    width: 100%
    height: 1194px
    background: url("~images/bottom-main-bg.svg") no-repeat center top
    background-size: cover
.tv-wrap
  position: relative
  text-align: center
.tv-img
  position: relative
  left: -170px
  top: 120px
  &::before
    content: ""
    position: absolute
    top: -95px
    left: -95px
    width: 566px
    height: 323px
    background: url("~images/diver-1.png") no-repeat center top
    background-size: cover
  &::after
    content: ""
    position: absolute
    top: -260px
    right: 30px
    width: 317px
    height: 479px
    background: url("~images/diver-2.png") no-repeat center top
    background-size: cover
  .play-video-btn
    position: absolute
    z-index: 1
    left: 50%
    top: calc(50% + 35px)
    cursor: pointer
    transform: translate(-50%, -50%)
    transition: 0.3s
    &:hover
      transform: translate(-50%, -50%) scale(1.1)
    img
      max-width: 100%
.s-title
  position: relative
  z-index: 1
.youtube-info
  position: absolute
  right: 0
  bottom: 0
  z-index: 3
  max-width: 270px
  width: 100%
  margin-left: auto
  margin-right: 255px
  font-weight: 700
  font-size: 14px
  line-height: 130%
  text-align: left
  letter-spacing: 0.01em
  color: #FFFFFF
  a
    opacity: 1!important
    &:hover
      opacity: 0.8!important
  span
    display: block
    margin-bottom: 15px
</style>
