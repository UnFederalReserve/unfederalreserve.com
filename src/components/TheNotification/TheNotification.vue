<template lang="pug">
  .notification-wrap(
    v-if="isOpen"
  )
    .notification-item(ref="notifItem")
      .notification-item__container
        .notification-item__info
          .notification-item__icon
            NotifIcon
          .notification-item__text
            p
              | Please be advised in accordance with our newly launched policy,
              | adjustments will be made to the APY model for stablecoins.
              | You may notice a change in rates as a result.&nbsp;
            a(
              href="https://unfederalreserve.medium.com/new-stablecoin-apy-methodology-and-impact-on-liquidity-for-reservelending-participants-f36686e763da"
              target="_blank"
              class="more-info"
            ) More info
        .notification-item__close(
          @click="closeNotif"
        )
          Close
</template>

<script>
import Close from 'images/svg-icons/close.svg';
import NotifIcon from 'images/svg-icons/notif-icon.svg';

export default {
  name: 'TheNotification',
  components: {
    Close,
    NotifIcon,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    window.addEventListener('resize', this.resizeHundler);
    this.resizeHundler();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHundler);
  },
  methods: {
    closeNotif() {
      this.isOpen = false;
      this.$emit('notif-height', 0);
    },
    resizeHundler() {
      if (this.isOpen) {
        const height = this.$refs.notifItem.clientHeight;
        this.$emit('notif-height', height);
      }
    },
  },
};
</script>

<style lang="sass">
.notification-wrap
  &+.header
    .header-wrap
      padding-top: 30px
    .v-navigation-drawer
      padding-top: 130px !important
      @media screen and (max-width: 575px)
        padding-top: 150px !important
      @media screen and (max-width: 480px)
        padding-top: 180px !important
    &+.v-main
      padding-top: 55px!important
      @media screen and (max-width: 480px)
        padding-top: 80px!important
.notification-item
  background: #274191
  position: fixed
  width: 100%
  z-index: 9
  display: flex
  align-items: center
  @media screen and (max-width: 480px)
    min-height: 75px
  &__container
    position: relative
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    max-width: 1140px
    padding-left: 15px
    margin: 0 auto
    @media screen and (max-width: 767px)
      align-items: flex-start
      padding-left: 0
  &__info
    width: 100%
    display: flex
    align-items: center
    color: #FFFFFF
    word-break: break-word
    @media screen and (max-width: 767px)
      align-items: flex-start
    a
      text-decoration: underline!important
      opacity: 1!important
      font-weight: 500!important
      font-size: 12px!important
      line-height: 170%
      letter-spacing: 0.01em
      &.link-intro
        text-decoration: none !important
      @media screen and (max-width: 767px)
        font-size: 12px!important
      &:hover
        opacity: 0.8!important
    p
      margin-bottom: 0
    strong
      font-weight: 600
      &.intro
        white-space: nowrap
  &__text
    min-height: 55px
    width: 100%
    display: flex
    align-items: center
    justify-content: space-between
    padding: 7px 15px
    background-color: #203884
    @media screen and (max-width: 1300px)
      padding-right: 35px
    @media screen and (max-width: 767px)
      display: block
      line-height: 18px
    p
      max-width: 671px
      width: 100%
      font-weight: 500
      font-size: 12px
      line-height: 18px
      letter-spacing: 0.01em
      @media screen and (max-width: 767px)
        display: inline
    .more-info
      white-space: nowrap
      margin-left: 10px
      @media screen and (max-width: 767px)
        margin-left: 0
  &__icon
    flex-shrink: 0
    display: flex
    align-items: center
    flex-shrink: 0
    margin-right: 15px
    @media screen and (max-width: 767px)
      display: none
  &__close
    position: absolute
    right: -36px
    display: flex
    align-items: center
    cursor: pointer
    transition: 0.3s
    @media screen and (max-width: 1300px)
      right: 10px
    @media screen and (max-width: 767px)
      margin-top: 10px
</style>
