<template lang="pug">
  section.s-info
    .s-container
      h2.s-title Learn how to use the platform
      .info-items
        LendingInfoItem(
          v-for="item in items"
          :key="item.id"
          v-bind="item",
        )
      .learn-more
        a.btn-rounded.btn-with-arrow.btn-tsp(:href="linkDocs" target="_blank") Learn More
          BaseImage.arrow-right(
            :src="require('images/arrow-right.svg')",
            alt="arrow-right",
          )
</template>

<script>

import LendingInfoItem from 'Components/LendingInfoSection/LendingInfoItem';
import BaseImage from 'Components/Base/BaseImage';
import CONFIG from 'Config';

export default {
  name: 'LendingInfoSection',
  components: {
    LendingInfoItem,
    BaseImage,
  },
  data() {
    return {
      linkDocs: `${CONFIG.urls.docsMain}/docs/instructions/`,
      items: [
        {
          id: 1,
          img: require('images/video-preview.png'),
          title: 'How To: Connect a Wallet',
          description: 'Watch our tutorial about connecting a wallet',
          videoSrc: 'https://drive.google.com/file/d/1ESRU7XrtCLJytdpAAMCbDg8FEi07PToV/preview',
        },
        {
          id: 2,
          img: require('images/video-preview.png'),
          title: 'How To: Supply Asset',
          description: 'Watch our tutorial about supplying assets',
          videoSrc: 'https://drive.google.com/file/d/1qL9zIq_X57RfkBS8AcVZUm7P4Qc0Jmk1/preview',
        },
        {
          id: 3,
          img: require('images/video-preview.png'),
          title: 'How to: Borrow Asset',
          description: 'Watch our tutorial about borrowing assets',
          videoSrc: 'https://drive.google.com/file/d/1Je9jKh7BajW4z4XSXzaqs1lHas82RJUY/preview',
        },
        {
          id: 4,
          img: require('images/video-preview.png'),
          title: 'How To: Repay a Borrow',
          description: 'Watch our tutorial about repaying a borrow',
          videoSrc: 'https://drive.google.com/file/d/1CCzQq-9kzYm-gXx2WiBqW46n_vnYD1TQ/preview',
        },
        {
          id: 5,
          img: require('images/video-preview.png'),
          title: 'How To: Withdraw',
          description: 'Watch our tutorial about withdrawing',
          videoSrc: 'https://drive.google.com/file/d/14lI9tctU_AQfkgEeEKptKdyyOvo6pJxu/preview',
        },
        {
          id: 6,
          img: require('images/video-preview.png'),
          title: 'How To: Claim Rewards',
          description: 'Watch our tutorial about claiming rewards',
          videoSrc: 'https://drive.google.com/file/d/10yrgkOKkGRV7zvrnl4iDOpYfaosQNtz-/preview',
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>

.s-info
  padding: 184px 0 154px
  position: relative
  @media screen and (max-width: 1199px)
    padding-bottom: 111px
  @media screen and (max-width: 991px)
    padding: 55px 0 58px
  &::before
    content: ""
    position: absolute
    top: -560px
    left: 0
    right: 0
    width: 100%
    height: 2364px
    background: url('~images/wave-2.svg') no-repeat center
    background-size: cover
    @media screen and (max-width: 1199px)
      top: -260px
    @media screen and (max-width: 991px)
      display: none
  .s-title
    margin-bottom: 105px
    z-index: 1
    position: relative
    @media screen and (max-width: 991px)
      margin-bottom: 77px
      font-size: 38px
  .s-container
    position: static
.info-items
  margin: 0 -15px
  display: flex
  flex-wrap: wrap
  @media screen and (max-width: 1199px)
    margin: 0 -12px
  @media screen and (max-width: 767px)
    margin: 0
    padding: 0 10px
  @media screen and (max-width: 374px)
    padding: 0
.learn-more
  text-align: center
  margin-top: -35px
  position: relative
  z-index: 1

</style>
