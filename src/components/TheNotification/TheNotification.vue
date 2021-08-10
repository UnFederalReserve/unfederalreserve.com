<template lang="pug">
  .notification-wrap(
    v-if="isOpen"
  )
    .notification-item
      .notification-item__container
        .notification-item__info
          .notification-item__icon
            Warning
          p
            a(
              href="https://unfederalreserve.medium.com/safety-first-when-choosing-an-exchange-b7cca0d332e9" 
              target="_blank"
              class="link-intro"
            )
              strong.intro Important Note:
            | &nbsp;Safety First When Choosing an Exchange&nbsp;
            a(
              href="https://unfederalreserve.medium.com/safety-first-when-choosing-an-exchange-b7cca0d332e9" 
              target="_blank"
            ) more info
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
  methods: {
    closeNotif() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="sass">
.notification-wrap
  &+.header
    top: 55px
    @media screen and (max-width: 480px)
      top: 75px
    .header-wrap
      padding-top: 30px
    &+.v-main
      margin-top: 55px!important
      @media screen and (max-width: 480px)
        margin-top: 75px!important
    .general-wrap
      &.fixed
        top: 55px
        @media screen and (max-width: 480px)
          top: 75px
.notification-item
  background: #274191
  position: fixed
  width: 100%
  z-index: 9
  min-height: 55px
  display: flex
  align-items: center
  padding: 10px 0
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
    align-items: center
    font-weight: 400
    font-size: 14px
    line-height: 170%
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
  &__close
    display: flex
    align-items: center
    cursor: pointer
    transition: 0.3s
    &:hover
      opacity: 0.8
</style>
