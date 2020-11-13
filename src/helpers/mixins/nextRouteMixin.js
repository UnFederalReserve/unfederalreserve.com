export default {
  // Save from route to use as back router in order to avoid scroll on browser back button
  beforeRouteEnter(to, from, next) {
    next(vm => Object.assign(vm, { $_nextRoute_prevRoute: from }));
  },
  methods: {
    nextRoutePush(route) {
      this.nextRoute(route, 'push');
    },
    nextRouteReplace(route) {
      this.nextRoute(route, 'replace');
    },
    nextRoute(route, action = 'push') {
      const { redirect, ...restQuery } = this.$route.query;
      // Redirect to path from query redirect if it exist and not equal to current path
      if (redirect && redirect !== this.$route.path) {
        this.$router.replace({ path: redirect, query: restQuery });
      } else {
        this.$router[action](route);
      }
    },
    // Make back if redirect exist and go to passed route if not
    backRoute(route) {
      const { redirect, from } = this.$route.query;
      if (redirect) {
        if (from) {
          this.$router.replace(from);
        // Use from route saved early to use as back router in order to avoid scroll on browser back button
        } else if (this.$_nextRoute_prevRoute) {
          this.$router.replace(this.$_nextRoute_prevRoute);
        } else this.$router.back();
      } else {
        this.$router.push(route);
      }
    },
  },
};
