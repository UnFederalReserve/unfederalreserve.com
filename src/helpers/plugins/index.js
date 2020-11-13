import Vue from 'vue';

const context = require.context('.', true, /\.js$/);
context.keys().forEach((fileName) => {
  if (fileName === './index.js') return;
  Vue.use(context(fileName).default);
});
