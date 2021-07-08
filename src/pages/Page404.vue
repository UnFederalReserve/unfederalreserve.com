<template lang="pug">
   section.page-404
    .container
      h1.top-title page not found
      p Sorry, we could not find this page
      router-link.btn-rounded.btn-with-arrow.btn-white(:to="{name: 'home'}") go to homepage
</template>

<script>

export default {
  name: 'Page404'
};
</script>

<style lang="sass" scoped>
@import "~Styles/_variables"

.page-404
  background: url('~images/404-main-bg.svg') no-repeat center top
  background-size: cover  
  margin-top: 90px
  height: calc(100% - 89px)
  min-height: 1180px
  text-align: center
  padding-bottom: 400px
  padding-top: 535px
  margin-bottom: -200px
  @media screen and (max-width: 1660px)
    padding-top: 447px
    min-height: 1000px
  @media screen and (max-width: 1199px)
    padding-top: 380px
  @media screen and (max-width: 991px)
    min-height: 650px
    margin-bottom: -300px
    padding-top: 300px
  .btn-white
    text-transform: uppercase

.top-title
  font-weight: 700
  font-size: 31px
  line-height: 26px
  color: #FFFFFF
  margin-bottom: 10px
  text-transform: uppercase

p
  font-size: 15px
  line-height: 26px
  color: #FFFFFF
  margin-bottom: 23px

</style>
