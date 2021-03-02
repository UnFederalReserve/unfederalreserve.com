<template lang="pug">
  .OurLeadersSection.our-leaders
    .our-leaders-header
      h2 Leadership
      router-link.link-2(:to="{name: 'team'}") Show more
    .our-leaders__team
      TeamBigThumbnail(
        v-for="(item, i) in team"
        :key="i"
        v-bind="item",
      )
    router-link.link-2.mobile-link(:to="{name: 'team'}") Show more
</template>

<script>
import TeamBigThumbnail from 'Components/TeamBigThumbnail/TeamBigThumbnail';

export default {
  name: 'OurLeadersSection',
  components: {
    TeamBigThumbnail,
  },
  props: {
    team: Array,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.our-leaders
  width: 100%
  max-width: 1140px
  padding: 0 15px
  margin: 0 auto
  margin-top: 190px
  margin-bottom: 160px
  display: flex
  flex-direction: column
  justify-content: space-between
  @media screen and (max-width: 767px)
    margin-top: 100px
    margin-bottom: 100px
    flex-wrap: wrap
    flex-direction: column
    justify-content: center
    align-items: flex-start
  &-header
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    margin-bottom: 65px
    @media screen and (max-width: 767px)
      width: 100%
      margin-bottom: 20px
    h2
      color: $white
    a
      @media screen and (max-width: 767px)
        display: none !important
  &__team
    ::v-deep .thumbnail
      margin-bottom: 40px
      background: rgba(0, 0, 0, 0.08)
      @media screen and (min-width: 767px)
        min-height: 638px
      @media screen and (max-width: 767px)
        margin-bottom: 10px
        &.active
          background: transparent
      @media screen and (max-width: 767px)
        .thumbnail-description
          .desc
            opacity: 0
            overflow: hidden
            height: 0
            margin-top: 0
      .thumbnail-image
        margin-right: 30px
      &:last-child
        .image
          background-position: left center
      &.active
        @media screen and (max-width: 767px)
          .thumbnail-description
            .desc
              opacity: 1
              overflow: visible
              height: 100%
              margin-top: 20px
  .mobile-link
    margin-top: 15px
    margin-left: 15px
    @media screen and (min-width: 768px)
      display: none !important
</style>
