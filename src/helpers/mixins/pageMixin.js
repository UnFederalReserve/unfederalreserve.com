import CONFIG from 'Config';
import { mapGetters } from 'vuex';

export default {
  mounted() {
    this.$_page_setSEOData();
    this.$_page_dispatchRenderReady();
  },
  computed: {
    ...mapGetters('page', [
      'pageData',
    ]),
    $_page_pageTitle() {
      return (this.$_page_seoFromPageData && this.pageData.seo_title) || this.pageTitle;
    },
    $_page_pageDescription() {
      return (this.$_page_seoFromPageData && this.pageData.seo_description) || this.pageDescription;
    },
    $_page_pageCanonicalUrl() {
      return this.pageData ? this.pageData.canonical : '';
    },
  },
  watch: {
    $route: '$_page_setSEOData',
    notificationsAllNew: {
      handler() {
        this.$_page_setPageTitle();
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    this.$_page_setRobot(true);
  },
  methods: {
    $_page_setPageTitle(content = this.$_page_pageTitle) {
      let title = `${content || CONFIG.seo.defaultTitle} | SiteName`;
      if (this.notificationsAllNew) title = `(${this.notificationsAllNew}) ${title}`;
      document.title = title;
      this.$_page_setOgContents({ title });
    },
    $_page_setPageDescription(content = this.$_page_pageDescription) {
      const description = content || CONFIG.seo.defaultDesc;
      const descMeta = document.head.querySelector('[name=description]');
      descMeta.content = description;
      this.$_page_setOgContents({ description });
    },
    $_page_setPageImage(content = this.pageImage) {
      this.$_page_setOgContents({ image: content || CONFIG.seo.defaultImage });
    },
    $_page_setPageUrl(url = this.$_page_pageCanonicalUrl || this.pageUrl || `${CONFIG.urls.frontend}${window.location.pathname}`) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = url;
      this.$_page_setOgContents({ url });
    },
    $_page_setOgContents(data) {
      Object.entries(data).forEach(([type, content]) => {
        const meta = document.head.querySelector(`meta[property="og:${type}"]`);
        if (meta) meta.content = content;
      });
    },
    $_page_setRobot(unmount) {
      if (!this.$_page_noIndex) return;
      let meta = document.head.querySelector('meta[name="robots"][content="noindex, nofollow"]');
      if (unmount && meta) meta.remove();
      if (!unmount && !meta) {
        meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex, nofollow';
        document.head.appendChild(meta);
      }
    },
    $_page_setSEOData() {
      this.$_page_setPageTitle();
      this.$_page_setPageDescription();
      this.$_page_setPageImage();
      this.$_page_setPageUrl();
      this.$_page_setRobot();
    },
    $_page_dispatchRenderReady() {
      document.dispatchEvent(new Event('render-ready'));
    },
  },
};
