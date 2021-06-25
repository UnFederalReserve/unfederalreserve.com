<template lang="pug">
  .PageBrand.page-brand
    section.s-top
      .s-container
        .s-top__wrap
          h1.top-title Brand Assets
          p.top-descr Our Brand Book is a basic guide for anyone using 
            | the unFederalReserve brand to create promotional materials.
          .top-info Please read the guidelines before using
          a(href="#" class="btn-rounded btn-white-bd") Download
    BrandLogotypeSection
    BrandSymbolSection
    BrandColorSection
    BrandFontSection
</template>

<script>
import BrandLogotypeSection from 'Components/BrandLogotypeSection/BrandLogotypeSection';
import BrandSymbolSection from 'Components/BrandSymbolSection/BrandSymbolSection';
import BrandColorSection from 'Components/BrandColorSection/BrandColorSection';
import BrandFontSection from 'Components/BrandFontSection/BrandFontSection';

export default {
  name: 'PageBrand',
  components: {
    BrandLogotypeSection,
    BrandSymbolSection,
    BrandColorSection,
    BrandFontSection
  }
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'

.page-brand
  background: linear-gradient(180deg, #3357CF 1.17%, #010450 78.6%)
  height: calc(100% + 200px)
  color: #fff
  position: relative

.s-top
  padding: 193px 0 75px
  @media screen and (max-width: 767px)
    padding: 168px 0 75px
  &::before
    content: ''
    position: absolute
    background: url('~images/brand-circle-bg.svg') no-repeat right 180px top
    width: 100%
    height: 100%
    top: 0
    left: 0
    right: 0
    bottom: 0
    @media screen and (max-width: 1199px)
      background-position: right top
    @media screen and (max-width: 767px)
      background-position: right -700px top -80px
  &__wrap
    max-width: 522px
    width: 100%
    margin: 0 auto
    text-align: center

.top-title
  font-weight: 700
  font-size: 56px
  line-height: 130%
  letter-spacing: 0.01em
  color: #FFFFFF
  margin-bottom: 33px
  @media screen and (max-width: 767px)
    font-size: 55px
    margin-bottom: 37px
.top-descr
  font-size: 16px
  line-height: 24px
  letter-spacing: 0.01em
  color: #FFFFFF
  margin-bottom: 37px

.top-info 
  font-weight: 600
  font-size: 18px
  line-height: 170%
  letter-spacing: 0.01em
  color: #FFFFFF
  margin-bottom: 43px
  @media screen and (max-width: 767px)
    margin-bottom: 48px

</style>
