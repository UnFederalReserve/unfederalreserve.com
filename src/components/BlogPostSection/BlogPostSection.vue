<template lang="pug">
  section.BlogPostSection.s-blog-post
    .s-container
      h2.s-title Blog Posts
      BaseLoading(v-if="isLoading")
      template(v-else)
        .blog-post-items
          BlogPostSectionItem(
            v-for="(item, idx) in partBlogItems"
            :key="item.pubDate+idx"
            :blogItem="item"
          )
        .load-more
          .btn-rounded.btn-tsp.btn-default(
            v-if="partBlogItems.length !== 10"
            @click="loadMoreItems"
          ) Show More
          a(
            v-else
            href="https://unfederalreserve.medium.com/"
            target="_blank"
          ).btn-rounded.btn-tsp.btn-default Show More on Medium

</template>

<script>
import CONFIG from 'Config';
import BlogPostSectionItem from './BlogPostSectionItem';
import BaseLoading from '@/components/Base/BaseLoading';

export default {
  name: 'BlogPostSection',
  components: {
    BlogPostSectionItem,
    BaseLoading,
  },
  data() {
    return {
      isLoading: true,
      blogPostItems: [],
      postLimit: 4,
    };
  },
  computed: {
    partBlogItems() {
      return this.blogPostItems.slice(0, this.postLimit);
    },
  },
  async mounted() {
    await this.blogPostHundler();
  },
  methods: {
    loadMoreItems() {
      this.postLimit += 2;
    },
    handleError(response) {
      if (!response.ok) throw new Error(response);
      return response.json();
    },
    getBlogPost(url) {
      return fetch(url)
        .then(this.handleError)
        .catch(err => console.error(err));
    },
    async blogPostHundler() {
      const blogPostData = await this.getBlogPost(CONFIG.urls.blogPostApi);
      this.blogPostItems = blogPostData.items;
      this.isLoading = false;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.s-blog-post
  padding-bottom: 75px
.blog-post-items
  width: 100%
  margin-top: 43px
  display: flex
  flex-wrap: wrap
  justify-content: space-between
.load-more
  margin-top: 60px
  text-align: center
  .btn-default
    padding: 7px 35px 8px 35px
.fade-enter-active,
.fade-leave-active
  transition: opacity .5s
.fade-enter,
.fade-leave-to
  opacity: 0
</style>
