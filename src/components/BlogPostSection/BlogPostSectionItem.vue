<template lang="pug">
  a(:href="blogItem.link" target="_blank").blog-post-item.fadeIn
    .blog-post-item__top
      .blog-post-item__label {{ pubDate }}
      h3.blog-post-item__title {{ blogItem.title }}
      p.blog-post-item__text {{ description }}...
    .blog-post-item__bottom
      .blog-post-item__more Read more
      .blog-post-item__time {{ readingTime }} min read
</template>

<script>
import {
  truncateText,
  cleanTextFromHtml,
} from '@/helpers/utils/common';

export default {
  name: 'BlogPostSectionItem',
  props: {
    blogItem: Object,
  },
  computed: {
    description() {
      return truncateText(cleanTextFromHtml(this.blogItem.description));
    },
    pubDate() {
      const pubDate = new Date(this.blogItem.pubDate).getTime();
      const currentDate = new Date().getTime();
      const diff = Math.abs(Math.floor((currentDate - pubDate) / 1000));
      const date = Math.floor(diff / (24 * 60 * 60));
      if (date === 0) {
        return 'Recently';
      }
      if (date > 7) {
        return new Date(this.blogItem.pubDate).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        });
      }
      return date === 1 ? `${date} day ago` : `${date} days ago`;
    },
    readingTime() {
      return Math.round(cleanTextFromHtml(this.blogItem.description).length / 1000);
    },
  },
  methods: {
    truncateText,
    cleanTextFromHtml,
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.blog-post-item
  position: relative
  display: flex
  flex-direction: column
  justify-content: space-between
  opacity: 1!important
  width: calc(50% - 15px)
  margin-bottom: 20px
  padding: 30px
  background: linear-gradient(180deg, #0D32A8 0%, #1B2F99 100%)
  border-radius: 25px
  @media screen and (max-width: 767px)
    width: 100%
  &::before
    position: absolute
    z-index: 1
    top: 0
    left: 0
    right: 0
    bottom: 0
    width: 100%
    height: 100%
    content: ""
    border: 2px solid #4C71EE
    border-radius: 25px
    opacity: 0
    visibility: hidden
    transition: 0.3s
  &:hover
    box-shadow: 0px 1px 25px rgba(67, 130, 255, 0.32)
    &::before
      opacity: 1
      visibility: visible
  &__top
    margin-bottom: 6px
    @media screen and (max-width: 767px)
      margin-bottom: 14px
  &__label
    margin-bottom: 6px
    font-weight: 500
    font-size: 14px
    line-height: 156.5%
    letter-spacing: 0.01em
    color: #748DE3
  &__title
    margin-bottom: 6px
    font-weight: 700
    font-size: 28px
    line-height: 40px
    letter-spacing: 0.01em
    color: #FFFFFF
    @media screen and (max-width: 374px)
      font-size: 22px
      line-height: 32px
  &__text
    margin-bottom: 0
    font-weight: 500
    font-size: 14px
    line-height: 156.5%
    letter-spacing: 0.01em
    color: #748DE3
    word-break: break-word
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
  &__more
    font-weight: 500
    font-size: 16px
    line-height: 156.5%
    letter-spacing: 0.01em
    text-decoration: underline
    color: #FFFFFF
  &__time
    font-weight: 500
    font-size: 16px
    line-height: 156.5%
    text-align: right
    letter-spacing: 0.01em
    color: #748DE3
</style>
