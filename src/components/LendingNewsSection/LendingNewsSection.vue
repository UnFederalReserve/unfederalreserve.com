<template lang="pug">
  section.s-news
    .s-container
      h2.s-title Latest news
      .news-wrap
        .twitter-timeline(ref="tw")

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
    setTimeout(() => {
      this.loadTw();
    }, 2000);
  },

  methods: {
    initTw() {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = 'https://platform.twitter.com/widgets.js';
      script.setAttribute('id', 'twt');
      document.querySelector('head').appendChild(script);
    },
    loadTw() {
      const dataSource = {
        sourceType: 'profile',
        screenName: 'Unfederalreser1',
      };
      const target = this.$refs.tw;
      const options = {
        chrome: 'nofooter',
        height: 800,
        width: '100%',
      };
      window.twttr.ready(() => {
        if (target) window.twttr.widgets.createTimeline(dataSource, target, options);
      });
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
.twitter-timeline
  width: 100%
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
