<template lang="pug">
  section.s-news
    .s-container
      h2.s-title Latest news
      .news-wrap
        a.twitter-timeline(
          href="https://twitter.com/Unfederalreser1?ref_src=twsrc%5Etfw"
          data-height="600"
          data-width="100%"
          data-chrome="nofooter") Tweets by Unfederalreser1

</template>

<script>
import BaseImage from 'Components/Base/BaseImage';

export default {
  name: 'LendingNewsSection',
  components: {
    BaseImage,
  },
  mounted() {
    this.initTw();
  },
  methods: {
    initTw() {
      const twt = document.getElementById('twt');
      if (!twt) {
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.src = 'https://platform.twitter.com/widgets.js';
        script.setAttribute('id', 'twt');
        document.querySelector('head').appendChild(script);
      }
    },
  },
};
</script>

<style lang="sass" scoped>

.s-news
  padding: 0 0 208px
  text-align: center
  position: relative
  &::before
    content: ""
    position: absolute
    background: url('~images/news-circle-bg.svg') no-repeat center
    background-size: cover
    left: 50%
    transform: translateX(-50%)
    right: 0
    top: -125px
    width: 1042px
    height: 1042px
    @media screen and (max-width: 767px)
      width: 100%
      height: 100%
      top: -40px
  .s-title
    margin-bottom: 37px
    font-size: 42px
    @media screen and (max-width: 991px)
      font-size: 38px

.news-wrap
  overflow: hidden
  border-radius: 15px
  display: inline-flex
  align-items: center
  max-width: 700px
  width: 100%
  img
    max-width: 100%

</style>
