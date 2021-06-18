<template lang="pug">
  section.s-font
    .s-container
      h2.s-title Font
      .fonts-wrap
        .font-left
          .font-name Poppins
          .font-label Font Name
        .font-right
          .font-letters EeRrSsDdLl
          .font-weights
            span.regular Regular
            span.medium Medium
            span.semi-bold SemiBold
            span.bold Bold
      .font-download
        a(href="#" class="btn-rounded btn-white-bd") Download



      

</template>

<script>
import BaseImage from 'Components/Base/BaseImage';

export default {
  name: "BrandFontSection",
  components: {
    BaseImage
  }
}
</script>

<style lang="sass" scoped>

.s-font
  padding: 75px 0 150px
  background: url('~images/font-section-bg.svg') no-repeat right 253px bottom
  @media screen and (max-width: 1199px)
    background-position: right 0 bottom
  @media screen and (max-width: 767px)
    background: none
    padding: 75px 0 70px

.s-title
  margin-bottom: 49px
  @media screen and (max-width: 767px)
    margin-bottom: 29px

.fonts-wrap
  display: flex
  justify-content: space-between
  align-items: center
  flex-wrap: wrap
  @media screen and (max-width: 767px)
    flex-direction: column
    align-items: flex-start

.font-left
  padding-left: 100px
  @media screen and (max-width: 991px)
    padding-left: 18px
  @media screen and (max-width: 400px)
    padding-left: 0

.font-right
  @media screen and (max-width: 767px)
    padding-left: 18px
    margin-top: 28px
  @media screen and (max-width: 400px)
    padding-left: 0
  
.font-name 
  font-weight: 600
  font-size: 45px
  line-height: 67px
  letter-spacing: 0.01em
  color: #FFFFFF
  margin-bottom: 4px
  margin-top: 10px

.font-label
  font-size: 18px
  line-height: 170%
  letter-spacing: 0.01em
  color: #FFFFFF
  
.font-letters
  font-weight: 600
  font-size: 64px
  line-height: 96px
  letter-spacing: 0.01em
  color: #FFFFFF
  @media screen and (max-width: 400px)
    font-size: 48px

.font-weights
  display: flex
  align-items: center
  flex-wrap: wrap
  @media screen and (max-width: 767px)
    padding-left: 3px
  span
    margin-right: 41px
    letter-spacing: 0.01em
    font-size: 18px
    line-height: 170%
    margin-bottom: 10px
    &:last-child
      margin-right: 0
    @media screen and (max-width: 767px)
      margin-right: 34px
      font-size: 16px
    &.regular
      font-weight: 400
    &.medium
      font-weight: 500
    &.semi-bold
      font-weight: 600
    &.bold
      font-weight: 700


.font-download
  text-align: center
  margin-top: 75px
  @media screen and (max-width: 767px)
    margin-top: 53px
  a
    display: inline-block

</style>