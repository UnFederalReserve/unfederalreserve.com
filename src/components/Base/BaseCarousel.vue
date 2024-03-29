<template lang="pug">
  .carousel-component(:style="{'min-height': `${itemHeight}px`}")
    .carousel-component__inner(:style="{'min-height': `${itemHeight}px`}")
      .carousel-item-wrap(
        v-for="(item, index) in data"
        :key="item.id"
        :class="current === index ? 'active' : ''"
        :style="{transform: `translate3d(${position(index) * 100}%, -50%, 0)`}"
        ref="carousel"
      )
        slot(:data="item")
    ul.carousel-dots(
        :style="{'top': `calc((${itemHeight}px - ${top}px) / 2 + 20px)`}"
      )
        li(
          v-for="(dot, index) in data"
          :key="dot.id"
          class="dot-item"
          :class="current === index ? ' active' : ''"
        )
    .carousel-prev(@click="decreaseCurrent")
      img(:src="require('images/slider-arrow-left.svg')")
    .carousel-next(@click="increaseCurrent")
      img(:src="require('images/slider-arrow-right.svg')")
</template>

<script>

export default {
  name: 'BaseCarousel',
  props: {
    data: Array,
  },
  data() {
    return {
      current: 0,
      itemHeight: null,
      top: null,
    };
  },
  mounted() {
    this.checkHeight();
    this.dotSetOffset();
  },
  methods: {
    dotSetOffset() {
      this.$refs.carousel.forEach((item) => {
        const el = item.querySelector('.content-height');
        setTimeout(() => {
          if (item.classList.contains('active')) {
            this.top = el.clientHeight;
          }
        }, 100);
      });
    },
    checkHeight() {
      this.$refs.carousel.forEach((item) => {
        if (item.clientHeight > this.itemHeight) {
          this.itemHeight = item.clientHeight;
        }
      });
    },
    decreaseCurrent() {
      this.current += this.data.length - 1;
      this.current %= this.data.length;
      this.dotSetOffset();
    },
    increaseCurrent() {
      this.current += 1;
      this.current %= this.data.length;
      this.dotSetOffset();
    },
    position(index) {
      if (index === this.current) return 0;
      if (index === (this.current + 1) % this.data.length) return 1;
      return -1;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.carousel-component
  position: relative
  display: flex
  align-items: center
  justify-content: center
  @media screen and (max-width: 991px)
    padding-bottom: 65px
  &__inner
    max-width: 934px
    width: 100%
    margin: 0 auto
    position: relative
    overflow: hidden

.carousel-item-wrap
  visibility: hidden
  position: absolute
  top: 50%
  left: 0
  width: 100%
  transition: 0.5s
  &.active
    visibility: visible

.carousel-prev,
.carousel-next
  position: absolute
  top: 50%
  transform: translateY(-50%)
  display: flex
  align-items: center
  justify-content: center
  width: 40px
  height: 40px
  border: 2px solid #4C70EE
  border-radius: 100%
  cursor: pointer
  transition: 0.3s
  z-index: 9
  @media screen and (max-width: 991px)
    top: auto
    bottom: -10px
  &:hover
    opacity: 0.8

.carousel-prev
  left: 0
.carousel-next
  right: 0
.carousel-dots
  display: flex
  align-items: center
  position: absolute
  z-index: 1
  right: 0
  top: 50px
  list-style-type: none
  width: 100%
  max-width: 934px
  left: 0
  margin: 0 auto
  padding-left: 0
  justify-content: flex-end
  @media screen and (max-width: 991px)
    top: auto!important
    bottom: 25px
    width: 100%
    justify-content: center
    padding: 0
.dot-item
  width: 9px
  height: 9px
  border-radius: 100%
  background: #4C70EE
  margin: 0 4px
  &.active
    background-color: #fff
</style>
