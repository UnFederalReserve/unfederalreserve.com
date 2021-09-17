<template lang="pug">
  section.BlogPostSection.s-blog-post
    .s-container
      h2.s-title Blog Posts
      .blog-post-items
        BlogPostSectionItem(
          v-for="(item, idx) in partBlogItems"
          :key="item.pubDate+idx"
          :blogItem="item"
        )
      .load-more
        .btn-rounded.btn-tsp.btn-default(@click="loadMoreItems") Load More

</template>

<script>
import CONFIG from 'Config';
import BlogPostSectionItem from './BlogPostSectionItem';

export default {
  name: 'BlogPostSection',
  components: {
    BlogPostSectionItem,
  },
  data() {
    return {
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
    max-width: 169px
    width: 100%
.fade-enter-active,
.fade-leave-active
  transition: opacity .5s
.fade-enter,
.fade-leave-to
  opacity: 0
</style>
