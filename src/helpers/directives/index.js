import Vue from 'vue';

const context = require.context('.', true, /\.js$/);
context.keys().forEach((fileName) => {
  if (fileName === './index.js') return;
  const name = fileName.replace(/(\.\/|\.js)/g, '');
  Vue.directive(name, context(fileName).default);
});
