<template lang="pug">
  .notification-wrap(
    v-if="isOpen"
  )
    .notification-item(ref="notifItem")
      .notification-item__container
        .notification-item__info
          .notification-item__icon
            Warning
          p
            a(
              href="https://unfederalreserve.medium.com/new-stablecoin-apy-methodology-and-impact-on-liquidity-for-reservelending-participants-f36686e763da"
              target="_blank"
              class="link-intro"
            )
              strong.intro Update unFed Agents:
            | &nbsp;Please be advised in accordance with our newly launched policy,
            | adjustments will be made to APY model for #stablecoins.
            | You may notice a change in rates as a result.&nbsp;
            a(
              href="https://unfederalreserve.medium.com/new-stablecoin-apy-methodology-and-impact-on-liquidity-for-reservelending-participants-f36686e763da"
              target="_blank"
            ) More info
        .notification-item__close(
          @click="closeNotif"
        )
          Close
</template>

<script>
import Warning from 'images/svg-icons/warning.svg';
import Close from 'images/svg-icons/close.svg';

export default {
  name: 'TheNotification',
  components: {
    Warning,
    Close,
  },
  data() {
    return {
      isOpen: true,
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
  min-height: 55px
  display: flex
  align-items: center
  padding: 7px 0
  @media screen and (max-width: 480px)
    min-height: 75px
  &__container
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    max-width: 1140px
    padding-left: 15px
    padding-right: 15px
    margin: 0 auto
  &__info
    display: flex
    align-items: flex-start
    font-weight: 400
    font-size: 14px
    line-height: 150%
    letter-spacing: 0.01em
    color: #FFFFFF
    word-break: break-word
    padding-right: 10px
    @media screen and (max-width: 767px)
      font-size: 12px
      line-height: 150%
    a
      text-decoration: underline!important
      opacity: 1!important
      font-size: 14px!important
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
  &__icon
    display: flex
    align-items: center
    flex-shrink: 0
    margin-right: 10px
    margin-top: 4px
  &__close
    display: flex
    align-items: center
    cursor: pointer
    transition: 0.3s
    &:hover
      opacity: 0.8
</style>
